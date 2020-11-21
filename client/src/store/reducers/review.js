import * as actionTypes from '../actions/actionTypes';
const inititalState = {
  reviewList: null,
  error: false,
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
const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REVIEW_FAILED:
      return fetchReviewFailed();
    case actionTypes.SET_REVIEW_LIST:
      return setReviewList(state, action);
    default:
      return state;
  }
};

export { reducer as reviewReducer };
