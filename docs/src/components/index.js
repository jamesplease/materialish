import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';
import './index.css';

class Components extends Component {
  render() {
    const { components } = this.props;

    const sortedComponentsData = Array.from(components).sort((a, b) => {
      if (a.componentKey === b.componentKey) {
        return 0;
      }

      return a.componentKey < b.componentKey ? -1 : 1;
    });

    return (
      <div>
        <h1 className="primaryHeader">Components</h1>
        <p className="paragraph">
          Materialish is a collection of React components. Select the component
          you would like to read more about.
        </p>
        <ul className="components_list">
          {sortedComponentsData.map(component => (
            <li key={component.componentKey} className="components_listItem">
              <Link to={`/components/${component.url}`}>{component.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouteData(Components);
