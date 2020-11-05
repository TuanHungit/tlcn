import * as actionTypes from './actionTypes';
import axios from '../../axios/axios-order';

export const fetchBlogStart = () => {
  return {
    type: actionTypes.FETCH_BLOG_START,
  };
};

const setBlogList = (blogtList) => {
  return {
    type: actionTypes.SET_BLOG_LIST,
    blogList: blogtList,
  };
};
const fetchBlogFailed = () => {
  return {
    type: actionTypes.FETCH_BLOG_FAILED,
  };
};

export const fetchBlog = () => {
  fetchBlogStart();
  return (dispatch) => {
    axios
      .get('/blog')
      .then((response) => {
        dispatch(setBlogList(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchBlogFailed());
      });
  };
};
