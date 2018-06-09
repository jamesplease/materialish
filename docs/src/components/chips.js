import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';

export class Chips extends Component {
  render() {
    const { component } = this.props;
    const { materialDocsLink } = component;

    return (
      <div className="componentDoc">
        <h1 className="primaryHeader componentDoc_primaryHeader">Chips</h1>
        <ul className="componentDoc_links">
          <li className="componentDoc_linkItem">
            <a href={materialDocsLink} className="componentDoc_linkAnchor">
              <i className="componentDoc_icon zmdi zmdi-file-text" /> Material
              Design Icons Docs
            </a>
          </li>
        </ul>
        <p className="paragraph">
          Chips are versatile, compact elements that represent an input,
          attribute, or action. Materialish provides several different
          Components that reflect the different uses of Chips.
        </p>
        <p />
        <ul className="icons_links">
          <li className="icons_link">
            <Link to="/components/input-chip">Input Chip</Link>: represents an
            entity or different attributes.
          </li>
          <li className="icons_link">
            <Link to="/components/action-chip">Action Chip</Link>: an
            alternative to buttons.
          </li>
          <li className="icons_link">
            <Link to="/components/choice-chip">Choice Chip</Link>: an
            alternative to radio buttons.
          </li>
          <li className="icons_link">
            <Link to="/components/filter-chip">Filter Chip</Link>: an
            alternative to checkboxes.
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouteData(Chips);
