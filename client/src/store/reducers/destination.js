import * as actionTypes from '../actions/actionTypes';

const initialState = {
  destinationList: null,
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
    destinationList: action.destinationList,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DESTINATION_START:
      return fetchDestinationStart(state, action);
    case actionTypes.FETCH_DESTINATION_FAILED:
      return fetchDestinationFailed(state, action);
    case actionTypes.SET_DESTINATION_LIST:
      return setDestinationList(state, action);
    default:
      return state;
  }
};

export { reducer as destinationReducer };
