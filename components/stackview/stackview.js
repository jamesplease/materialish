import React, { Component } from 'react';

class StackView extends Component {
  render() {
    let {
      children,
      className = '',
      spacing = 0,
      vertical = false,
      style,
      ...props
    } = this.props;

    const styles = {
      '--spacing': spacing,
      '--grid-template-items': this.generateTemplate()
    };

    return (
      <div
        style={{ ...styles, ...style }}
        className={`mt-stackview ${
          vertical ? 'mt-stackview-vertical' : ''
        } ${className}`}
        {...props}>
        {children}
      </div>
    );
  }

  generateTemplate = () => {
    const { children = [] } = this.props;
    if (Array.isArray(children)) {
      return children
        .map(c => {
          const { size, ratio = 1, minSize = '0' } = c.props;
          if (size != null) {
            return size;
          }
          return `minmax(${minSize}, ${ratio}fr)`;
        })
        .join(' ');
    }

    return '1fr';
  };
}

StackView.Tiled = class TiledStackView extends Component {
  render() {
    let {
      children,
      className = '',
      spacing = 0,
      tileSize = 100,
      style,
      ...props
    } = this.props;

    if (typeof tileSize === 'number') {
      tileSize = `${tileSize}px`;
    }

    const styles = {
      '--spacing': spacing,
      '--grid-template-items': `repeat(auto-fill, minmax(${tileSize}, 1fr))`
    };

    return (
      <div
        style={{ ...styles, ...style }}
        className={`mt-stackview mt-stackview-tiled ${className}`}
        {...props}>
        {children}
      </div>
    );
  }
};

StackView.Item = class StackViewItem extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-stackview_item ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

export default StackView;
