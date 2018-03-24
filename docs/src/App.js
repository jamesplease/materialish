import React, { Component } from "react";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Markdown from "./vendor/doc-components/markdown";
import ScrollToTop from "./common/scroll-to-top";
import Header from "./common/header";
import Nav from "./common/nav";
import NotFound from "./common/not-found";
import Components from "./components";
import Button from "./components/button";
import introductionUrl from "./introduction/index.md";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <div className="app_body">
            <Nav />
            <div className="app_bodyContents">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Markdown markdownUrl={introductionUrl} />}
                />
                <Route path="/components" component={Components} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
