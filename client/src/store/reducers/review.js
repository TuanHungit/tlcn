import * as actionTypes from '../actions/actionTypes';
const inititalState = {
  reviewList: null,
  error: false,
  pageCount: 0,
  reviewTourList: [],
  reviewTourListError: false,
  loading: false,
};

const fetchReviewFailed = (state, action) => {
  return {
    ...state,
    error: true,
    loading: false,
  };
};
const setReviewList = (state, action) => {
  return {
    ...state,
    reviewList: action.reviewList,
    loading: false,
  };
};
const setReviewTourListStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};
const fetchReviewTourListFailed = (state) => {
  return {
    ...state,
    reviewTourListError: true,
    loading: false,
  };
};
const setReviewTourList = (state, action) => {
  // const reviews = state.reviewTourList;
  // const reviewTourListUpdated = reviews.concat(action.reviewTourList);
  return {
    ...state,
    reviewTourList: action.reviewTourList,
    pageCount: Math.ceil(action.reviewTourList.length / action.limit),
    loading: false,
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
    case actionTypes.SET_REVIEW_TOUR_LIST_START:
      return setReviewTourListStart(state);
    default:
      return state;
  }
};

export { reducer as reviewReducer };
