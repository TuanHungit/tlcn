import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-order';
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
    return {
        type: actionTypes.AUTH_FAILED,
        error: error,
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
        dispatch(authStart());
        const authUser = {
            name,
            email,
            password,
        };
        let url = '/users/signup';
        axios.post(`${url}`, authUser)
            .then((response) => {
                JSON.stringify(authUser);
                console.log(response.data);
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
                dispatch(Logout());
            }
        }
    };
};