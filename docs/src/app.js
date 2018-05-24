import React, { Component, Fragment } from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes';
import './app.css';
import Header from './common/header';
import Nav from './common/nav';

class App extends Component {
  render() {
    const {isMenuOpen} = this.state;
    return (
      <Router>
        <Fragment>
          <Header onToggleMenu={this.onToggleMenu}/>
          <div className="app_body">
            <Nav isMenuOpen={isMenuOpen} onToggleMenu={this.onToggleMenu}/>
            <div className="app_bodyContents">
              <Routes />
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }

  state = {
    isMenuOpen: false
  }

  onToggleMenu = () => {
    const {isMenuOpen} = this.state;
    this.setState({isMenuOpen: !isMenuOpen});
  }
}

export default App;
