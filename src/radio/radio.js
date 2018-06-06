import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Radio extends Component {
  render() {
    const { className = '', style, ...props } = this.props;

    return (
      <div class={`mt-radio ${className}`} style={style}>
        <input class="mt-radio_input" type="radio" {...props} />
        <div class="mt-radio_radio" />
        <div class="mt-radio_focus" />
      </div>
    );
  }
}

Radio.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Radio;
