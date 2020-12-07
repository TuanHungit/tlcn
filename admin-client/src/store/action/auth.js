import * as actionTypes from "./actionTypes";
import axios from "../../common/axiosClient";
import alertify from "alertifyjs";
const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
const authSuccess = (token, user) => {
  alertify.success("Đăng nhập thành công!");
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    user,
  };
};

const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error,
  };
};

export const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");

  return { type: actionTypes.AUTH_LOGOUT };
};
export const authLogout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(Logout());
    }, expirationTime);
  };
};

export const authSignin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };
    let url = "/users/signin";
    axios
      .post(`${url}`, authData)
      .then((response) => {
        const token = response.data.token;
        const user = response.data.data.user;

        const expirationDate = response.data.expirationDate;

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(token, user));

        dispatch(authLogout(expirationDate - new Date().getTime()));
      })
      .catch((error) => {
        const errors = error.response.data.errors;

        if (errors) {
          dispatch(authFailed(errors[0].message));
        }
      });
  };
};

export const authCheck = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(Logout());
    } else {
      const expirationDate = localStorage.getItem("expirationDate");

      if (expirationDate > new Date().getTime()) {
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch(authSuccess(token, user));
        dispatch(authLogout(expirationDate - new Date().getTime()));
      } else {
        dispatch(Logout());
      }
    }
  };
};
