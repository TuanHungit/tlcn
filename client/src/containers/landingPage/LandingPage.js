import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import Destinations from '../../components/landingPage/destinations/Destinations';
import Reviews from '../../components/landingPage/reviews/reviews';
import Blogs from '../../components/blogs/blogs';
import Search from '../../components/UI/search/search';
import BestTour from '../../components/tour/bestTour/BestTour';
import TourCarousel from '../../components/tour/tourCarousel/tourCarousel';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Intro from '../../components/landingPage/intro/intro';
import Benefit from '../../components/landingPage/benefit/benefit';
class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.onFetchDestination();
    this.props.onFetchTour(0, 6, [
      'duration',
      'name',
      'priceAdults',
      'images',
      'ratingsQuantity',
      'ratingsAverage',
      'startLocation',
      'country',
      'label',
      'slug',
    ]);
    this.props.onFetchREview(0, 15, ['review', 'user', 'createdAt']);
    this.props.onFetchBlog(0, 3, ['images', 'title', 'createdAt']);
  }
  render() {
    //fetch destination
    const content =
      this.props.destinationError ||
      this.props.tourError ||
      !this.props.tourList ||
      !this.props.destinationList ? (
        <Spinner />
      ) : (
        <>
          <Destinations destinationList={this.props.destinationList} />
          <TourCarousel tourList={this.props.tourList} />
        </>
      );
    //fetch tour

    // let tourCarousel = this.props.tourError ? (
    //   <p>Destinations can't be loaded!</p>
    // ) : (
    //   <Spinner />
    // );
    // if (this.props.tourList) {
    //   tourCarousel = bestTour = <BestTour tourList={this.props.tourList} />;
    // }
    //fetch review
    // let reviewList = this.props.reviewError ? (
    //   <p>Review can't be loaded!</p>
    // ) : (
    //   <Spinner />
    // );
    // if (this.props.reviewList) {
    //   reviewList = <Reviews reviewList={this.props.reviewList} />;
    // }
    // //fetch blog
    // let blogList = this.props.blogError ? (
    //   <p>Blog can't be loaded!</p>
    // ) : (
    //   <Spinner />
    // );
    // if (this.props.blogList) {
    //   blogList = <Blogs blogList={this.props.blogList} />;
    // }
    return (
      <div class='main-wrapper scrollspy-container'>
        <Search
          destinationList={this.props.destinationList}
          tourList={this.props.tourList}
        />
        <section class='pb-0'>
          <Benefit />
          {content}
        </section>
        <Intro />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    destinationList: state.destination.destinationList,
    destinationError: state.destination.error,
    tourList: state.tour.tourList,
    tourError: state.tour.error,
    reviewList: state.review.reviewList,
    reviewError: state.review.error,
    blogList: state.blog.blogList,
    blogError: state.blog.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDestination: () => dispatch(actionCreators.fetchDestination()),
    onFetchTour: (page, limit, feilds) =>
      dispatch(actionCreators.fetchTour(page, limit, feilds)),
    onFetchREview: (page, limit, feilds) =>
      dispatch(actionCreators.fetchReview(page, limit, feilds)),
    onFetchBlog: (page, limit, feilds) =>
      dispatch(actionCreators.fetchBlog(page, limit, feilds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
