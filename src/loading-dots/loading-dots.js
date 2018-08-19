import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoadingDots extends Component {
  render() {
    const {
      size = 'calc(var(--mt-baseFontSize, 1rem) * 1.125)',
      style,
      nodeRef,
      ...rest
    } = this.props;

    return (
      <svg
        ref={nodeRef}
        style={{
          width: size,
          height: size,
          ...style,
        }}
        viewBox="0 0 50 40"
        {...rest}>
        <g className="mt-loadingDots_one">
          <circle cx="10" cy="10" r="5" className="mt-loadingDots_circle" />
        </g>
        <g className="mt-loadingDots_three">
          <circle cx="40" cy="10" r="5" className="mt-loadingDots_circle" />
        </g>
        <g className="mt-loadingDots_two">
          <circle cx="25" cy="10" r="5" className="mt-loadingDots_circle" />
        </g>
      </svg>
    );
  }
}

LoadingDots.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
