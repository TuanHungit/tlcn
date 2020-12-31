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
const fetchBookingFromUserFailed = () => {
  return {
    type: actionTypes.FETCH_BOOKING_FROM_USER_FAILED,
  };
};

const fetchBookingFromUserSuccess = (bookingList) => {
  return {
    type: actionTypes.FETCH_BOOKING_FROM_USER_SUCCESS,
    bookingList,
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

export const fetchBookingFromUser = () => {
  return (dispatch) => {
    axios
      .get('/users/booking')
      .then((res) => {
        dispatch(fetchBookingFromUserSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchBookingFromUserFailed());
      });
  };
};

export const updateBooking = (bookingId, data) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_BOOKING_START });
    axios
      .patch(`/booking/${bookingId}`, data)
      .then((res) => {
        dispatch({ type: actionTypes.UPDATE_BOOKING_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
