import * as actionTypes from '../actions/actionTypes';

const initState = {
  blogList: null,
  error: false,
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

    default:
      return state;
  }
};

export { reducer as blogReducer };
