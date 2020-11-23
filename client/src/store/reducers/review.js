import * as actionTypes from '../actions/actionTypes';
const inititalState = {
  reviewList: null,
  error: false,
  reviewTourList: [],
  reviewTourListError: false,
};

const fetchReviewFailed = (state, action) => {
  return {
    ...state,
    error: true,
  };
};
const setReviewList = (state, action) => {
  return {
    ...state,
    reviewList: action.reviewList,
  };
};

const fetchReviewTourListFailed = (state) => {
  return {
    ...state,
    reviewTourListError: true,
  };
};
const setReviewTourList = (state, action) => {
  // const reviews = state.reviewTourList;
  // const reviewTourListUpdated = reviews.concat(action.reviewTourList);
  return {
    ...state,
    reviewTourList: action.reviewTourList,
  };
};
const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REVIEW_FAILED:
      return fetchReviewFailed();
    case actionTypes.SET_REVIEW_LIST:
      return setReviewList(state, action);
    case actionTypes.FETCH_REVIEW_TOUR_LIST_FAILED:
      return fetchReviewTourListFailed(state);
    case actionTypes.SET_REVIEW_TOUR_LIST:
      return setReviewTourList(state, action);
    default:
      return state;
  }
};

export { reducer as reviewReducer };
