import * as actionTypes from '../actions/actionTypes';

const initialState = {
  bookingInfo: null,
  bookingError: false,
};

const setBookingInfo = (state, action) => {
  return {
    ...state,
    bookingInfo: { ...state.bookingInfo, ...action.bookingInfo },
    bookingError: false,
  };
};

const bookingError = (state) => {
  return {
    ...state,
    bookingError: true,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOKING_INFO:
      return setBookingInfo(state, action);
    case actionTypes.CREATE_BOOKING_FAILED:
      return bookingError(state);
    default:
      return state;
  }
};

export { reducer as bookingReducer };
