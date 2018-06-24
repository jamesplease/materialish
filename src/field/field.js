import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputComponent from '../input/input';
import TextAreaComponent from '../text-area/text-area';

export default class Field extends Component {
  static Input = InputComponent;
  static TextArea = TextAreaComponent;

  static Label = ({ className = '', children, ...props }) => (
    <div className={`mt-field_label ${className}`} {...props}>
      <span>{children}</span>
    </div>
  );

  static ErrorMessage = ({ className = '', ...props }) => (
    <div className={`mt-field_errorMessage ${className}`} {...props} />
  );

  render() {
    const { className = '', required = false, ...props } = this.props;

    return (
      <label
        className={`mt-field ${
          required ? 'mt-field-required' : ''
        } ${className}`}
        {...props}
      />
    );
  }
}

Field.Label.propTypes = {
  className: PropTypes.string,
};

Field.ErrorMessage.propTypes = {
  className: PropTypes.string,
};

Field.propTypes = {
  className: PropTypes.string,
  required: PropTypes.bool,
};
