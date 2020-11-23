import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-order';
const fetchReviewStart = () => {
  return {
    type: actionTypes.FETCH_REVIEW_START,
  };
};

const setReviewList = (reviewList) => {
  return {
    type: actionTypes.SET_REVIEW_LIST,
    reviewList: reviewList,
  };
};
const fetchReviewFailed = () => {
  return {
    type: actionTypes.FETCH_REVIEW_FAILED,
  };
};

export const fetchReview = (page = 0, limit = 15, options) => {
  return (dispatch) => {
    let url = `/reviews?sort=-rating`;
    if (options) {
      url = `/reviews?sort=-rating&fields=${options.join(
        ','
      )}&page=${page}&limit=${limit}`;
    }
    axios
      .get(url)
      .then((response) => {
        dispatch(setReviewList(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchReviewFailed());
      });
  };
};

//review tour
const fetchReviewTourFailded = () => {
  return {
    type: actionTypes.FETCH_REVIEW_TOUR_LIST_FAILED,
  };
};

const setReviewTourList = (reviewTourList) => {
  return {
    type: actionTypes.SET_REVIEW_TOUR_LIST,
    reviewTourList,
  };
};

export const fetchRevireTourList = (tourId, page = 0, limit = 6, options) => {
  return (dispatch) => {
    let url = `/tours/${tourId}/reviews`;
    if (options) {
      url = `/tours/${tourId}/reviews?fields=${options.join(
        ','
      )}&page=${page}&limit=${limit}&sort=createdAt`;
    }
    axios
      .get(url)
      .then((response) => {
        dispatch(setReviewTourList(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchReviewTourFailded());
      });
  };
};
