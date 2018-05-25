import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Switch extends Component {
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

Switch.PropTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Switch;
