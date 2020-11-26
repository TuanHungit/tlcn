import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import PageTitle from '../../components/layout/PageTitle/PageTile';
import BookingTour from '../../components/booking/bookingTourAside/bookingTourAside';
import ContentDetail from '../../components/tour/tourDetail/detailContent/detailContent';
import Locations from '../../components/tour/tourDetail/locations/locations';
import Map from '../../components/tour/tourDetail/map/map';

import Sticky from '../../components/tour/tourDetail/sticky/sticky';
import Schedule from '../../components/tour/tourDetail/schedule/schedule';
import ReviewTour from '../../components/tour/tourDetail/reviewTour/reviewTour';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
import SimilarTour from '../../components/tour/tourDetail/similarTour/similarTour';
import BookingModal from '../../components/tour/tourDetail/bookingModal/bookingModal';
import Booking from '../../components/booking/booking';
class TourDetail extends Component {
  state = {
    dateChoose: null,
    numOfPerson: 1,
    total: 0,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    const {
      match: { params },
    } = this.props;
    this.props.onFetchTourDetail(params.slug);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.tourDetail !== this.props.tourDetail) {
      this.setState({
        total: this.props.tourDetail.price,
        date: this.props.tourDetail.availableDate[0],
      });

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
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.slug !== this.props.match.params.slug) {
  //     const {
  //       match: { params },
  //     } = this.props;
  //     this.props.onFetchTourDetail(params.slug);
  //   }
  //   return true;
  // }

  changePersonHandler = (event) => {
    const numOfPerson = event.target.value;
    const price = this.props.tourDetail.price;
    const total = numOfPerson * price;

    this.setState({
      numOfPerson: event.target.value,
      total: total,
    });
  };
  changeDateHandler = (date) => {
    this.setState({
      dateChoose: date,
    });
  };
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
        <div className='body-inner'>
          <div class='main-wrapper scrollspy-container'>
            <section class='page-wrapper page-detail pt-0'>
              <div class='pt-0 pt-xl-15'></div>

              <PageTitle title={data.name} />

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
                      {similarTourList}
                      <ReviewTour reviews={this.props.reviewTourList} />
                    </div>
                  </div>
                  <BookingTour
                    numOfPerson={this.state.numOfPerson}
                    total={this.state.total}
                    price={this.props.tourDetail.price}
                    duration={data.duration}
                    changePersonHandler={(event) =>
                      this.changePersonHandler(event)
                    }
                    date={this.state.dateChoose}
                    slug={data.slug}
                  />
                  <BookingModal
                    duration={data.duration}
                    start={data.availableDate}
                    price={data.price}
                    changeDateHandler={this.changeDateHandler}
                  />
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
