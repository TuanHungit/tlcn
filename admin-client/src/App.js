import React, { useEffect } from "react";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreator from "./store/action";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

function App(props) {
  useEffect(() => {
    props.onAuthCheck();
  }, []);

  let routes = (
    <Switch>
      <Route
        exact
        path="/404"
        name="Page 404"
        render={(props) => <Page404 {...props} />}
      />
      <Route
        exact
        path="/500"
        name="Page 500"
        render={(props) => <Page500 {...props} />}
      />
      <Route
        exacts
        path="/login"
        name="Login Page"
        render={(props) => <Login {...props} />}
      />
      {/* <Redirect to="/" /> */}
    </Switch>
  );
  if (props.isAuthencated) {
    routes = (
      <Switch>
        <Route
          exact
          path="/404"
          name="Page 404"
          render={(props) => <Page404 {...props} />}
        />
        <Route
          exact
          path="/500"
          name="Page 500"
          render={(props) => <Page500 {...props} />}
        />
        <Route
          path="/"
          name="Home"
          render={(props) => <TheLayout {...props} />}
        />
      </Switch>
    );
  }
  return (
    <div>
      <React.Suspense fallback={loading}>{routes}</React.Suspense>
    </div>
  );
}

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
