import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SingleBlogComponent from '../../components/blogs/singleBlog/singleBlog';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
const SingleBlog = (props) => {
  useEffect(() => {
    props.onFetchBlogDetail(props.match.params.slug);
  }, []);
  let blogDetail = props.blogDetailError ? (
    <p>Blog detail can't be loadded!</p>
  ) : (
    <Spinner />
  );
  if (props.blogDetail) {
    blogDetail = <SingleBlogComponent blog={props.blogDetail} />;
  }
  return <div>{blogDetail}</div>;
};

const mapStateToProps = (state) => {
  return {
    blogDetail: state.blog.blogDetail,
    blogDetailError: state.blog.blogDetailError,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBlogDetail: (slug) => dispatch(actionCreators.fetchBlogDetail(slug)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBlog);
