import React, { Component, Fragment } from 'react';
import * as MaterialishIcons from 'materialish/icons';
import iconsData from 'materialish/icons-data.json';
import { withRouteData } from 'react-static';
import './catalog.css';

export class IconsCatalog extends Component {
  render() {
    const { query } = this.state;

    const lowercaseQuery = query.toLowerCase();

    const filteredComponents = iconsData.icons.filter(icon => {
      if (!icon.iconName || !icon.iconClass) {
        return false;
      }
      return (
        icon.iconName.toLowerCase().includes(lowercaseQuery) ||
        icon.iconClass.toLowerCase().includes(lowercaseQuery)
      );
    });

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
          Displaying <b>{filteredComponents.length}</b> of{' '}
          <b>{iconsData.count}</b> icons.
        </p>
        <ul className="iconsCatalog_iconList">
          {filteredComponents.map((icon, index) => {
            const Comp = MaterialishIcons[icon.iconClass];
            return (
              <div
                className="iconsCatalog_icon"
                key={`${icon.iconName}-${index}`}>
                <Comp size="1.4rem" />
                <span className="iconsCatalog_iconClass">{icon.iconClass}</span>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  state = {
    query: '',
  };
}

export default withRouteData(IconsCatalog);
