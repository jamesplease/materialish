import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
  render() {
    const { className = '', error = false, nodeRef, ...props } = this.props;
    return (
      <textarea
        ref={nodeRef}
        className={`mt-textarea ${
          error ? 'mt-textarea-error' : ''
        } ${className}`}
        {...props}
      />
    );
  }
}

TextArea.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
};
