import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../images/materialish-logo.svg';

export default class Header extends Component {
  render() {
    const { onToggleMenu } = this.props;

    return (
      <header className="header">
        <i className="zmdi zmdi-menu header_navToggle" onClick={onToggleMenu} />
        <Link to="/" tabIndex="-1" className="header_logoLink">
          <img src={logo} className="materialishLogo" />
        </Link>
        <h1 className="header_appName">
          <Link to="/" className="header_appLink">
            Materialish
          </Link>
        </h1>
        <a
          href="https://github.com/jamesplease/materialish"
          className="header_githubLink">
          <i className="zmdi zmdi-github" />
        </a>
      </header>
    );
  }

  state = {
    menuOpen: false,
  };
}
