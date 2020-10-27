import React, { Component,Fragment } from 'react';
import './App.css';
import './boostrap.css';

import HeaderComponent from './Component/layouts/HeaderComponent.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from './Component/layouts/FooterComponent';
import BlogComponent from './Component/auth/BlogComponent';
import Register from './Component/auth/Register';
import Login from './Component/auth/Login';
import Banner from './Component/layouts/Banner';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <HeaderComponent />
            <Switch>
              <Route path="/a" component={Banner} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/blog" component={BlogComponent} />
            </Switch>
            <FooterComponent />
          </Fragment>
        </Router>
      </div>
    );
  }
}
export default App;
