import * as actionTypes from '../actions/actionTypes';

const initialState = {
  bookingInfo: null,
  bookingError: false,
  bookingList: null,
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

const fetchBookingFromUserSuccess = (state, action) => {
  return {
    ...state,
    error: false,
    bookingList: { ...action.bookingList },
  };
};

const fetchBookingFromUserFailed = (state, action) => {
  return {
    ...state,
    error: true,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOKING_INFO:
      return setBookingInfo(state, action);
    case actionTypes.CREATE_BOOKING_FAILED:
      return bookingError(state);
    case actionTypes.FETCH_BOOKING_FROM_USER_FAILED:
      return fetchBookingFromUserFailed(state, action);
    case actionTypes.FETCH_BOOKING_FROM_USER_SUCCESS:
      return fetchBookingFromUserSuccess(state, action);
    default:
      return state;
  }
};

export { reducer as bookingReducer };
