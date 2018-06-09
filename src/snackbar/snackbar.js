import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Snackbar extends Component {
  render() {
    const { className = '', ...props } = this.props;
    return <div className={`mt-snackbar ${className}`} {...props} />;
  }
}

Snackbar.propTypes = {
  className: PropTypes.string,
};
