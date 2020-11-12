import * as actionTypes from '../actions/actionTypes';

const initialState = {
  listDestination: null,
  loadding: false,
  error: false,
};

const fetchDestinationStart = (state) => {
  return { ...state, loadding: true };
};

const fetchDestinationFailed = (state) => {
  return { ...state, loadding: false, error: true };
};

const setDestinationList = (state, action) => {
  return {
    ...state,
    loadding: false,
    error: false,
    listDestination: action.listDestination,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BLOG_START:
      return fetchDestinationStart();
    case actionTypes.FETCH_BLOG_FAILED:
      return fetchDestinationFailed();
    case actionTypes.SET_DESTINATION_LIST:
      return setDestinationList();
    default:
      return state;
  }
};

export { reducer as destinationReducer };
