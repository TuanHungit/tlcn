import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import TourDetail from './components/tourDetail';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import LoginModal from './containers/auth/signin/signin';
import LandingPage from './containers/LandingPage/LandingPage';
import * as actionCreator from './store/actions';

function App(props) {
  useEffect(() => {
    props.onAuthCheck();
  });
  let routes = (
    <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/tour' component={TourDetail} />
      <Redirect to='/' />
    </Switch>
  );
  // if (this.props.isAuthencated) {
  //   routes = (
  //     <Switch>
  //       <Route path='/' exact component={BurgerBuilder} />
  //       <Route path='/checkout' component={Checkout} />
  //       <Route path='/orders' component={Orders} />
  //       <Route path='/logout' component={Logout} />
  //       <Route path='/auth' component={Auth} />
  //       <Redirect to='/' />
  //     </Switch>
  //   );
  // }
  return (
    <div>
      <Header isAuthencated={props.isAuthencated} user={props.user} />
      {routes}
      {/* <TourDetail /> */}
      <Footer />
      <LoginModal isAuthencated={props.isAuthencated} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthencated: state.auth.token !== null,
    user: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheck: () => dispatch(actionCreator.authCheck()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
