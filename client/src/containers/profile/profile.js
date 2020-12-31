import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/profile/profile';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
const Profile = (props) => {
  window.scrollTo(0, 0);
  let profile = props.error ? <p>Profile can't be loaded!</p> : <Spinner />;

  if (props.profile && props.user) {
    profile = (
      <ProfileComponent
        user={props.user}
        photo={props.photo}
        profile={props.profile}
        onUpdateProfile={props.onUpdateProfile}
        onFetchBookingFromUser={props.onFetchBookingFromUser}
        bookingList={props.bookingList}
        updateBookingSuccess={props.updateBookingSuccess}
        onUpdateBooking={props.onUpdateBooking}
      />
    );
  }
  return <div>{profile}</div>;
};

const mapPropsToState = (state) => {
  return {
    profile: state.profile.profile,
    error: state.profile.error,
    user: state.auth.user,
    bookingList: state.booking.bookingList,
    updateBookingSuccess: state.booking.updateBookingSuccess,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    onUpdateProfile: (body) => dispatch(actionCreators.updateProfile(body)),
    onFetchBookingFromUser: () =>
      dispatch(actionCreators.fetchBookingFromUser()),
    onUpdateBooking: (bookingId, body) =>
      dispatch(actionCreators.updateBooking(bookingId, body)),
  };
};
export default connect(mapPropsToState, mapDispatchToState)(Profile);
