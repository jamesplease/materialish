import React, { Component } from 'react';
import PropTypes from 'prop-types';
import warning from '../utils/warning';

const TableContext = React.createContext({ columnProps: {} });

const columnInheritedProps = ['width', 'rightBorder'];

function areEqualShallow(a, b) {
  for (let key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }
  for (let key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

export default class Table extends Component {
  render() {
    const {
      children,
      loading = false,
      className = '',
      nodeRef,
      ...props
    } = this.props;

    return (
      <TableContext.Provider value={this.state.context}>
        <div
          ref={nodeRef}
          className={`mt-table ${
            loading ? 'mt-table-loading' : ''
          } ${className}`}
          role="table"
          {...props}>
          {children}
        </div>
      </TableContext.Provider>
    );
  }

  setColumnsProps = map => {
    this.setState(state => ({
      context: {
        ...state.context,
        columnProps: map,
      },
    }));
  };

  state = {
    context: {
      columnProps: {},
      setColumnsProps: this.setColumnsProps,
    },
  };
}

Table.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
};

class TableHead extends Component {
  render() {
    const { children, className = '', nodeRef, ...props } = this.props;
    return (
      <div
        ref={nodeRef}
        className={`mt-table_header ${className}`}
        role="rowgroup"
        {...props}>
        {children}
      </div>
    );
  }
}

TableHead.propTypes = {
  className: PropTypes.string,
};

class TableHeadRow extends Component {
  render() {
    const {
      children,
      nodeRef,
      className = '',
      columnProps, // eslint-disable-line
      setColumnsProps, // eslint-disable-line
      ...props
    } = this.props;

    return (
      <div
        ref={nodeRef}
        className={`mt-table_row mt-table_headerRow ${className}`}
        role="row"
        {...props}>
        {children}
      </div>
    );
  }

  componentDidMount() {
    const { children, setColumnsProps } = this.props;

    const map = {};
    React.Children.forEach(children, (child, index) => {
      Object.keys(child.props).forEach(propName => {
        if (columnInheritedProps.includes(propName)) {
          map[index] = map[index] || {};
          map[index][propName] = child.props[propName];
        }
      });
    });

    setColumnsProps(map);
  }

  componentDidUpdate() {
    const { children, setColumnsProps, columnProps } = this.props;

    const map = {};
    React.Children.forEach(children, (child, index) => {
      Object.keys(child.props).forEach(propName => {
        if (columnInheritedProps.includes(propName)) {
          map[index] = map[index] || {};
          map[index][propName] = child.props[propName];
        }
      });
    });

    if (Object.keys(map).length === 0 && map.constructor === Object) {
      return;
    }

    for (const prop in map) {
      if (map.hasOwnProperty(prop)) {
        if (!areEqualShallow(map, columnProps)) return;
      }
    }

    setColumnsProps(map);
  }
}

const WrappedTableHeadRow = props => {
  return (
    <TableContext.Consumer>
      {ctxProps => <TableHeadRow {...props} {...ctxProps} />}
    </TableContext.Consumer>
  );
};

WrappedTableHeadRow.propTypes = {
  className: PropTypes.string,
};

class TableHeadCell extends Component {
  render() {
    const { children, className = '', nodeRef, ...props } = this.props;

    return (
      <TableCell
        ref={nodeRef}
        className={`mt-table_headerCell ${className}`}
        role="columnheader"
        {...props}>
        <div className="mt-table_headerCellContent">{children}</div>
      </TableCell>
    );
  }
}

TableHeadCell.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  rightBorder: PropTypes.bool,
};

class TableBody extends Component {
  render() {
    const { className = '', children, nodeRef, ...props } = this.props;

    return (
      <div
        ref={nodeRef}
        className={`mt-table_body ${className}`}
        role="rowgroup"
        {...props}>
        {children}
      </div>
    );
  }
}

TableBody.propTypes = {
  className: PropTypes.string,
};

class TableRow extends Component {
  render() {
    const { children, className = '', nodeRef, ...props } = this.props;
    const isClickable = typeof props.onClick === 'function';

    return (
      <TableContext.Consumer>
        {({ columnProps }) => (
          <div
            ref={nodeRef}
            className={`mt-table_row ${
              isClickable ? 'mt-table-clickableElement' : ''
            } ${className}`}
            role="row"
            {...props}>
            {React.Children.map(children, (child, index) => {
              const childProps =
                columnProps && columnProps[index] ? columnProps[index] : {};
              return React.cloneElement(child, {
                ...childProps,
              });
            })}
          </div>
        )}
      </TableContext.Consumer>
    );
  }
}

TableRow.propTypes = {
  className: PropTypes.string,
};

class TableCell extends Component {
  render() {
    const {
      children,
      className = '',
      rightBorder = false,
      width,
      style,
      nodeRef,
      ...props
    } = this.props;

    return (
      <div
        ref={nodeRef}
        className={`mt-table_cell ${
          rightBorder ? 'mt-table_cell-rightBorder' : ''
        } ${className}`}
        role="cell"
        style={{
          ...style,
          minWidth: width ? width : null,
          maxWidth: width ? width : null,
        }}
        {...props}>
        {children}
      </div>
    );
  }
}

TableCell.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  rightBorder: PropTypes.bool,
};

class TableExpandedRowContent extends Component {
  render() {
    const { className = '', children, open, nodeRef, ...props } = this.props;

    return (
      <div
        className={`mt-table_expandedRowContent ${
          open ? 'mt-table_expandedRowContent-open' : ''
        }${className}`}
        {...props}
        ref={this.getRef}>
        {children}
      </div>
    );
  }

  getSnapshotBeforeUpdate() {
    return this.el ? this.el.getBoundingClientRect() : null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot && this.el) {
      if (prevProps.open !== this.props.open) {
        const bb = this.el.getBoundingClientRect();
        this.el.style.height = `${snapshot.height}px`;

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.el.style.transition = 'height .2s ease-out';
            this.el.style.height = `${bb.height}px`;
            setTimeout(() => {
              this.el.style = '';
            }, 200);
          });
        });
      }
    }
  }

  getRef = ref => {
    const { nodeRef } = this.props;

    this.el = ref;

    if (typeof nodeRef === 'string') {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          `You passed a string ref as an TableExpandedRowContent component's nodeRef prop. ` +
            `String refs are not supported in Materialish components. You may only pass a ` +
            `callback ref or the value returned by createRef(). Your ref has been ignored.`,
          'INVALID_NODE_REF_PROP'
        );
      }
    } else if (typeof nodeRef === 'function') {
      nodeRef(ref);
    } else if (nodeRef && nodeRef.hasOwnProperty('current')) {
      nodeRef.current = ref;
    }
  };
}

Table.Head = TableHead;
Table.HeadRow = WrappedTableHeadRow;
Table.HeadCell = TableHeadCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.ExpandedRowContent = TableExpandedRowContent;
