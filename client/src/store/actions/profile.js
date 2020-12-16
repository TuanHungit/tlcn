import * as actionTypes from './actionTypes';
import axios from '../../common/axios-order';
import alertify from 'alertifyjs';
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

const updateProfileSuccess = (profile) => {
  return {
    type: actionTypes.UPDATE_PROFILE_SUCCESS,
    profile: { ...profile },
  };
};
const updateProfilefFailed = () => {
  return {
    type: actionTypes.UPDATE_PROFILE_FAILED,
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

export const updateProfile = (body) => {
  return (dispatch) => {
    axios
      .put('/users/profile', body)
      .then((res) => {
        alertify.success('Cập nhật thành công!');
        dispatch(updateProfileSuccess(res.data));
      })
      .catch((err) => {
        alertify.danger('Cập nhật không thành công!');
        dispatch(updateProfilefFailed());
      });
  };
};
