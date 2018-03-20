import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    const { children, className = '', vertical = false } = this.props;

    return (
      <ul
        className={`mt-navigation ${
          vertical ? 'mt-navigation-vertical' : ''
        } ${className}`}
      >
        {children}
      </ul>
    );
  }
}

Navigation.Item = class NavigationItem extends Component {
  render() {
    const { children, className = '', active = false } = this.props;

    return (
      <li
        className={`mt-navigation_item ${
          active ? 'mt-navigation_item-active' : ''
        } ${className}`}
      >
        {children}
      </li>
    );
  }
};

export default Navigation;
