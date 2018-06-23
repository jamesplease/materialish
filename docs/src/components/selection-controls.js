import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';

export class SelectionControls extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">
          Selection Controls
        </h1>
        <p className="paragraph">
          Selection controls allow the user to select options.
        </p>
        <p />
        <ul className="icons_links">
          <li className="icons_link">
            <Link to="/components/checkbox">Checkbox</Link>: represents a
            boolean value that can be in one of two states, true or false
          </li>
          <li className="icons_link">
            <Link to="/components/radio">Radio Button</Link>: represents one
            option among several choices
          </li>
          <li className="icons_link">
            <Link to="/components/switch">Switch</Link>: represents a value that
            can be toggled on or off
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

export default withRouteData(SelectionControls);
