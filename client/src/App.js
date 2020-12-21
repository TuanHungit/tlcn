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
import LandingPage from './containers/landingPage/LandingPage';
import Logout from './containers/auth/signout/signout';
import Profile from './containers/profile/profile';
import ResultSearch from './components/search/ResultSearch';
import Booking from './containers/booking/booking';
import BookingSuccess from './components/booking/bookingSuccess/bookingSuccess';
import SingleBlog from './containers/singleBlog/singleBlog';
import ScrollToTop from './components/UI/scrollTop/scrollTop';
import BlogEditor from './containers/blogEditor/blogEditer';
import BlogGrid from './containers/blogGrid/blogGrid';
import Promotion from './containers/promotion/promotion';
import PromotionDetail from './containers/promotionDetail/promotionDetail';
import Form from './components/form/form';
import TourResultGrid from './containers/tourResultGrid/tourResultGrid';
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
      <Route path='/' exact component={LandingPage} />
      <Route path='/tour/:slug' exact component={TourDetail} />
      <Route path={'/tour/:slug/booking'} exact component={Booking} />
      <Route path='/logout' exact component={Logout} />
      <Route path='/register' exact component={Register} />
      <Route path='/blogs/:slug' component={SingleBlog} />
      <Route path='/blogs-editor' exact component={BlogEditor} />
      <Route path='/blogs' exact component={BlogGrid} />
      <Route path='/promotions' exact component={Promotion} />
      <Route path='/promotions/:slug' exact component={PromotionDetail} />
      <Route path='/destination/:slug' exact component={TourResultGrid} />
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
        <Route path='/logout' exact component={Logout} />
        <Route exact path='/tour/:slug' component={TourDetail} />

        <Route
          path='/profile'
          render={(props) => (
            <Profile {...props} photo={photo} profile={profile} />
          )}
        />
        <Route path='/blogs/:slug' exact component={SingleBlog} />
        <Route path='/blogs-editor' exact component={BlogEditor} />
        <Route path='/blogs' exact component={BlogGrid} />
        <Route path='/promotions' exact component={Promotion} />
        <Route path='/promotions/:slug' exact component={PromotionDetail} />
        <Route path='/destination/:slug' exact component={TourResultGrid} />
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
    <div>
      <Header isAuthencated={props.isAuthencated} user={user} photo={photo} />
      {routes}
      <Form />
      <Register />
      <LoginModal />
      <ScrollToTop />
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
