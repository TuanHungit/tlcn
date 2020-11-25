import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios-order";

const profileStart = () => {
  return {
    type: actionTypes.PROFILE_START,
  };
};
const profileFailed = (error) => {
  return {
    type: actionTypes.PROFILE_FAILED,
    error: error,
  };
};

const profileSuccess = (user) => {
  return {
    type: actionTypes.PROFILE_SUCCESS,
    user: user,
  };
};

 export const getAuthProfile = () => {
   return (dispatch) => {
     dispatch(profileStart());
//     axios
//       .post("/users/signin")
//       .then((response) => {
//         const user = response.data.data.user;
//         // const user = response.data;
//        // dispatch(profileSuccess(user));
//       })
//       .catch((error) => {
//         const errors = error.response.data.errors;
//         if (errors) {
//           dispatch(profileFailed(errors[0].message));
//         }
//       });
   };
 };
