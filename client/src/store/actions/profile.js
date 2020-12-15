import * as actionTypes from './actionTypes';
import axios from '../../common/axios-order';

const setProfile = (profile) => {
  return {
    type: actionTypes.SET_PROFILE,
    profile,
  };
};

const fetchProfileFailed = () => {
  return {
    type: actionTypes.FETCH_PROFILE_FAILED,
  };
};

const createProfileSuccess = () => {
  return {
    type: actionTypes.CREATE_PROFILE_SUCCESS,
  };
};
const createProfilefFailed = () => {
  return {
    type: actionTypes.CREATE_PROFILE_FAILED,
  };
};

export const fetchProfile = () => {
  return (dispatch) => {
    axios
      .get('/users/profile')
      .then((res) => dispatch(setProfile(res.data[0])))
      .catch((err) => {
        console.log(err);
        dispatch(fetchProfileFailed());
      });
  };
};

export const createProfile = () => {
  return (dispatch) => {
    axios
      .post('/users/profile')
      .then((res) => {
        dispatch(createProfileSuccess());
      })
      .catch((err) => {
        dispatch(createProfilefFailed());
      });
  };
};
