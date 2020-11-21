import React, { Component } from 'react';

import PageTitle from '../../layout/PageTitle/PageTile';
import BookingTour from './bookingTour/bookingTour';
import ContentDetail from './detailContent/detailContent';

import Sticky from './sticky/sticky';
import Locations from './locations/locations';
import Map from './map/map';
import Includes from './includes/includes';
import Schedule from './schedule/schedule';
import SimilarTour from './similarTour/similarTour';
import ReviewTour from './reviewTour/reviewTour';
class TourDetail extends Component {
  render() {
    return (
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
                    <ContentDetail />
                    <div class='mb-50'></div>
                    <Locations />
                    <Map />
                    <Includes />
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
}

export default TourDetail;
