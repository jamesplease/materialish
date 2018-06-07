import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../ripple/ripple';

class ChoiceChip extends Component {
  render() {
    const { className = '', ripple = true, children, ...props } = this.props;

    return (
      <div className={`mt-chip ${className}`} onClick={this.onClick}>
        <input type="radio" className="mt-chip_input" {...props} />
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
      onClick();
    }
  };
}

ChoiceChip.propTypes = {
  className: PropTypes.string,
  ripple: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ChoiceChip;
