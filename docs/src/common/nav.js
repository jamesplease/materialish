import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import componentsData from "../components/components";

// This ensures that the components appear in the navigation in
// alphabetical order
const sortedComponentsData = Array.from(componentsData).sort((a, b) => {
  if (a.componentKey === b.componentKey) {
    return 0;
  }

  return a.componentKey < b.componentKey ? -1 : 1;
});

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav_navList">
          <li className="nav_navListItem">
            <Link to="/" className="nav_navSectionLink">
              Introduction
            </Link>
          </li>
          <li className="nav_navListItem">
            <Link to="/guides" className="nav_navSectionLink">
              Guides
            </Link>
            <ul className="nav_navSubList">
              <li className="nav_navSubListItem">
                <Link to="/styling" className="nav_navLink">
                  Styling
                </Link>
              </li>
              <li className="nav_navSubListItem">
                <Link to="/best-practices" className="nav_navLink">
                  Best Practices
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav_navListItem">
            <Link to="/components" className="nav_navSectionLink">
              Components
            </Link>
            <ul className="nav_navSubList">
              {sortedComponentsData.map(component => {
                return (
                  <li className="nav_navSubListItem" key={component.name}>
                    <Link
                      to={`/components${component.url}`}
                      className="nav_navLink"
                    >
                      {component.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}
