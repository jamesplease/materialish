import React, { Component } from 'react';
import classnames from 'classnames';

class Checkbox extends Component {
  render() {
    const {
      children,
      className = '',
      labelAlignment = 'left',
      ...otherProps
    } = this.props;

    const componentClassNames = classnames('mt-checkbox', className, {
      'mt-checkbox-noLabel': !children,
      'mt-checkbox-rightLabel': labelAlignment.toLowerCase() === 'right'
    });

    return (
      <label
        className={componentClassNames}>
        <input {...otherProps} type="checkbox" className="mt-checkbox_input" />
        <span className="mt-checkbox_textWrapper">{children}</span>
      </label>
    );
  }
}

export default Checkbox;