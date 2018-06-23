import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';

export class Buttons extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">Buttons</h1>
        <p className="paragraph">
          Button represent that an action will occur when the user clicks or
          touches them.
        </p>
        <p />
        <ul className="icons_links">
          <li className="icons_link">
            <Link to="/components/button">Button</Link>: a button that has text,
            and may optionally also include an icon
          </li>
          <li className="icons_link">
            <Link to="/components/icon-button">Icon Button</Link>: a round
            button with an icon, and no text
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

export default withRouteData(Buttons);
