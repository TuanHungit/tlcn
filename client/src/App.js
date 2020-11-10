import { connect } from "react-redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { randomBytes } from "crypto";
import React, { useEffect } from "react";
import "./App.css";
import TourDetail from "./components/tourDetail";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import LoginModal from "./containers/auth/signin/signin";

import LandingPage from "./containers/landingPage/LandingPage";
import * as actionCreator from "./store/actions";
import Logout from "./containers/auth/signout/signout";
function App(props) {
  useEffect(() => {
    props.onAuthCheck();
  });

  let routes = (
    <Switch>
      <Route path="/" exact component={LandingPage} />{" "}
      <Route path="/tour" component={TourDetail} />{" "}
      <Route path="/logout" component={Logout} /> <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthencated) {
    routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />{" "}
        <Route path="/tour" component={TourDetail} />{" "}
        <Route path="/logout" component={Logout} /> <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Header isAuthencated={props.isAuthencated} user={props.user} /> {routes}{" "}
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthCheck: () => dispatch(actionCreator.authCheck()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
