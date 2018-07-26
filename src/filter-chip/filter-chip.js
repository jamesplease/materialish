import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../ripple/ripple';

class FilterChip extends Component {
  render() {
    const {
      className = '',
      ripple = true,
      icon,
      children,
      ...props
    } = this.props;

    return (
      <div className={`mt-chip ${className}`} onClick={this.onClick}>
        <input type="checkbox" className="mt-chip_input" {...props} />
        {icon &&
          React.cloneElement(icon, {
            className: `mt-chip_icon ${icon.props.className}`,
          })}
        <svg className="mt-chip_checkmark" viewBox="-2 -3 30 30">
          <path
            className="mt-chip_checkmarkPath"
            fill="none"
            stroke="black"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
        <div className="mt-chip_chip">{children}</div>
        {ripple && <Ripple ref={this.getRippleRef} />}
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
      onClick(e);
    }
  };
}

FilterChip.propTypes = {
  className: PropTypes.string,
  ripple: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};

export default FilterChip;
