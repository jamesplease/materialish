import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../ripple/ripple';

export default class InputChip extends Component {
  render() {
    const {
      className = '',
      onClose,
      icon,
      ripple = true,
      children,
      ...props
    } = this.props;
    return (
      <div
        className={`mt-chip ${
          props.onClick ? '' : 'mt-chip-notClickable'
        } ${className}`}
        onClick={this.onClick}>
        {icon &&
          React.cloneElement(icon, {
            className: `mt-chip_icon ${icon.props.className}`,
          })}
        <div className="mt-chip_chip">{children}</div>
        {onClose && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-chip_closeIcon"
            onClick={this.onClose}
            width="1em"
            height="1em"
            viewBox="0 0 48 48">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z" />
          </svg>
        )}
        {ripple && props.onClick && <Ripple ref={this.getRippleRef} />}
      </div>
    );
  }

  getRippleRef = component => {
    this.rippleComponent = component;
  };

  onClose = e => {
    const { onClose } = this.props;
    e.stopPropagation();
    onClose(e);
  };

  onClick = e => {
    const { onClick } = this.props;

    if (this.rippleComponent) {
      this.rippleComponent.onClick(e);
    }

    if (onClick) {
      onClick(e);
    }
  };
}

InputChip.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element,
  ripple: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
};
