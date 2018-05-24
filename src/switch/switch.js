import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const { className = '', style, ...props } = this.props;
    return (
      <div className={`mt-switch ${className}`} {...style}>
        <input type="checkbox" className="mt-switch_input" {...props} />
        <div className="mt-switch_switch" />
        <div className="mt-switch_focus" />
      </div>
    );
  }
}

export default Checkbox;
