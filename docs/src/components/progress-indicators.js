import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';

export class ProgressIndicators extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">
          Progress Indicators
        </h1>
        <p className="paragraph">
          Progress indicators provide information regarding the progress of a
          deterministic or nondeterministic process.
        </p>
        <p />
        <ul className="icons_links">
          <li className="icons_link">
            <Link to="/components/spinner">Spinner</Link>: a nondeterministic
            loading indicator
          </li>
          <li className="icons_link">
            <Link to="/components/loading-dots">Loading Dots</Link>: a
            nondeterministic loading indicator
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

export default withRouteData(ProgressIndicators);
