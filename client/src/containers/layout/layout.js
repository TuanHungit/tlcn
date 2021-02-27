import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../routes';
import * as actionCreator from '../../store/actions';

import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';
import ScrollToTop from '../../components/UI/scrollTop/scrollTop';
import LoginModal from '../../containers/auth/signin/signin';
import SignUpModal from '../../containers/auth/signup/signup';
const TheContent = ({
  onAuthCheck,
  isAuthencated,
  onFetchProfile,
  user,
  profile,
  isLoadingTour,
  ...props
}) => {
  useEffect(() => {
    onAuthCheck();
  }, []);
  useEffect(() => {
    if (!isAuthencated) {
      return;
    }
    onFetchProfile();
  }, [isAuthencated]);

  let photo = null;

  if (user) {
    photo = user.photo;
    if (profile) {
      photo = 'http://' + profile.photo;
    }
  }

  return (
    <>
      <Header
        isAuthencated={isAuthencated}
        user={user ? user.name : null}
        photo={photo}
      />
      <Switch>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            )
          );
        })}
        <Redirect to='/' />
      </Switch>
      <SignUpModal />
      <LoginModal />
      <ScrollToTop />
      {!isLoadingTour ? <Footer /> : null}
    </>
  );
};
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
export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(TheContent)
);
