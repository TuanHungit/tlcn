import * as actionTypes from '../actions/actionTypes';

const initState = {
  blogList: null,
  error: false,
  blogDetail: null,
  blogDetailError: false,
};
const fetchBlogDetailFailed = (state) => {
  return {
    ...state,
    blogDetailError: true,
  };
};
const setBlogDetail = (state, action) => {
  return {
    ...state,
    blogDetail: { ...action.blogDetail },
    blogDetailError: false,
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BLOG_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.FETCH_BLOG_START:
      return {
        ...state,
        error: false,
      };
    case actionTypes.SET_BLOG_LIST:
      return {
        ...state,
        error: false,
        loading: false,
        blogList: {
          ...action.blogList,
        },
      };
    case actionTypes.UNLIKE_BLOG:
      return {
        ...state,
        error: false,
        loading: false,
        blogList: {
          ...action.blogList,
        },
      };

    case actionTypes.LIKE_BLOG:
      return {
        ...state,
      };
    case actionTypes.COMMENT_BLOG:
      return {
        ...state,
      };
    case actionTypes.DELETE_COMMENT_BLOG:
      return {
        ...state,
      };
    case actionTypes.FETCH_BLOG_DETAIL_FAILED:
      return fetchBlogDetailFailed(state);
    case actionTypes.SET_BLOG_DETAIL:
      return setBlogDetail(state, action);

    default:
      return state;
  }
};

export { reducer as blogReducer };
