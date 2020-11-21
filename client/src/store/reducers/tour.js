import * as actionTypes from '../actions/actionTypes';

const initState = {
  tourList: null,
  TourDetail: null,
  tourDetailError: false,
  error: false,
  loading: false,
};

//tour
const fetchTourFailed = (state) => {
  return {
    ...state,
    error: true,
  };
};
const fetchTourStart = (state) => {
  return {
    ...state,
    error: false,
    loading: true,
  };
};
const setTourList = (state, action) => {
  return {
    ...state,
    error: false,
    loading: false,
    tourList: {
      ...action.tourList,
    },
  };
};

//tour detail
const fetchTourDetailFailed = (state) => {
  return {
    ...state,
    tourDetailError: true,
  };
};
const fetchTourDetailStart = (state) => {
  return {
    ...state,
    tourDetailError: false,
    loading: true,
  };
};
const setTourDetail = (state, action) => {
  return {
    ...state,
    tourDetailError: false,
    loading: false,
    tourDetail: {
      ...action.tourDetail,
    },
  };
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TOUR_FAILED:
      return fetchTourFailed(state);
    case actionTypes.FETCH_TOUR_START:
      return fetchTourStart(state);
    case actionTypes.SET_TOUR_LIST:
      return setTourList(state, action);
    case actionTypes.FETCH_TOUR_DETAIL_FAILED:
      return fetchTourDetailFailed(state);
    case actionTypes.SET_TOUR_DETAIL:
      return setTourDetail(state, action);
    default:
      return state;
  }
};

export { reducer as tourReducer };
