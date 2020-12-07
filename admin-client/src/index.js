import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datepicker/dist/react-datepicker.css";
import "../node_modules/alertifyjs/build/css/alertify.css";
import "../node_modules/alertifyjs/build/css/themes/semantic.css";
import "./polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { icons } from "./assets/icons";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index.js";

React.icons = icons;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
