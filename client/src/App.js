import { connect } from 'react-redux';
import {
  Route,
  Switch,
  withRouter,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';

import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';
import * as actionCreator from './store/actions';
import Container from './containers';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import ScrollToTop from './components/UI/scrollTop/scrollTop';
function App(props) {
  useEffect(() => {
    props.onAuthCheck();
  }, []);
  useEffect(() => {
    if (!props.isAuthencated) {
      return;
    }
    props.onFetchProfile();
  }, [props.isAuthencated]);
  let routes = (
    <Switch>
      <Route path='/' exact component={Container.LandingPage} />
      <Route path='/tour/:slug' exact component={Container.TourDetail} />
      <Route path={'/tour/:slug/booking'} exact component={Container.Booking} />
      <Route path='/logout' exact component={Container.Logout} />
      Container.
      <Route path='/register' exact component={Container.SignUp} />
      <Route path='/blogs/:slug' component={Container.SingleBlog} />
      <Route path='/blogs-editor' exact component={Container.BlogEditor} />
      <Route path='/blogs' exact component={Container.BlogGrid} />
      <Route path='/promotions' exact component={Container.Promotion} />
      <Route
        path='/promotions/:slug'
        exact
        component={Container.PromotionDetail}
      />
      <Route
        path='/destination/:slug'
        exact
        component={Container.TourResultGrid}
      />
      {/* <Route
        path='/tour/:slug/booking/success'
        exact
        component={BookingSuccess}
      /> */}
      {/* <Route path='/search' component={Container.ResultSearch} />
      <Route path='/survey' component={Container.Form} /> */}
      <Redirect to='/' />
    </Switch>
  );
  if (props.isAuthencated) {
    routes = (
      <Switch>
        <Route path='/' exact component={Container.LandingPage} />
        <Route
          path={'/tour/:slug/booking'}
          exact
          component={Container.Booking}
        />
        <Route path='/logout' exact component={Container.Logout} />
        <Route exact path='/tour/:slug' component={Container.TourDetail} />

        {/* <Route
          path='/profile'
          render={(props) => (
            <Profile {...props} photo={photo} profile={profile} />
          )}
        /> */}
        <Route path='/blogs/:slug' exact component={Container.SingleBlog} />
        <Route path='/blogs-editor' exact component={Container.BlogEditor} />
        <Route path='/blogs' exact component={Container.BlogGrid} />
        <Route path='/promotions' exact component={Container.Promotion} />
        <Route
          path='/promotions/:slug'
          exact
          component={Container.PromotionDetail}
        />
        <Route
          path='/destination/:slug'
          exact
          component={Container.TourResultGrid}
        />
        {/* <Route
          path='/tour/:slug/booking/success'
          exact
          component={BookingSuccess}
        /> */}
        <Redirect to='/' />
      </Switch>
    );
  }
  let user = null;
  let photo = null;
  let profile = null;
  if (props.user) {
    user = props.user.name;
    photo = props.user.photo;
    if (props.profile) {
      profile = props.profile;
      photo = 'http://' + props.profile.photo;
    }
  }

  return (
    <Suspense fallback={<div></div>}>
      <Header isAuthencated={props.isAuthencated} user={user} photo={photo} />
      {routes}
      {/* <Form /> */}
      {/* <Register /> */}
      {/* <LoginModal /> */}
      <ScrollToTop />
      {!props.isLoadingTour ? <Footer /> : null}
    </Suspense>
  );
}
// export default App;

const mapStateToProps = (state) => {
  return {
    isAuthencated: state.auth.token !== null,
    user: state.auth.user,
    error: state.auth.error,
    isLoadingTour: state.tour.loading,
    isLogout: state.auth.isLogout,
    profile: state.profile.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheck: () => dispatch(actionCreator.authCheck()),
    onFetchProfile: () => dispatch(actionCreator.fetchProfile()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
