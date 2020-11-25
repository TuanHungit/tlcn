import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: null,
  user: null,
  loading: true,
  profiles: [],
  repos: [],
  error: {},
  isAuthenticated: true,
};

const profileStart = (state, action) => {
  return { ...state, loadding: true };
};
const profileSuccess = (state, action) => {
  return {
    ...state,   
    error: null,
    loadding: false,
    // user: action.user,
  };
};
const profileFailed = (state, action) => {
  return { ...state, error: action.error, loadding: false };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROFILE_START:
      return profileStart(state, action);
    case actionTypes.PROFILE_SUCCESS:
      return profileSuccess(state, action);
    case actionTypes.PROFILE_FAILED:
      return profileFailed(state, action);
    default:
      return state;
  }
};

export { reducer as profileReducer };
