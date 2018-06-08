import React, { Component } from 'react';

export default class Snackbar extends Component {
  render() {
    const { className = '', ...props } = this.props;
    return <div className={`mt-snackbar ${className}`} {...props} />;
  }
}
