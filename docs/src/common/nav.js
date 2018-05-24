import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { Link, withSiteData } from 'react-static';
import Overlay from './overlay';
import './nav.css';

export class Nav extends Component {
  render() {
    const { components, isMenuOpen, onToggleMenu } = this.props;

    // This ensures that the components appear in the navigation in
    // alphabetical order
    const sortedComponentsData = Array.from(components).sort((a, b) => {
      if (a.componentKey === b.componentKey) {
        return 0;
      }

      return a.componentKey < b.componentKey ? -1 : 1;
    });

    const navClassnames = classnames('nav', {
      'nav-open': isMenuOpen,
    });

    return (
      <Fragment>
        <nav className={navClassnames}>
          <ul className="nav_navList">
            <li className="nav_navListItem">
              <Link
                exact
                to="/"
                className="nav_navSectionLink"
                onClick={this.onNavigate}>
                Introduction
              </Link>
            </li>
            {/* One day... */}
            {/* <li className="nav_navListItem">
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
            </li> */}
            <li className="nav_navListItem">
              <Link
                exact
                to="/components"
                className="nav_navSectionLink"
                onClick={this.onNavigate}>
                Components
              </Link>
              <ul className="nav_navSubList">
                {sortedComponentsData.map(component => {
                  return (
                    <li className="nav_navSubListItem" key={component.name}>
                      <Link
                        exact
                        to={`/components/${component.url}`}
                        className="nav_navLink"
                        onClick={this.onNavigate}>
                        {component.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
        <Overlay active={isMenuOpen} onClick={onToggleMenu} />
      </Fragment>
    );
  }

  onNavigate = () => {
    const { isMenuOpen, onToggleMenu } = this.props;

    if (isMenuOpen) {
      onToggleMenu();
    }
  };
}

export default withSiteData(Nav);
