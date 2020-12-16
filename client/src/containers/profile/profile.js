import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/profile/profile';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
const Profile = (props) => {
  let profile = props.error ? <p>Profile can't be loaded!</p> : <Spinner />;
  if (props.profile) {
    profile = (
      <ProfileComponent
        user={props.user}
        photo={props.photo}
        profile={props.profile}
        onUpdateProfile={props.onUpdateProfile}
        onFetchBookingFromUser={props.onFetchBookingFromUser}
        bookingList={props.bookingList}
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
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    onUpdateProfile: (body) => dispatch(actionCreators.updateProfile(body)),
    onFetchBookingFromUser: () =>
      dispatch(actionCreators.fetchBookingFromUser()),
  };
};
export default connect(mapPropsToState, mapDispatchToState)(Profile);
