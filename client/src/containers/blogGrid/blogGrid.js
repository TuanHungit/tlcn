import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BlogGridComponent from '../../components/blogs/blogGrid/blogGrid';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actionCreators from '../../store/actions';
const BlogGrid = (props) => {
  useEffect(() => {
    props.onFetchBlog(0, 10, [['slug', 'title', 'createdAt']]);
  }, []);
  let blogList = props.blogError ? (
    <p>Blog list can't be loaded!</p>
  ) : (
    <Spinner />
  );
  if (props.blogList) {
    blogList = <BlogGridComponent blogList={props.blogList} />;
  }
  return <div>{blogList}</div>;
};

const mapStateToProps = (state) => {
  return {
    blogList: state.blog.blogList,
    blogError: state.blog.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBlog: (page, limit, feilds) =>
      dispatch(actionCreators.fetchBlog(page, limit, feilds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogGrid);
