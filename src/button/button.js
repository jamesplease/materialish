import React, { Component } from 'react';
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
      secondary = false,
      ripple = true,
      ...props
    } = this.props;

    const componentClassNames = classnames('mt-button', className, {
      'mt-button-raised': raised,
      'mt-button-flat': flat,
      'mt-button-stroked': stroked,
      'mt-button-compact': compact,
      'mt-button-secondary': secondary
    });

    return (
      <button className={componentClassNames} {...props}>
        {ripple && <Ripple />}
        {children}
      </button>
    );
  }
}

Button.Group = class ButtonGroup extends Component {
  render() {
    const { children, className = '', ...props } = this.props;

    return (
      <div className={`mt-buttonGroup ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

export default Button;
