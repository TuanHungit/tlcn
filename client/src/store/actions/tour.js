import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-order';

export const fetchTourStart = () => {
  return {
    type: actionTypes.FETCH_TOUR_START,
  };
};

const setTourList = (productList) => {
  return {
    type: actionTypes.SET_TOUR_LIST,
    productList: productList,
  };
};
const fetchTourFailed = () => {
  return {
    type: actionTypes.FETCH_TOUR_FAILED,
  };
};

export const fetchTour = () => {
  fetchTourStart();
  return (dispatch) => {
    axios
      .get('/tours')
      .then((response) => {
        dispatch(setTourList(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchTourFailed());
      });
  };
};
