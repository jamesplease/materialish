import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const {
      children,
      className = '',
      labelAlignment = 'left',
      ...props
    } = this.props;

    return (
      <label
        className={`mt-checkbox ${children ? '' : 'mt-checkbox-noLabel'} ${
          labelAlignment.toLowerCase() === 'right'
            ? 'mt-checkbox-rightLabel'
            : ''
        } ${className}`}
      >
        <input type="checkbox" className="mt-checkbox_input" {...props} />
        <span className="mt-checkbox_textWrapper">{children}</span>
      </label>
    );
  }
}

export default Checkbox;
