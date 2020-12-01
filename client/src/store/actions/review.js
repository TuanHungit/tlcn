import * as actionTypes from './actionTypes';
import axios from '../../common/axios-order';
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

const setReviewTourList = (reviewTourList, limit) => {
  return {
    type: actionTypes.SET_REVIEW_TOUR_LIST,
    reviewTourList,
    limit,
  };
};

const setReviewTourListStart = () => {
  return {
    type: actionTypes.SET_REVIEW_TOUR_LIST_START,
  };
};

export const fetchRevireTourList = (tourId, page = 1, limit = 3, options) => {
  return (dispatch) => {
    dispatch(setReviewTourListStart());
    let url = `/tours/${tourId}/reviews`;
    if (options) {
      url = `/tours/${tourId}/reviews?fields=${options.join(
        ','
      )}&limit=${limit}&page=${page}&sort=createdAt`;
    }
    axios
      .get(url)
      .then((response) => {
        dispatch(setReviewTourList(response.data, limit));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchReviewTourFailded());
      });
  };
};

//review tour
const reviewTourStart = () => {
  return {
    type: actionTypes.REVIEW_TOUR_START,
  };
};

const reviewTourFailed = () => {
  return {
    type: actionTypes.REVIEW_TOUR_FAILED,
  };
};

export const reviewTour = (tourId, data) => {
  return (dispatch) => {
    dispatch(reviewTourStart());
    const url = `/tours/${tourId}/reviews`;
    axios
      .post(url, data)
      .then((response) => {
        dispatch(fetchRevireTourList(tourId, 1, 3));
      })
      .catch((err) => {
        dispatch(reviewTourFailed());
      });
  };
};
