import React, { Component } from 'react';
import './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="footer_licenseText">
          Materialish is licensed under the{' '}
          <a
            href="https://github.com/jamesplease/materialish/blob/master/LICENSE"
            className="footer_licenseLink">
            MIT License
          </a>.
        </span>
        <span className="footer_licenseTextShort">
          <i className="zmdi zmdi-globe footer_icon" />
          <a
            href="https://github.com/jamesplease/materialish/blob/master/LICENSE"
            className="footer_licenseLink footer_licenseLink-short">
            MIT License
          </a>
        </span>
        <a
          className="footer_githubLink"
          href="https://github.com/jamesplease/materialish">
          <i className="zmdi zmdi-github footer_icon" />{' '}
          <span className="footer_githubLinkText">View Project on GitHub</span>
        </a>
      </footer>
    );
  }
}
