import React, { Component } from 'react';
import * as MaterialishIcons from 'materialish/icons';
import iconsData from 'materialish/icons-data.json';
import _ from 'lodash';
import { withRouteData } from 'react-static';
import './catalog.css';

export class IconsCatalog extends Component {
  render() {
    const { query } = this.state;
    const lowercaseQuery = query.toLowerCase();

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

    const visibleCount = _.flatMap(filteredCategories).length;
    const totalCount = _.flatMap(iconsData.categories).length;

    return (
      <div className="iconsCatalog">
        <h1 className="primaryHeader iconsCatalog_primaryHeader">
          Icons Catalog
        </h1>
        <input
          className="iconsCatalog_searchInput"
          autoComplete="off"
          autoFocus
          inputMode="text"
          spellCheck="false"
          type="text"
          placeholder="Filter icons"
          value={query}
          onChange={e => this.setState({ query: e.currentTarget.value })}
        />
        <p className="iconsCatalog_count">
          Displaying <b>{visibleCount}</b> of <b>{totalCount}</b> icons.
        </p>
        <div>
          {_.map(filteredCategories, (category, categoryName) => {
            if (!category.length) {
              return null;
            }

            return (
              <div className="iconsCatalog_category">
                <h2 className="iconsCategory_categoryHeader">
                  {_.startCase(categoryName)}
                </h2>
                <ul className="iconsCatalog_iconList">
                  {_.map(category, (icon, index) => {
                    const Comp = MaterialishIcons[icon.iconClass];
                    return (
                      <div
                        className="iconsCatalog_icon"
                        key={`${icon.iconName}-${index}`}>
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
  }

  state = {
    query: '',
  };
}

export default withRouteData(IconsCatalog);
