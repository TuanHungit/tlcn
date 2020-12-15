import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ProfileComponent from '../../components/profile/profile';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
const Profile = (props) => {
  useEffect(() => {}, []);
  let profile = props.error ? <p>Profile can't be loaded!</p> : <Spinner />;
  if (props.profile) {
    profile = (
      <ProfileComponent
        user={props.user}
        photo={props.photo}
        profile={profile}
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
  };
};
const mapDispatchToState = (dispatch) => {
  return {};
};
export default connect(mapPropsToState, mapDispatchToState)(Profile);
