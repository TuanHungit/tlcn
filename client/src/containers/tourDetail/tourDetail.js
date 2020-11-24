import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import PageTitle from '../../components/layout/PageTitle/PageTile';
import BookingTour from '../../components/tour/tourDetail/bookingTour/bookingTour';
import ContentDetail from '../../components/tour/tourDetail/detailContent/detailContent';
import Locations from '../../components/tour/tourDetail/locations/locations';
import Map from '../../components/tour/tourDetail/map/map';
import Includes from '../../components/tour/tourDetail/includes/includes';
import Sticky from '../../components/tour/tourDetail/sticky/sticky';
import Schedule from '../../components/tour/tourDetail/schedule/schedule';
import ReviewTour from '../../components/tour/tourDetail/reviewTour/reviewTour';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import SimilarTour from '../../components/tour/tourDetail/similarTour/similarTour';
import Calendar from '../../components/tour/tourDetail/calendar/calender';
class TourDetail extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.onFetchTourDetail(params.slug);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.tourDetail !== this.props.tourDetail) {
      const tourId = this.props.tourDetail.id;
      this.props.onFetchReviewRourList(tourId, 0, 6, [
        'review',
        'user',
        'createdAt',
        'rating',
      ]);
      this.props.onFetchSimilarTour(tourId, 0, 4, [
        'duration',
        'name',
        'price',
        'ratingsQuantity',
        'ratingsAverage',
        'startLocation',
        'country',
        'slug',
      ]);
    }
  }
  render() {
    const data = this.props.tourDetail;
    let tourDetail = this.props.tourDetailError ? (
      <p>Tour detail can't be loaded!</p>
    ) : (
      <div>
        <div class='pt-0 pt-xl-15'></div>
        <Spinner />
      </div>
    );
    let similarTourList = this.props.similarTourError ? (
      <p>Similar Tour can't be loaded!</p>
    ) : (
      <Spinner />
    );
    if (this.props.similarTourList) {
      similarTourList = (
        <SimilarTour tourSimilarList={this.props.similarTourList} />
      );
    }
    if (data) {
      tourDetail = (
        <div className='body-inner '>
          <div class='main-wrapper scrollspy-container'>
            <section class='page-wrapper page-detail pt-0'>
              <div class='pt-0 pt-xl-15'></div>

              <PageTitle />

              <div class='container'>
                <div class='row gap-20 gap-lg-40'>
                  <div class='col-12 col-lg-8'>
                    <div class='content-wrapper'>
                      <ContentDetail
                        content={data}
                        availableDate={data.availableDate}
                      />
                      <div class='mb-50'></div>

                      <Locations
                        content={{
                          summary: data.summary,
                          locations: { ...data.locations },
                        }}
                      />
                      <Map locations={data.locations} />

                      <Schedule
                        duration={data.duration}
                        start={data.availableDate}
                        price={data.price}
                      />
                      {similarTourList}
                      <ReviewTour reviews={this.props.reviewTourList} />
                    </div>
                  </div>
                  <BookingTour />
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }

    return <div>{tourDetail}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    similarTourError: state.tour.similarTourError,
    similarTourList: state.tour.similarTourList,
    tourDetailError: state.tour.tourDetailError,
    tourDetail: state.tour.tourDetail,
    reviewTourListError: state.review.reviewTourListError,
    reviewTourList: state.review.reviewTourList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTourDetail: (slug) => dispatch(actionCreators.fetchTourDetail(slug)),
    onFetchReviewRourList: (tourId, page, limit, options) =>
      dispatch(
        actionCreators.fetchRevireTourList(tourId, page, limit, options)
      ),
    onFetchSimilarTour: (tourId, page, limit, options) => {
      dispatch(actionCreators.fetchSimilarTour(tourId, page, limit, options));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TourDetail);
