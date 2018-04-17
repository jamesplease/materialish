import React, { Fragment } from 'react';
import { Router } from 'react-static';
import Routes from 'react-static-routes';
import './app.css';
import Header from './common/header';
import Nav from './common/nav';

const App = () => (
  <Router>
    <Fragment>
      <Header/>
      <div className="app_body">
        <Nav/>
        <div className="app_bodyContents">
          <Routes />
        </div>
      </div>
    </Fragment>
  </Router>
)

export default App;
