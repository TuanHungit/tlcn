import * as actionTypes from "../action/actionTypes";
const initialState = {
  token: null,
  user: null,
  error: null,
  loadding: false,
  active: false,
  isAuthenticated: null,
};
const authStart = (state, action) => {
  return { ...state, loadding: true };
};
const authSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    loadding: false,
    token: action.token,
    user: { ...action.user },
    isLogout: false,
  };
};

const authFailed = (state, action) => {
  return { ...state, error: action.error, loadding: false, isLogout: false };
};
const authLogout = (state, action) => {
  return { ...state, user: null, token: null, error: null, isLogout: true };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAILED:
      return authFailed(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export { reducer as authReducer };
