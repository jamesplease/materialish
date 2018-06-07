import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../ripple/ripple';

class ActionChip extends Component {
  render() {
    const { className = '', ripple = true, children, ...props } = this.props;

    return (
      <div
        className={`mt-chip ${
          props.onClick ? '' : 'mt-chip-notClickable'
        } ${className}`}
        {...props}
        onClick={this.onClick}>
        <div className="mt-chip_chip">{children}</div>
        {ripple && props.onClick && <Ripple ref={this.getRippleRef} />}
      </div>
    );
  }

  getRippleRef = component => {
    this.rippleComponent = component;
  };

  onClick = e => {
    const { onClick } = this.props;

    if (this.rippleComponent) {
      this.rippleComponent.onClick(e);
    }

    if (onClick) {
      onClick();
    }
  };
}

ActionChip.propTypes = {
  className: PropTypes.string,
  ripple: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default ActionChip;
