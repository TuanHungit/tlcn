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
import ResultSearch from './components/search/ResultSearch';
import Booking from './containers/booking/booking';
import BookingSuccess from './components/booking/bookingSuccess/bookingSuccess';
import ScrollToTop from './components/UI/scrollTop/scrollTop';
import Form from './components/form/form';
function App(props) {
  useEffect(() => {
    props.onAuthCheck();
  }, []);

  let routes = (
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/tour/:slug' exact component={TourDetail} />
      <Route path={'/tour/:slug/booking'} exact component={Booking} />
      {/* <Route path='/register' component={Register} /> */}
      <Route
        path='/tour/:slug/booking/success'
        exact
        component={BookingSuccess}
      />
      <Route path='/search' component={ResultSearch} />
      <Route path='/survey' component={Form} />
      <Redirect to='/' />
    </Switch>
  );
  if (props.isAuthencated) {
    routes = (
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path={'/tour/:slug/booking'} exact component={Booking} />
        <Route path='/logout' component={Logout} />
        <Route exact path='/tour/:slug' component={TourDetail} />
        <Route path='/profile' component={Profile} />
        <Route
          path='/tour/:slug/booking/success'
          exact
          component={BookingSuccess}
        />
        <Redirect to='/' />
      </Switch>
    );
  }
  let user = null;
  if (props.user) {
    user = props.user.name;
  }
  return (
    <div>
      <Header isAuthencated={props.isAuthencated} user={user} />
      {routes}
      <Form/>
      <Register />
      <LoginModal />
      <ScrollToTop />
      <Footer />
      {/* <Booking /> */}
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
