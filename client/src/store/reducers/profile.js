import * as actionTypes from '../actions/actionTypes';

const initialState = {
  profile: null,
  error: null,
};

const setProfile = (state, action) => {
  return {
    ...state,
    error: null,
    loadding: false,
    profile: { ...action.profile },
  };
};
const fetchProfileFailed = (state, action) => {
  return { ...state, error: true };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROFILE:
      return setProfile(state, action);
    case actionTypes.FETCH_PROFILE_FAILED:
      return fetchProfileFailed(state, action);
    default:
      return state;
  }
};

export { reducer as profileReducer };
