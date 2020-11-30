import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';
import BookingComponent from '../../components/booking/booking';
import Spinner from './../../components/UI/Spinner/Spinner';
import BookingModal from '../../components/booking/bookingModal/bookingModal';
import Notfound from '../../components/notFound/notFound';
class Booking extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  changeDateHandler = (date) => {
    this.props.onSetBooking({
      startDate: date,
    });
  };
  onChangeInputHandler = () => {};
  render() {
    return (
      <div>
        {this.props.tourDetail && this.props.bookingInfo ? (
          <div>
            <BookingComponent
              tour={this.props.tourDetail}
              bookingInfo={this.props.bookingInfo}
              user={this.props.user}
            />
            <BookingModal
              duration={this.props.tourDetail.duration}
              start={this.props.tourDetail.availableDate}
              price={this.props.tourDetail.price}
              changeDateHandler={this.changeDateHandler}
            />
          </div>
        ) : (
          <Notfound />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tourDetail: state.tour.tourDetail,
    bookingInfo: state.booking.bookingInfo,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetBooking: (data) => {
      dispatch(actionCreators.setBookingInfo(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Booking);
