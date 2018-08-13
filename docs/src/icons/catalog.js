import React, { Component, createRef } from 'react';
import * as MaterialishIcons from 'materialish/icons';
import iconsData from 'materialish/icons-data.json';
import Clipboard from 'react-clipboard.js';
import _ from 'lodash';
import { CSSTransition } from 'react-transition-group';
import { Elevation } from 'materialish';
import IconContentCopy from 'materialish/icon-content-copy';
import IconClose from 'materialish/icon-close';
import { withRouteData } from 'react-static';
import Over from '../vendor/react-over';
import CodeHighlighter from '../vendor/doc-components/markdown/code-highlighter';
import { morph } from '../common/utils/react-over-animations';
import './catalog.css';

export class IconsCatalog extends Component {
  render() {
    const { location } = this.props.history;
    const { query = {}, pathname } = location;
    const { search = '' } = query;

    const lowercaseQuery = search.toLowerCase();

    const filteredCategories = _.mapValues(
      iconsData.categories,
      (categoryIcons, categoryName) => {
        return categoryIcons.filter(icon => {
          if (!icon.iconName || !icon.iconClass) {
            return false;
          }

          return (
            icon.iconName.toLowerCase().includes(lowercaseQuery) ||
            icon.iconClass.toLowerCase().includes(lowercaseQuery) ||
            categoryName.toLowerCase().includes(lowercaseQuery)
          );
        });
      }
    );

    const visibleCount = _
      .chain(filteredCategories)
      .flatMap()
      .uniqBy('iconName')
      .value().length;
    const totalCount = _.size(iconsData.icons);

    const displayDeleteIcon = Boolean(search);

    return (
      <Over.Provider>
        <Over.Consumer>
          {({ open }) => {
            return (
              <div className="iconsCatalog">
                <h1 className="primaryHeader iconsCatalog_primaryHeader">
                  Icons Catalog
                </h1>
                <div className="iconsCatalog_heading">
                  <div className="iconCatalog_searchContainer">
                    <input
                      ref={this.searchRef}
                      className="iconsCatalog_searchInput"
                      autoComplete="off"
                      autoFocus
                      inputMode="text"
                      spellCheck="false"
                      maxLength="50"
                      type="text"
                      placeholder="Filter icons"
                      value={search}
                      onChange={e =>
                        this.props.history.replace({
                          pathname,
                          query: {
                            search: e.currentTarget.value,
                          },
                        })
                      }
                    />
                    <CSSTransition
                      in={displayDeleteIcon}
                      timeout={300}
                      mountOnEnter
                      unmountOnExit
                      classNames="iconsCatalog_clearSearchIcon">
                      <IconClose
                        size="1.75rem"
                        tabIndex="0"
                        role="button"
                        aria-label="Clear search"
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            e.stopPropagation();

                            this.resetSearch();
                          }
                        }}
                        onClick={this.resetSearch}
                        className="iconsCatalog_clearSearchIcon"
                      />
                    </CSSTransition>
                  </div>
                  <p className="iconsCatalog_count">
                    Displaying <b>{visibleCount}</b> of <b>{totalCount}</b>{' '}
                    icons. Click an icon to see how to import it.
                  </p>
                </div>
                <div>
                  {_.map(filteredCategories, (category, categoryName) => {
                    if (!category.length) {
                      return null;
                    }

                    return (
                      <div className="iconsCatalog_category" key={categoryName}>
                        <h2 className="iconsCategory_categoryHeader">
                          {_.startCase(categoryName)}
                        </h2>
                        <ul className="iconsCatalog_iconList">
                          {_.map(category, (icon, index) => {
                            const Comp = MaterialishIcons[icon.iconClass];
                            const importStatement = `import ${
                              icon.iconClass
                            } from 'materialish/${icon.fileName}';`;
                            return (
                              <div
                                className="iconsCatalog_icon"
                                key={`${icon.iconName}-${index}`}
                                onClick={e => {
                                  open({
                                    triggerEl: e.currentTarget,
                                    targetEl: e.currentTarget,
                                    component: (
                                      <Elevation depth={2}>
                                        <div className="iconsCatalog_iconDetails">
                                          <Comp size="1.4rem" />
                                          <span className="iconsCatalog_iconClass">
                                            {icon.iconClass}
                                          </span>
                                          <div className="iconsCatalog_detailsImport">
                                            <CodeHighlighter
                                              className="iconsCatalog_importStatement"
                                              inline
                                              value={importStatement}
                                            />
                                            <Clipboard
                                              className="iconsCatalog_copyImportBtn"
                                              data-clipboard-text={
                                                importStatement
                                              }>
                                              <IconContentCopy size="1.3em" />
                                            </Clipboard>
                                          </div>
                                        </div>
                                      </Elevation>
                                    ),
                                    config: {
                                      allowOverlap: true,
                                      overlay: 'rgba(0, 0, 0, 0)',
                                      id: `${icon.iconName}-${index}`,
                                      closeOnScroll: 30,
                                      position: 'top',
                                      origin: 'top',
                                      removeOnClickOutside: true,
                                      animation: morph(200),
                                    },
                                  });
                                }}>
                                <Comp size="1.4rem" />
                                <span className="iconsCatalog_iconClass">
                                  {icon.iconClass}
                                </span>
                              </div>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }}
        </Over.Consumer>
      </Over.Provider>
    );
  }

  searchRef = createRef();

  resetSearch = () => {
    const { location } = this.props.history;
    const { pathname } = location;

    this.props.history.replace({
      pathname,
      query: {},
    });

    if (this.searchRef.current) {
      this.searchRef.current.focus();
    }
  };
}

export default withRouteData(IconsCatalog);
