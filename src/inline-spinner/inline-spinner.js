import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InlineSpinner extends Component {
  render() {
    const {
      size = 'calc(var(--mt-baseFontSize, 1rem) * 1.125)',
      style,
      ...rest
    } = this.props;

    return (
      <svg
        style={{
          width: size,
          height: size,
          ...style,
        }}
        viewBox="0 0 50 40"
        {...rest}>
        <g className="mt-inlineSpinner_one">
          <circle cx="10" cy="10" r="5" className="mt-inlineSpinner_circle" />
        </g>
        <g className="mt-inlineSpinner_three">
          <circle cx="40" cy="10" r="5" className="mt-inlineSpinner_circle" />
        </g>
        <g className="mt-inlineSpinner_two">
          <circle cx="25" cy="10" r="5" className="mt-inlineSpinner_circle" />
        </g>
      </svg>
    );
  }
}

InlineSpinner.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
