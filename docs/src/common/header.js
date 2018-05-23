import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../materialish-logo.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img src={logo} className="materialishLogo"/>
        </Link>
        <h1 className="header_appName">
          <Link to="/" className="header_appLink">
            Materialish
          </Link>
        </h1>
      </header>
    );
  }
}
