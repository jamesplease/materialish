import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Snackbar extends Component {
  render() {
    const { className = '', nodeRef, ...props } = this.props;

    return (
      <div className={`mt-snackbar ${className}`} ref={nodeRef} {...props} />
    );
  }
}

Snackbar.propTypes = {
  className: PropTypes.string,
};
