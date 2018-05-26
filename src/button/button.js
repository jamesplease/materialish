import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Ripple from '../ripple/ripple';

class Button extends Component {
  render() {
    const {
      children,
      className = '',
      raised = false,
      flat = false,
      stroked = false,
      compact = flat,
      ripple = true,
      ...otherProps
    } = this.props;

    const componentClassNames = classnames('mt-button', className, {
      'mt-button-raised': raised,
      'mt-button-flat': flat,
      'mt-button-stroked': stroked,
      'mt-button-compact': compact,
    });

    return (
      <button
        {...otherProps}
        className={componentClassNames}
        onClick={this.onClick}>
        {ripple && <Ripple ref={this.getRippleRef} />}
        {children}
      </button>
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

Button.propTypes = {
  className: PropTypes.string,
  raised: PropTypes.bool,
  flat: PropTypes.bool,
  stroked: PropTypes.bool,
  compact: PropTypes.bool,
  ripple: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
