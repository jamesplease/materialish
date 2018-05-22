import React, { Component } from 'react';
import { withRouteData, Link } from 'react-static';

class Components extends Component {
  render() {
    const {components} = this.props;

    return (
      <div>
        <h1 className="primaryHeader">Components</h1>
        <ul>
          {components.map(component => (
            <li key={component.componentKey}>
              <Link to={`/components/${component.url}`}>
                {component.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouteData(Components);
