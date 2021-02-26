import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import PageTitle from '../../components/layout/PageTitle/PageTile';
import BookingTour from '../../components/booking/bookingTourAside/bookingTourAside';
import ContentDetail from '../../components/tour/tourDetail/detailContent/detailContent';
import Locations from '../../components/tour/tourDetail/locations/locations';
import Map from '../../components/tour/tourDetail/map/map';

import ReviewTour from '../../components/tour/tourDetail/reviewTour/reviewTour';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import SimilarTour from '../../components/tour/tourDetail/similarTour/similarTour';
import BookingModal from '../../components/booking/bookingModal/bookingModal';

const TourDetail = (props) => {
  useEffect(() => {
    const {
      match: { params },
    } = props;
    props.onFetchTourDetail(params.slug);
    props.onCheckUserView(params.slug);
    window.scrollTo(0, 0);
  }, [props.match.params.slug]);

  useEffect(() => {
    if (props.tourDetail) {
      props.onSetBooking({
        startDate: props.tourDetail.availableDate[0],
        numOfPersonAdults: 1,
        numOfPersonChildren: 0,
        numOfPersonBaby: 0,
        priceAdults: props.tourDetail.priceAdults,
        priceChildren: props.tourDetail.priceChildren,
        priceBaby: props.tourDetail.priceBaby,
        total: props.tourDetail.priceAdults,
      });
      const tourId = props.tourDetail.id;
      props.onFetchReviewRourList(tourId, 1, 3, [
        'review',
        'user',
        'createdAt',
        'rating',
      ]);
      props.onFetchSimilarTour(tourId, 1, 4, [
        'duration',
        'name',
        'priceAdults',
        'images',
        'ratingsQuantity',
        'ratingsAverage',
        'startLocation',
        'country',
        'slug',
      ]);
    }
  }, [props.tourDetail]);

  useEffect(() => {
    if (props.isAuthencated) {
      props.onCheckUserView(props.match.params.slug);
    }
  }, [props.isAuthencated, props.match.params.slug]);
  const calculateTotal = (
    numOfPersonAdults,
    numOfPersonChildren,
    numOfPersonBaby
  ) => {
    const adultsTotal = numOfPersonAdults * props.tourDetail.priceAdults;
    const childrenTotal = numOfPersonChildren * props.tourDetail.priceChildren;
    const babyTotal = numOfPersonBaby * props.tourDetail.priceBaby;
    return adultsTotal + childrenTotal + babyTotal;
  };
  const changePersonAdultsHandler = (event) => {
    props.onSetBooking({
      numOfPersonAdults: event.target.value,
      total: calculateTotal(
        event.target.value,
        props.bookingInfo.numOfPersonChildren,
        props.bookingInfo.numOfPersonBaby
      ),
    });
  };
  const changePersonChildrenHandler = (event) => {
    props.onSetBooking({
      numOfPersonChildren: event.target.value,
      total: calculateTotal(
        props.bookingInfo.numOfPersonAdults,
        event.target.value,
        props.bookingInfo.numOfPersonBaby
      ),
    });
  };
  const changePersonBabyHandler = (event) => {
    props.onSetBooking({
      numOfPersonBaby: event.target.value,
      total: calculateTotal(
        props.bookingInfo.numOfPersonAdults,
        props.bookingInfo.numOfPersonChildren,
        event.target.value
      ),
    });
  };
  const changeDateHandler = (date) => {
    props.onSetBooking({
      startDate: date,
    });
  };

  const data = props.tourDetail;
  let tourDetail = <Spinner />;

  let similarTourList = props.similarTourError ? (
    <p>Similar Tour can't be loaded!</p>
  ) : (
    <Spinner />
  );
  if (props.similarTourList) {
    similarTourList = <SimilarTour tourSimilarList={props.similarTourList} />;
  }
  let userReview = {};
  if (props.userReview !== null) {
    userReview = props.userReview;
  }
  if (data && props.bookingInfo && !props.loading) {
    tourDetail = (
      <div class='main-wrapper scrollspy-container'>
        <section class='page-wrapper page-detail pt-0'>
          <PageTitle title={data.name} src={`http://${data.images[1]}`} />

          <div class='container'>
            <div class='row gap-20 gap-lg-40'>
              <div class='col-12 col-lg-8'>
                <div class='content-wrapper'>
                  <ContentDetail
                    content={data}
                    availableDate={data.availableDate}
                  />
                  <div class='mb-50'></div>
                  <nav>
                    <div class='nav nav-tabs' id='nav-tab' role='tablist'>
                      <a
                        class='nav-item nav-link active'
                        id='nav-home-tab'
                        data-toggle='tab'
                        href='#nav-home'
                        role='tab'
                        aria-controls='nav-home'
                        aria-selected='true'
                      >
                        Chương trình Tour
                      </a>
                      <a
                        class='nav-item nav-link'
                        id='nav-profile-tab'
                        data-toggle='tab'
                        href='#nav-profile'
                        role='tab'
                        aria-controls='nav-profile'
                        aria-selected='false'
                      >
                        Chính sách Tour
                      </a>
                    </div>
                  </nav>
                  <div class='tab-content' id='nav-tabContent'>
                    <div
                      class='tab-pane fade show active'
                      id='nav-home'
                      role='tabpanel'
                      aria-labelledby='nav-home-tab'
                    >
                      <Locations
                        content={{
                          summary: data.summary,
                          description: data.description,
                          locations: { ...data.locations },
                          vehicle: data.vehicle,
                        }}
                      />
                      <Map locations={data.locations} />
                    </div>
                    <div
                      class='tab-pane fade'
                      id='nav-profile'
                      role='tabpanel'
                      aria-labelledby='nav-profile-tab'
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.policy,
                        }}
                      />
                    </div>
                  </div>

                  {similarTourList}

                  <ReviewTour
                    reviews={props.reviewTourList}
                    tourId={props.tourDetail.id}
                    onFetchReviewRourList={props.onFetchReviewRourList}
                    pageCount={props.pageCount}
                    reviewLoading={props.reviewLoading}
                    onReviewTour={props.onReviewTour}
                    userReview={userReview}
                    ratingsAverage={props.tourDetail.ratingsAverage}
                    onCheckUserView={props.onCheckUserView}
                  />
                </div>
              </div>
              {props.bookingInfo ? (
                <BookingTour
                  numOfPerson={[
                    props.bookingInfo.numOfPersonAdults,
                    props.bookingInfo.numOfPersonChildren,
                    props.bookingInfo.numOfPersonBaby,
                  ]}
                  total={props.bookingInfo.total}
                  priceAdults={props.tourDetail.priceAdults}
                  priceChildren={props.tourDetail.priceChildren}
                  priceBaby={props.tourDetail.priceBaby}
                  duration={data.duration}
                  changePersonAdultsHandler={(event) =>
                    changePersonAdultsHandler(event)
                  }
                  changePersonChildrenHandler={(event) =>
                    changePersonChildrenHandler(event)
                  }
                  changePersonBabyHandler={(event) =>
                    changePersonBabyHandler(event)
                  }
                  date={props.bookingInfo.startDate}
                  slug={data.slug}
                />
              ) : null}
              <BookingModal
                duration={data.duration}
                start={data.availableDate}
                priceAdults={data.priceAdults}
                changeDateHandler={changeDateHandler}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
  return <div>{tourDetail}</div>;
};
const mapStateToProps = (state) => {
  return {
    loading: state.tour.loading,
    similarTourList: state.tour.similarTourList,
    tourDetailError: state.tour.tourDetailError,
    tourDetail: state.tour.tourDetail,
    reviewTourListError: state.review.reviewTourListError,
    reviewTourList: state.review.reviewTourList,
    pageCount: state.review.pageCount,
    bookingInfo: state.booking.bookingInfo,
    reviewLoading: state.review.loading,
    userReview: state.review.userReview,
    isAuthencated: state.auth.token !== null,
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
    onSetBooking: (data) => {
      dispatch(actionCreators.setBookingInfo(data));
    },
    onReviewTour: (tourId, data) =>
      dispatch(actionCreators.reviewTour(tourId, data)),
    onCheckUserView: (slug) => {
      dispatch(actionCreators.checkUserReview(slug));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TourDetail);
