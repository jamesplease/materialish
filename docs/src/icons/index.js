import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';
import './index.css';

export class Icons extends Component {
  render() {
    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">Icons</h1>
        <p className="paragraph">
          Material Design includes a collection of icons. Materialish exports
          these icons as individual React components for you to use in your
          applications.
        </p>
        <p />
        <ul className="icons_links">
          <li className="icons_link">
            <Link to="/icons/usage">Usage</Link>: Learn how to import and use
            icons in your application
          </li>
          <li className="icons_link">
            <Link to="/icons/catalog">Catalog</Link>: View and search the icon
            collection
          </li>
        </ul>
        <h2 className="secondaryHeader componentDoc_standaloneSecondaryHeader">
          Useful Links
        </h2>
        <ul className="componentDoc_links">
          <li className="componentDoc_linkItem">
            <a
              href="https://material.io/tools/icons/?style=baseline"
              className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-file-text" />Material
              Design Icons Docs
            </a>
          </li>
          <li className="componentDoc_linkItem">
            <a
              href="https://github.com/google/material-design-icons"
              className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-file-text" />Material
              Design Icons GitHub Repository
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouteData(Icons);
