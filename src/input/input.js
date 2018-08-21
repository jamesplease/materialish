import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconClose from '../icons/icon-close';

export default class Input extends Component {
  render() {
    const {
      className = '',
      style,
      icon,
      error = false,
      clearable = false,
      onClear,
      value,
      disabled = false,
      ...props
    } = this.props;

    const hasIcon = Boolean(icon);
    const hasValue = Boolean(value);

    let iconClass, iconSize;
    if (icon && icon.props) {
      iconClass = icon.props.className || '';
      iconSize = icon.props.size || '1.75em';
    }

    return (
      <div
        className={`mt-input_container ${
          disabled ? 'mt-input_container-disabled' : ''
        } ${className}`}
        style={style}>
        <input
          className={`mt-input ${error ? 'mt-input-error' : ''} ${
            clearable ? 'mt-input-clearable' : ''
          } ${hasIcon ? 'mt-input-withIcon' : ''}`}
          ref={this.getRef}
          value={value}
          disabled={disabled}
          {...props}
        />
        {hasIcon
          ? React.cloneElement(icon, {
              size: iconSize,
              className: `mt-input-icon ${iconClass}`,
            })
          : null}
        {clearable && (
          <IconClose
            className={`mt-input_closeBtn ${
              hasValue ? 'mt-input_closeBtn-visible' : ''
            }`}
            size="1.75em"
            tabIndex="0"
            role="button"
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();

                if (this.nodeRef && this.nodeRef.focus) {
                  this.nodeRef.focus();
                }

                if (typeof onClear === 'function') {
                  onClear(e);
                }
              }
            }}
            onClick={onClear}
          />
        )}
      </div>
    );
  }

  getRef = ref => {
    const { nodeRef } = this.props;

    if (typeof nodeRef === 'function') {
      nodeRef(ref);
    } else if (nodeRef && nodeRef.hasOwnProperty('current')) {
      nodeRef.current = ref;
    }

    this.nodeRef = ref;
  }
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  clearable: PropTypes.bool,
  icon: PropTypes.element,
};
