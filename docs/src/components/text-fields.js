import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';

export class TextFields extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">
          Text Fields
        </h1>
        <p className="paragraph">Text fields let users enter and edit text.</p>
        <p />
        <ul className="icons_links">
          <li className="icons_link">
            <Link to="/components/field">Field</Link>: provides a text input,
            label, and error message
          </li>
          <li className="icons_link">
            <Link to="/components/input">Input</Link>: a standalone text input
          </li>
        </ul>
        <h2 className="secondaryHeader componentDoc_standaloneSecondaryHeader">
          Useful Links
        </h2>
        <ul className="componentDoc_links">
          <li className="componentDoc_linkItem">
            <a href={materialDocsLink} className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-file-text" /> Material
              Guidelines
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouteData(TextFields);
