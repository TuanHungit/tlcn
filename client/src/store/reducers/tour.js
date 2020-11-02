import * as actionTypes from '../actions/actionTypes';

const initState = {
  tourList: null,
  error: false,
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOUR_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.FETCH_TOUR_START:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case actionTypes.SET_TOUR_LIST:
      return {
        ...state,
        error: false,
        loading: false,
        tourList: {
          ...action.tourList,
        },
      };
    default:
      return state;
  }
};

export { reducer as tourReducer };
