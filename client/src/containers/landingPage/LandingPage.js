import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import Destinations from '../../components/destinations/Destinations';
import Comment from '../../components/comments/Comment';
import Blogs from '../../components/blogs/Blogs';
import Search from '../../components/search/Search';
import BestTour from './../../components/tour/bestTour/BestTour';
import * as actionCreators from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
class LandingPage extends Component {
  componentDidMount() {
    this.props.onFetchDestination();
  }
  render() {
    return (
      <div class='main-wrapper scrollspy-container'>
        <Search />
        <section class='pb-0'>
          <div class='container'>
            <div class='row cols-1 cols-lg-3 gap-20 gap-lg-40'>
              <div class='col'>
                <div class='featured-icon-horizontal-01 clearfix'>
                  <div class='icon-font'>
                    <i class=' text-danger elegent-icon-gift_alt text-primary'></i>
                  </div>
                  <div class='content'>
                    <h6>We ﬁnd better deals</h6>
                    <p class='text-muted'>
                      Considered an invitation do introduced sufficient
                      understood instrument it.{' '}
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
                    <h6>Best price guaranteed</h6>
                    <p class='text-muted'>
                      Discovery sweetness principle discourse shameless bed one
                      excellent.
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
                    <h6>Travellers love us</h6>
                    <p class='text-muted'>
                      Sentiments of surrounded friendship dispatched connection
                      john shed hope.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class='clear mb-100'></div>

            <Destinations destinationList={this.props.destinationList} />
            <BestTour />
          </div>
        </section>
        <Comment />
        <Blogs />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listDestination: state.destination.listDestination,
    error: state.destination.error,
    loading: state.destination.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDestination: () => dispatch(actionCreators.fetchDestination()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
