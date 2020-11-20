import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-order';

export const fetchTourStart = () => {
  return {
    type: actionTypes.FETCH_TOUR_START,
  };
};

const setTourList = (tourList) => {
  return {
    type: actionTypes.SET_TOUR_LIST,
    tourList: tourList,
  };
};
const fetchTourFailed = () => {
  return {
    type: actionTypes.FETCH_TOUR_FAILED,
  };
};

export const fetchTour = (page = 0, limit = 9, fields) => {
  fetchTourStart();
  return (dispatch) => {
    let url = `/tours?page=${page}&limit=${limit}`;
    if (fields) {
      url = `/tours?page=${page}&limit=${limit}&fields=${fields.join(
        ','
      )}&sort=-ratingsAverage`;
    }
    axios
      .get(url)
      .then((response) => {
        dispatch(setTourList(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchTourFailed());
      });
  };
};
