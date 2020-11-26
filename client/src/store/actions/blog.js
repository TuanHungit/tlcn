import * as actionTypes from './actionTypes';
import axios from '../../common/axios-order';

export const fetchBlogStart = () => {
  return {
    type: actionTypes.FETCH_BLOG_START,
  };
};

const setBlogList = (blogList) => {
  return {
    type: actionTypes.SET_BLOG_LIST,
    blogList: blogList,
  };
};
const fetchBlogFailed = () => {
  return {
    type: actionTypes.FETCH_BLOG_FAILED,
  };
};

export const fetchBlog = (page = 0, limit = 3, options) => {
  fetchBlogStart();
  return (dispatch) => {
    let url = `/blogs?page=${page}&limit=${limit}`;
    if (options) {
      url = `/blogs?page=${page}&limit=${limit}&fields=${options.join(',')}`;
    }
    axios
      .get(url)
      .then((response) => {
        dispatch(setBlogList(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchBlogFailed());
      });
  };
};
