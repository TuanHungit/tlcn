import * as actionTypes from './actionTypes';
import axios from '../../common/axios-order';
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

export const fetchDestination = (page = 1, limit = 6) => {
  return (dispatch) => {
    dispatch(fetchDestinationStart());
    axios
      .get(
        `/destinations/?page=${page}&limit=${limit}&sort=-numOfTour&fields=name,images,numOfTour`
      )
      .then((response) => {
        console.log(response);
        dispatch(setDestinationList(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchDestinationFailed());
      });
  };
};
