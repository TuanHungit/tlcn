import * as actionTypes from './actionTypes';
import axios from '../../common/axios-order';
export const setBookingInfo = (data) => {
  return {
    type: actionTypes.SET_BOOKING_INFO,
    bookingInfo: { ...data },
  };
};

const createBookingFailed = () => {
  return {
    type: actionTypes.CREATE_BOOKING_FAILED,
  };
};

export const createBooking = (data) => {
  return (dispatch) => {
    axios
      .post(`/booking`, data)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
        dispatch(createBookingFailed());
      });
  };
};
