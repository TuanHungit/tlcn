import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import React, { useEffect } from 'react';

import './App.css';
import * as actionCreator from './store/actions';
import TourDetail from './containers/tourDetail/tourDetail';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import LoginModal from './containers/auth/signin/signin';
import Register from './containers/auth/signup/signup';
import LandingPage from './containers/landingPage/landingPage';
import Logout from './containers/auth/signout/signout';
import Profile from './containers/dashboard/dashboard';

function App(props) {
  useEffect(() => {
    props.onAuthCheck();
  });

  let routes = (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route path='/tour/:id' component={TourDetail} />
      <Route path='/profile' component={Profile} />

      {/* <Route path='/register' component={Register} /> */}
      <Route path='/logout' component={Logout} />
      <Redirect to='/' />
    </Switch>
  );
  if (props.isAuthencated) {
    routes = (
      <Switch>
        <Route exact path='/' component={LandingPage} />

        <Route path='/logout' component={Logout} />
        <Route path='/tour/:slug' component={TourDetail} />
        <Redirect to='/' />
      </Switch>
    );
  }
  return (
    <div>
      <Header isAuthencated={props.isAuthencated} user={props.user} />
      {routes}
      <Register />
      <LoginModal />
      <Footer />
    </div>
  );
}
// export default App;

const mapStateToProps = (state) => {
  return {
    isAuthencated: state.auth.token !== null,
    user: state.auth.user,
    error: state.auth.error,
    isLogout: state.auth.isLogout,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheck: () => dispatch(actionCreator.authCheck()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
