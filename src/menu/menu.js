import React, { Component } from 'react';

class Menu extends Component {
  render() {
    const { children, className = '', getRef, ...props } = this.props;
    return (
      <ul className={`mt-menu ${className}`} ref={getRef} {...props}>
        {children}
      </ul>
    );
  }
}

Menu.Option = class MenuOption extends Component {
  render() {
    const {
      children,
      separator = false,
      selected = false,
      getRef,
      className = '',
      ...props
    } = this.props;
    return (
      <li
        className={`mt-menu_option ${
          separator ? 'mt-menu_optionSeparator' : ''
        } ${selected ? 'mt-menu_optionSelected' : ''} ${className}`}
        ref={getRef}
        {...props}>
        {children}
      </li>
    );
  }
};

Menu.Title = class MenuTitle extends Component {
  render() {
    const { children, className = '', getRef, ...props } = this.props;
    return (
      <li className={`mt-menu_title ${className}`} ref={getRef} {...props}>
        {children}
      </li>
    );
  }
};

Menu.Message = class MenuMessage extends Component {
  render() {
    const { children, className = '', getRef, ...props } = this.props;
    return (
      <li
        className={`mt-menu_option mt-menu_message ${className}`}
        ref={getRef}
        {...props}>
        {children}
      </li>
    );
  }
};

export default Menu;
