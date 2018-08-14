import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ripple from '../ripple/ripple';
import Elevation from '../elevation/elevation';

export default class Menu extends Component {
  render() {
    const { className = '', ...props } = this.props;
    return (
      <Elevation depth={1}>
        <ul className={`mt-menu ${className}`} {...props} />
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
      ...props
    } = this.props;
    return (
      <div
        className={`mt-menu_item ${
          selected ? 'mt-menu_item-selected' : ''
        } ${className}`}>
        {!props.href && (
          <button className="mt-menu_button" {...props} onClick={this.onClick}>
            {children}
          </button>
        )}
        {props.href && (
          <a className="mt-menu_link" {...props} onClick={this.onClick}>
            {children}
          </a>
        )}
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
      onClick();
    }
  };
}

Item.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  ripple: PropTypes.bool,
};

function Separator(props) {
  const { className, rest } = props;

  return <div className={`mt-menu_separator ${className}`} {...rest} />;
}

Separator.propTypes = {
  className: PropTypes.string,
};

Menu.Item = Item;
Menu.Separator = Separator;
