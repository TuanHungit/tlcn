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

export const fetchTour = (page = 0, limit = 9) => {
  fetchTourStart();
  return (dispatch) => {
    axios
      .get(`/tours?page=${page}&limit=${limit}`)
      .then((response) => {
        dispatch(setTourList(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchTourFailed());
      });
  };
};
