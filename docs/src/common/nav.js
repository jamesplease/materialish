import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import { Link, withSiteData } from 'react-static';
import IconKeyboardArrowRight from 'materialish/icon-keyboard-arrow-right';
import Overlay from './overlay';
import ExpandableContainer from './expandable-container';
import './nav.css';

export class Nav extends Component {
  render() {
    const { components, isMenuOpen, onToggleMenu } = this.props;
    const { openStates } = this.state;

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
            <li className="nav_navListItem">
              <Link
                exact
                to="/icons"
                className="nav_navSectionLink"
                onClick={this.onNavigate}>
                Icons
              </Link>
              <ul className="nav_navSubList">
                <li className="nav_navSubListItem">
                  <Link
                    exact
                    to="/icons/usage"
                    className="nav_navLink"
                    onClick={this.onNavigate}>
                    Usage
                  </Link>
                </li>
                <li className="nav_navSubListItem">
                  <Link
                    exact
                    to="/icons/catalog"
                    className="nav_navLink"
                    onClick={this.onNavigate}>
                    Catalog
                  </Link>
                </li>
              </ul>
            </li>
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
                  const hasChildren = Boolean(_.size(component.children));
                  const isOpen = Boolean(openStates[component.name]);

                  const arrowClassnames = classnames('nav_expandIcon', {
                    'nav_expandIcon-open': isOpen,
                  });

                  return (
                    <li className="nav_navSubListItem" key={component.name}>
                      <Link
                        exact
                        to={`/components/${component.url}`}
                        className="nav_navLink"
                        onClick={() => {
                          this.onNavigate();

                          if (hasChildren) {
                            this.setState({
                              openStates: {
                                ...openStates,
                                [component.name]: !isOpen,
                              },
                            });
                          }
                        }}>
                        {component.name}
                        {hasChildren && (
                          <IconKeyboardArrowRight
                            className={arrowClassnames}
                            fill="#888"
                          />
                        )}
                      </Link>
                      {hasChildren && (
                        <ExpandableContainer open={isOpen} durationMs="200">
                          <ul>
                            {component.children.map(childComponent => {
                              return (
                                <li
                                  key={childComponent.name}
                                  className="nav_navSubListItem">
                                  <Link
                                    exact
                                    to={`/components/${childComponent.url}`}
                                    className="nav_navSubLink"
                                    onClick={this.onNavigate}>
                                    {childComponent.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </ExpandableContainer>
                      )}
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

  state = {
    openStates: {},
  };

  onNavigate = () => {
    const { isMenuOpen, onToggleMenu } = this.props;

    if (isMenuOpen) {
      onToggleMenu();
    }
  };
}

export default withSiteData(Nav);
