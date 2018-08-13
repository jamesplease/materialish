import React, { Component, Fragment } from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes';
import noScroll from 'no-scroll';
import { createBrowserHistory } from 'history';
import './app.css';
import queryString from 'query-string';
import Header from './common/header';
import Nav from './common/nav';
import Footer from './common/footer';
import historyWithQuery from './common/utils/history-with-query';

let history;
if (typeof document !== 'undefined') {
  history = historyWithQuery(
    createBrowserHistory(),
    queryString.stringify,
    queryString.parse
  );
}

class App extends Component {
  render() {
    const { isMenuOpen } = this.state;

    return (
      <Router history={history}>
        <Fragment>
          <Header onToggleMenu={this.onToggleMenu} />
          <div className="app_body">
            <Nav isMenuOpen={isMenuOpen} onToggleMenu={this.onToggleMenu} />
            <div className="app_bodyContents">
              <Routes />
              <Footer />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }

  state = {
    isMenuOpen: false,
  };

  onToggleMenu = () => {
    const { isMenuOpen } = this.state;

    noScroll.toggle();

    this.setState({ isMenuOpen: !isMenuOpen });
  };
}

export default App;
