import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProgressBar extends Component {
  render() {
    const {
      className = '',
      style = {},
      loaded = 0,
      buffered = 100,
      indeterminate = false,
    } = this.props;

    return (
      <div
        className={`mt-progressBar ${
          indeterminate ? 'mt-progressBar-indeterminate' : ''
        } ${className}`}
        style={{
          '--mt-progressBar-loaded': loaded,
          '--mt-progressBar-buffered': indeterminate ? 100 : buffered,
          ...style,
        }}>
        <div className="mt-progressBar_buffer" />
        <div className="mt-progressBar_total" />
        <div className="mt-progressBar_loaded" />
      </div>
    );
  }
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  loaded: PropTypes.number,
  buffered: PropTypes.number,
  indeterminate: PropTypes.bool,
};
