import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-order';
const fetchDestinationStart = () => {
  return {
    type: actionTypes.FETCH_DESTINATION_START,
  };
};

const fetchDestinationFailed = (error) => {
  return {
    type: actionTypes.FETCH_DESTINATION_FAILED,
  };
};

const setDestinationList = (destinationList) => {
  return {
    type: actionTypes.SET_DESTINATION_LIST,
    destinationList,
  };
};

export const fetchDestination = (page = 1, limit = 10) => {
  return (dispatch) => {
    dispatch(fetchDestinationStart());
    axios
      .get(`/destinations/?page=${page}&limit=${limit}`)
      .then((response) => {
        dispatch(setDestinationList(response.data));
      })
      .catch((err) => {
        dispatch(fetchDestinationFailed());
      });
  };
};
