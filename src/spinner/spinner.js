import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Spinner extends Component {
  render() {
    const {
      size = 'calc(var(--mt-baseFontSize, 1rem) * 1.5)',
      className = '',
      style,
      nodeRef,
      ...props
    } = this.props;

    return (
      <svg
        ref={nodeRef}
        className={`mt-spinner ${className}`}
        style={{
          width: size,
          height: size,
          ...style,
        }}
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle
          className="mt-spinner_path"
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        />
      </svg>
    );
  }
}

Spinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default Spinner;
