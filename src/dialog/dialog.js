import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dialog extends Component {
  static Title = ({ className = '', nodeRef, ...props }) => (
    <div className={`mt-dialog_title ${className}`} ref={nodeRef} {...props} />
  );
  static Body = ({ className = '', nodeRef, ...props }) => (
    <div
      className={`mt-dialog_content ${className}`}
      ref={nodeRef}
      {...props}
    />
  );

  static Actions = ({ className = '', nodeRef, ...props }) => (
    <div
      className={`mt-dialog_actions ${className}`}
      ref={nodeRef}
      {...props}
    />
  );

  render() {
    const { className = '', nodeRef, ...props } = this.props;
    return (
      <div className={`mt-dialog ${className}`} ref={nodeRef} {...props} />
    );
  }
}

Dialog.propTypes = {
  className: PropTypes.string,
};

export default Dialog;
