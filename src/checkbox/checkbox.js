import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    const { className = '', style, ...props } = this.props;
    return (
      <div className={`mt-checkbox ${className}`} style={style}>
        <input className="mt-checkbox_input" type="checkbox" {...props} />
        <div className="mt-checkbox_checkbox" />
        <div className="mt-checkbox_focus" />
      </div>
    );
  }
}

export default Checkbox;
