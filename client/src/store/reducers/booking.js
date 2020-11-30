import * as actionTypes from '../actions/actionTypes';

const initialState = {
  bookingInfo: null,
};

const setBookingInfo = (state, action) => {
  return {
    ...state,
    bookingInfo: { ...state.bookingInfo, ...action.bookingInfo },
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BOOKING_INFO:
      return setBookingInfo(state, action);
    default:
      return state;
  }
};

export { reducer as bookingReducer };
