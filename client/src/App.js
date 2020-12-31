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
import Loading from './components/UI/Spinner/loading';
const TourDetail = lazy(() => import('./containers/tourDetail/tourDetail'));
const Header = lazy(() => import('./components/layout/header'));
const Footer = lazy(() => import('./components/layout/footer'));
const LoginModal = lazy(() => import('./containers/auth/signin/signin'));
const Register = lazy(() => import('./containers/auth/signup/signup'));
const LandingPage = lazy(() => import('./containers/landingPage/LandingPage'));
const Logout = lazy(() => import('./containers/auth/signout/signout'));
const Profile = lazy(() => import('./containers/profile/profile'));
const ResultSearch = lazy(() => import('./components/search/ResultSearch'));
const Booking = lazy(() => import('./containers/booking/booking'));
const BookingSuccess = lazy(() =>
  import('./components/booking/bookingSuccess/bookingSuccess')
);
const SingleBlog = lazy(() => import('./containers/singleBlog/singleBlog'));
const ScrollToTop = lazy(() => import('./components/UI/scrollTop/scrollTop'));
const BlogEditor = lazy(() => import('./containers/blogEditor/blogEditer'));
const BlogGrid = lazy(() => import('./containers/blogGrid/blogGrid'));
const Promotion = lazy(() => import('./containers/promotion/promotion'));
const PromotionDetail = lazy(() =>
  import('./containers/promotionDetail/promotionDetail')
);
const Form = lazy(() => import('./components/form/form'));
const TourResultGrid = lazy(() =>
  import('./containers/tourResultGrid/tourResultGrid')
);
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
    <>
      <Suspense fallback={<Loading />}>
        <Header isAuthencated={props.isAuthencated} user={user} photo={photo} />
        {routes}
        <Form />
        <Register />
        <LoginModal />
        <ScrollToTop />
        <Footer />
      </Suspense>
    </>
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
