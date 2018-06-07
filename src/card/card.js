import React, { Component } from 'react';
import PropTypes from 'prop-types';

function clamp(min, val, max) {
  return Math.min(Math.max(min, val), max);
}

class Card extends Component {
  render() {
    const { className = '', depth = 1, ...props } = this.props;

    const depthToUse = Number.isNaN(depth) ? 1 : depth;
    const clampedDepth = clamp(1, depthToUse, 5);

    return (
      <div
        className={`mt-card mt-card-${clampedDepth} ${className}`}
        {...props}
      />
    );
  }
}

Card.propTypes = {
  className: PropTypes.string,
  depth: PropTypes.oneOf([1, 2, 3, 4, 5]),
};

export default Card;
