import React, { Component } from 'react';
import classnames from 'classnames';
import Ripple from '../ripple/ripple';

console.log('WAT');

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
      <button
        {...props}
        className={componentClassNames}
        onClick={this.onClick}>
        {ripple && (
          <Ripple ref={this.getRippleRef} />
        )}
        {children}
      </button>
    );
  }

  getRippleRef = (node, thing) => {
    this.ripple = node;
  }

  onClick = (e) => {
    const { onClick } = this.props;

    if (this.ripple) {
      this.ripple.onClick(e);
    }

    if (onClick) {
      onClick();
    }
  }
}

export default Button;
