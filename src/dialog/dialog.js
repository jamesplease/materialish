import React, { Component } from 'react';

export default class Dialog extends Component {
  static Title = ({ className = '', ...props }) => (
    <div className={`mt-dialog_title ${className}`} {...props} />
  );
  static Body = ({ className = '', ...props }) => (
    <div className={`mt-dialog_content ${className}`} {...props} />
  );

  static Actions = ({ className = '', ...props }) => (
    <div className={`mt-dialog_actions ${className}`} {...props} />
  );

  render() {
    const { className = '', ...props } = this.props;
    return <div className={`mt-dialog ${className}`} {...props} />;
  }
}
