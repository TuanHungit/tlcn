import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import PageTitle from '../../components/layout/PageTitle/PageTile';
import BookingTour from '../../components/tour/tourDetail/bookingTour/bookingTour';
import ContentDetail from '../../components/tour/tourDetail/detailContent/detailContent';
import Locations from '../../components/tour/tourDetail/locations/locations';
import Map from '../../components/tour/tourDetail/map/map';
import Includes from '../../components/tour/tourDetail/includes/includes';
import Schedule from '../../components/tour/tourDetail/schedule/schedule';
import SimilarTour from '../../components/tour/tourDetail/similarTour/similarTour';
import ReviewTour from '../../components/tour/tourDetail/reviewTour/reviewTour';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';

class TourDetail extends Component {
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    this.props.onFetchTourDetail(params.id);
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
    if (data) {
      tourDetail = (
        <div className='body-inner '>
          <div class='main-wrapper scrollspy-container'>
            <section class='page-wrapper page-detail pt-0'>
              <div class='pt-0 pt-xl-15'></div>
              <PageTitle />
              {/* <Sticky /> */}
              <div class='container'>
                <div class='row gap-20 gap-lg-40'>
                  <div class='col-12 col-lg-8'>
                    <div class='content-wrapper'>
                      <ContentDetail content={data} />
                      <div class='mb-50'></div>
                      <Locations
                        content={{
                          summary: data.summary,
                          locations: { ...data.locations },
                        }}
                      />
                      <Map locations={data.locations} />

                      <Schedule />
                      <SimilarTour />
                      <ReviewTour />
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
    tourDetailError: state.tour.tourDetailError,
    tourDetail: state.tour.tourDetail,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchTourDetail: (slug) => dispatch(actionCreators.fetchTourDetail(slug)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TourDetail);
