import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Radio extends Component {
  render() {
    const { className = '', style, nodeRef, ...props } = this.props;

    return (
      <div className={`mt-radio ${className}`} style={style}>
        <input
          className="mt-radio_input"
          type="radio"
          {...props}
          ref={nodeRef}
        />
        <div className="mt-radio_radio" />
        <div className="mt-radio_focus" />
      </div>
    );
  }
}

Radio.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Radio;
