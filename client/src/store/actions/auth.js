import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-order';

import alertify from 'alertifyjs';
const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
const authSuccess = (token, user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    user: user,
  };
};

const loadUser = () => {
  return (dispatch) => {
    axios.get('/users/me').then((data) => {});
  };
};

const authFailed = (error) => {
  alertify.success('Invalid credentials!');
  return {
    type: actionTypes.AUTH_FAILED,
    error: error,
  };
};

const authSignupSuccess = () => {
  alertify.success('Register susscess!');
  return {
    type: actionTypes.AUTH_SIGNUP_SUCCESS,
  };
};

export const Logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('expirationDate');

  return { type: actionTypes.AUTH_LOGOUT };
};
export const authLogout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(Logout());
    }, expirationTime);
  };
};
export const authSignup = (name, email, password) => {
  return (dispatch) => {
    const authUser = {
      name,
      email,
      password,
    };
    axios
      .post('/users/signup', authUser)
      .then((response) => {
        dispatch(authSignupSuccess());
      })
      .catch((error) => {
        const errors = error.response.data.errors;
        if (errors) {
          dispatch(authFailed(errors[0].message));
        }
      });
  };
};

export const authSignin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    };
    let url = '/users/signin';
    axios
      .post(`${url}`, authData)
      .then((response) => {
        const token = response.data.token;
        const user = response.data.data.user.name;
        const expirationDate = response.data.expirationDate;
        localStorage.setItem('user', user);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
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

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheck = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(Logout());
    } else {
      const expirationDate = localStorage.getItem('expirationDate');
      console.log(expirationDate, new Date().getTime());
      if (expirationDate > new Date().getTime()) {
        const user = localStorage.getItem('user');
        dispatch(authSuccess(token, user));
        dispatch(authLogout(expirationDate - new Date().getTime()));
      } else {
        alertify.success('You have logged out!');
        dispatch(Logout());
      }
    }
  };
};
