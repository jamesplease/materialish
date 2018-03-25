import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landing-page";
import componentsData from "./components";
import NotFound from "../common/not-found";

export default class Components extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`} component={LandingPage} />
          {componentsData.map(component => {
            return (
              <Route
                key={`${component.name}-main`}
                exact
                path={`${match.url}${component.url}`}
                render={props => <component.component {...props} {...component} />}
              />
            );
          })}
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
