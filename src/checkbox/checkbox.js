import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Checkbox.PropTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Checkbox;
