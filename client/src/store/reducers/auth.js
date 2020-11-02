import * as actionTypes from '../actions/actionTypes';
const initialState = {
  token: null,
  userId: null,
  error: false,
  loadding: false,
  authRedirectPath: '/',
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
    userId: action.userId,
  };
};
const authFailed = (state, action) => {
  return { ...state, error: action.error, loadding: false };
};
const authLogout = (state, action) => {
  return { ...state, userId: null, token: null };
};
const setAuthRedirectPath = (state, action) => {
  return { ...state, authRedirectPath: action.path };
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
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
