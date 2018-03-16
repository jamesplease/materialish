import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <table className={`mt-table ${className}`} {...props}>
        {children}
      </table>
    );
  }
}

export class TableHead extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <thead className={className} {...props}>
        {children}
      </thead>
    );
  }
}

export class TableHeadRow extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <tr className={`mt-table_headRow ${className}`} {...props}>
        {children}
      </tr>
    );
  }
}

export class TableHeadCell extends Component {
  render() {
    const {
      children,
      className,
      separator = false,
      sortable = false,
      ...props
    } = this.props;
    const isClickable = typeof props.onClick === 'function';
    return (
      <th
        className={`mt-table_tableHeader mt-table_cell ${
          separator ? 'mt-table_cell-separator' : ''
        } ${isClickable ? 'mt-table-clickableElement' : ''} ${className}`}
        {...props}
      >
        <div className="mt-table_tableHeaderContents">{children}</div>
      </th>
    );
  }
}

export class TableBody extends Component {
  render() {
    const { children, ...props } = this.props;
    return <tbody {...props}>{children}</tbody>;
  }
}

export class TableRow extends Component {
  render() {
    const {
      children,
      className = '',
      tall = false,
      selected = false,
      ...props
    } = this.props;
    const isClickable = typeof props.onClick === 'function';
    return (
      <tr
        className={`mt-table_row ${
          isClickable ? 'mt-table-clickableElement' : ''
        } ${selected ? 'mt-table_row-selected' : ''} ${
          tall ? 'mt_table_row-tall' : ''
        } ${className}`}
        {...props}
      >
        {children}
      </tr>
    );
  }
}

export class TableCell extends Component {
  render() {
    const {
      children,
      className = '',
      separator = false,
      ...props
    } = this.props;
    return (
      <td
        className={`mt-table_cell ${
          separator ? 'mt-table_cell-separator' : ''
        } ${className}`}
        {...props}
      >
        <div className="mt-table_cellContents">{children}</div>
      </td>
    );
  }
}

export class TableFoot extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <tfoot className={`mt-table_footer ${className}`} {...props}>
        {children}
      </tfoot>
    );
  }
}

export class TableFootRow extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <tr className={`mt-table_footerRow mt-table_row ${className}`} {...props}>
        {children}
      </tr>
    );
  }
}

export class TableFootCell extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <td
        className={`mt-table_footerCell ${className}`}
        colSpan="99"
        {...props}
      >
        {children}
      </td>
    );
  }
}

export class TableMessage extends Component {
  render() {
    const {
      children,
      styles = {},
      className = '',
      rows = 6,
      ...props
    } = this.props;
    return (
      <tr
        className={`mt-table_message ${className}`}
        style={{ '--numRows': rows, ...styles }}
        {...props}
      >
        <td className="mt-table_messageContents" colSpan="42">
          {children}
        </td>
      </tr>
    );
  }
}

export class TableCellTitle extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <p className={`mt-table_cellTitle ${className}`} {...props}>
        {children}
      </p>
    );
  }
}

export class TableCellSubTitle extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <p className={`mt-table_cellSubtitle ${className}`} {...props}>
        {children}
      </p>
    );
  }
}

Table.Head = TableHead;
Table.HeadRow = TableHeadRow;
Table.HeadCell = TableHeadCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Foot = TableFoot;
Table.FootRow = TableFootRow;
Table.FootCell = TableFootCell;
Table.Message = TableMessage;
Table.CellTitle = TableCellTitle;
Table.CellSubtitle = TableCellSubTitle;
