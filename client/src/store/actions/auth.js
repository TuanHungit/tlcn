import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: authData.idToken,
    userId: authData.localId,
  };
};

const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error,
  };
};

export const Logout = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return { type: actionTypes.AUTH_LOGOUT };
};
export const authLogout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(Logout());
    }, expirationTime * 1000);
  };
};
export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = '/users/signup';
    if (!isSignUp) {
      url = '/users/signin';
    }
    axios
      .post(`${url}`, authData)
      .then((response) => {
        console.log(response);
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data));
        dispatch(authLogout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authFailed(error.response.data.error));
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
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate > new Date()) {
        const userId = localStorage.getItem('userId');
        dispatch(authSuccess({ token, userId }));
        dispatch(
          authLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      } else {
        dispatch(Logout());
      }
    }
  };
};
