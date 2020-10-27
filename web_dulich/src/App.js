import React, { Component, Fragment } from 'react';
import './App.css';
import './boostrap.css';

import HeaderComponent from './Component/layouts/HeaderComponent.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './Component/layouts/FooterComponent';
import BlogComponent from './Component/auth/BlogComponent';
import Register from './Component/auth/Register';
import Login from './Component/auth/Login';
import Banner from './Component/layouts/Banner';
import TourDetail from './Component/tourDetail';
class App extends Component {
  render() {
    return (
      <div className='with-waypoint-sticky header-bg-white'>
        <HeaderComponent/>
        <TourDetail />
      </div>
    );
  }
}
export default App;
{
  /* <Router>
          <Fragment>
            <HeaderComponent />
            <Switch>
              <Route path='/a' component={Banner} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/blog' component={BlogComponent} />
            </Switch>
            <FooterComponent />
          </Fragment>
        </Router> */
}
