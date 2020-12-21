import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import Destinations from '../../components/destinations/Destinations';
import Reviews from '../../components/reviews/reviews';
import Blogs from '../../components/blogs/blogs';
import Search from '../../components/UI/search/search';
import BestTour from '../../components/tour/bestTour/BestTour';
import TourCarousel from '../../components/tour/tourCarousel/tourCarousel';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import Intro from '../../components/intro/intro';

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
    let destinations = this.props.destinationError ? (
      <p>Destinations can't be loaded!</p>
    ) : (
      <Spinner />
    );
    let search = this.props.destinationError ? (
      <p>Destinations can't be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.props.destinationList) {
      destinations = (
        <Destinations destinationList={this.props.destinationList} />
      );
    }
    if (this.props.destinationList) {
      search = (
        <Search
          destinationList={this.props.destinationList}
          tourList={this.props.tourList}
        />
      );
    }

    //fetch tour
    let bestTour = this.props.tourError ? (
      <p>Destinations can't be loaded!</p>
    ) : (
      <Spinner />
    );
    let tourCarousel = this.props.tourError ? (
      <p>Destinations can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.props.tourList) {
      tourCarousel = <TourCarousel tourList={this.props.tourList} />;
      bestTour = <BestTour tourList={this.props.tourList} />;
    }
    //fetch review
    let reviewList = this.props.reviewError ? (
      <p>Review can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.props.reviewList) {
      reviewList = <Reviews reviewList={this.props.reviewList} />;
    }
    //fetch blog
    let blogList = this.props.blogError ? (
      <p>Blog can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.props.blogList) {
      blogList = <Blogs blogList={this.props.blogList} />;
    }
    return (
      <div class='main-wrapper scrollspy-container'>
        {search}
        <section class='pb-0'>
          <div class='container'>
            <div class='row cols-1 cols-lg-3 gap-20 gap-lg-40'>
              <div class='col'>
                <div class='featured-icon-horizontal-01 clearfix'>
                  <div class='icon-font'>
                    <i class=' text-danger elegent-icon-gift_alt text-primary'></i>
                  </div>
                  <div class='content'>
                    <h6>GIÁ TỐT - NHIỀU ƯU ĐÃI</h6>
                    <p class='text-muted'>
                      CoƯu đãi và quà tặng hấp dẫn khi mua tour online.
                    </p>
                  </div>
                </div>
              </div>

              <div class='col'>
                <div class='featured-icon-horizontal-01 clearfix'>
                  <div class='icon-font'>
                    <i class='text-danger elegent-icon-wallet text-primary'></i>
                  </div>
                  <div class='content'>
                    <h6>THANH TOÁN AN TOÀN</h6>
                    <p class='text-muted'>
                      Được bảo mật bởi tổ chức quốc tế Global Sign.
                    </p>
                  </div>
                </div>
              </div>

              <div class='col'>
                <div class='featured-icon-horizontal-01 clearfix'>
                  <div class='icon-font'>
                    <i class='text-danger elegent-icon-heart_alt text-primary'></i>
                  </div>
                  <div class='content'>
                    <h6>THƯƠNG HIỆU UY TÍN</h6>
                    <p class='text-muted'>
                      Thương hiệu lữ hành hàng đầu Việt Nam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {tourCarousel}
          {destinations}
          {/* {bestTour} */}
          {blogList}
          {reviewList}
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
