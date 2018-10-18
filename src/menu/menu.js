import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../ripple/ripple';
import Elevation from '../elevation/elevation';

export default class Menu extends Component {
  render() {
    const { className = '', nodeRef, ...props } = this.props;
    return (
      <Elevation depth={1}>
        <ul className={`mt-menu ${className}`} ref={nodeRef} {...props} />
      </Elevation>
    );
  }
}

Menu.propTypes = {
  className: PropTypes.string,
};

class Item extends Component {
  render() {
    const {
      className = '',
      selected = false,
      ripple = true,
      children,
      nodeRef,
      ...props
    } = this.props;

    return (
      <div
        className={`mt-menu_item ${
          selected ? 'mt-menu_item-selected' : ''
        } ${className}`}
        ref={nodeRef}
        {...props}
        onClick={this.onClick}>
        {children}
        {ripple && <Ripple ref={this.getRippleRef} />}
      </div>
    );
  }

  getRippleRef = component => {
    this.rippleComponent = component;
  };

  onClick = e => {
    const { onClick } = this.props;

    if (this.rippleComponent) {
      this.rippleComponent.onClick(e);
    }

    if (onClick) {
      onClick(e);
    }
  };
}

Item.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  ripple: PropTypes.bool,
};

function Separator(props) {
  const { className, nodeRef, ...rest } = props;

  return (
    <div className={`mt-menu_separator ${className}`} ref={nodeRef} {...rest} />
  );
}

Separator.propTypes = {
  className: PropTypes.string,
};

Menu.Item = Item;
Menu.Separator = Separator;
