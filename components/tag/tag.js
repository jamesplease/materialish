import React, { Component } from 'react';

class Tag extends Component {
  render() {
    const {
      children,
      className = '',
      highlighted = false,
      ...props
    } = this.props;

    const isClickable = typeof props.onClick === 'function';

    return (
      <div
        className={`mt-tag ${highlighted ? 'mt-tag-highlighted' : ''} ${
          isClickable ? 'mt-tag-clickable' : ''
        } ${className}`}
        {...props}>
        {children}
      </div>
    );
  }
}

export default Tag;
