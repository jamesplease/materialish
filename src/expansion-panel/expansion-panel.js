import React, { Component } from 'react';
import './expansion-panel.css';
import Expandable from '../expandable/expandable';
import IconKeyboardArrowDown from '../icons/icon-keyboard-arrow-down';

export default class ExpansionPanel extends Component {
  static Header = ({ className = '', children, ...props }) => {
    return (
      <div className={`mt-expansionPanel_header ${className}`} {...props}>
        {children}
        <IconKeyboardArrowDown
          className="mt-expansionPanel_icon"
          size="1.5em"
        />
      </div>
    );
  };

  static Body = ({ className = '', children, open = false, ...props }) => {
    return (
      <Expandable
        open={open}
        className={`mt-expansionPanel_body ${className}`}
        {...props}>
        <div className="mt-expansionPanel_bodyWrapper">{children}</div>
      </Expandable>
    );
  };

  render() {
    const { className = '', children, open = false, ...props } = this.props;

    return (
      <div
        className={`mt-expansionPanel ${
          open ? 'mt-expansionPanel-open' : ''
        } ${className}`}
        {...props}>
        {React.Children.map(children, child =>
          React.cloneElement(child, { open })
        )}
      </div>
    );
  }
}
