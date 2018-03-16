import React, { Component } from 'react';

class Switch extends Component {
  render() {
    const { children, className = '', ...props } = this.props;

    return (
      <label
        className={`mt-switch ${
          children ? '' : 'mt-switch-noLabel'
        } ${className}`}
      >
        <input className="mt-switch_input" type="checkbox" {...props} />
        <span className="mt-switch_textWrapper">{children}</span>
      </label>
    );
  }
}

export default Switch;
