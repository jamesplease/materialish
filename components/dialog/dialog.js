import React, { Component } from 'react';

class Dialog extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-dialog ${className}`} {...props}>
        {children}
      </div>
    );
  }
}

Dialog.Title = class DialogTitle extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-dialog_title ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

Dialog.Content = class DialogContent extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-dialog_content ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

Dialog.Actions = class DialogActions extends Component {
  render() {
    const { children, className = '', ...props } = this.props;
    return (
      <div className={`mt-dialog_actions ${className}`} {...props}>
        {children}
      </div>
    );
  }
};

export default Dialog;
