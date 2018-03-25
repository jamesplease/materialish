import React, { Component } from 'react';

class Chip extends Component {
  render() {
    const {
      children,
      className = '',
      disabled = false,
      closeable = false,
      onCloseClick,
      ...props
    } = this.props;
    return (
      <div
        className={`mt-chip ${disabled ? 'mt-chip-disabled' : ''} ${
          closeable ? 'mt-chip-closeable' : ''
        } ${className}`}
        {...props}>
        {closeable && (
          <button className="mt-chip_close" onClick={onCloseClick}>
            <i className="mt-chip_closeIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-chip_svgCloseIcon"
                height="18"
                viewBox="0 0 24 24"
                width="18">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </i>
          </button>
        )}
        {children}
      </div>
    );
  }
}

export default Chip;
