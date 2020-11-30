import * as actionTypes from './actionTypes';

export const setBookingInfo = (data) => {
  return {
    type: actionTypes.SET_BOOKING_INFO,
    bookingInfo: { ...data },
  };
};
