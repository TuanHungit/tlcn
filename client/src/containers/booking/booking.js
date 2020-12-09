import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions';
import BookingComponent from '../../components/booking/booking';
import BookingModal from '../../components/booking/bookingModal/bookingModal';
import Notfound from '../../components/notFound/notFound';
import Input from '../../components/UI/input/input';
import Payment from '../../components/booking/payment/payment';
import axios from '../../common/axios-order';
class Booking extends Component {
  state = {
    controls: {
      fullname: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Họ và tên',
        },
        value: '',
        label: 'Họ và tên',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      age: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Tuổi',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Địa chỉ Email',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },

      phone: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Số điện thoại',
        },
        value: '',
        validation: {
          required: true,
          isNum: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    isSignUp: true,
    checkCodeSuccess: false,
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.isNum) {
      isValid = !isNaN(value) && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  }
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedControls = {
      ...this.state.controls,
    };
    const updatedControlsElement = {
      ...updatedControls[inputIdentifier],
    };
    updatedControlsElement.value = event.target.value;
    updatedControlsElement.valid = this.checkValidity(
      updatedControlsElement.value,
      updatedControlsElement.validation
    );
    updatedControlsElement.touched = true;
    updatedControls[inputIdentifier] = updatedControlsElement;

    let formIsValid = true;
    if (!this.props.user) {
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }
    }

    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  changeDateHandler = (date) => {
    this.props.onSetBooking({
      startDate: date,
    });
  };
  valueInput(type, value) {
    if (this.props.user && (type === 'Họ và tên' || type === 'Địa chỉ Email')) {
      switch (type) {
        case 'Địa chỉ Email':
          return this.props.user.email;
        case 'Họ và tên':
          return this.props.user.name;
      }
    }

    return value;
  }
  checkPromotionCode = (code) => {
    axios
      .post(`/promotions/check/code`, { code })
      .then((res) => {
        console.log(res.data.discount);
        this.setState({ checkCodeSuccess: true });
        this.props.onSetBooking({
          discount: res.data.discount,
          finalTotal: this.props.bookingInfo.total - res.data.discount,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ checkCodeSuccess: false });
      });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    let form = formElementsArray.map((formElement) => (
      <div className='col'>
        <div className='form-group'>
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            label={formElement.config.elementConfig.placeholder}
            value={this.valueInput(
              formElement.config.elementConfig.placeholder,
              formElement.config.value
            )}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event) => this.inputChangedHandler(event, formElement.id)}
          />
        </div>
      </div>
    ));
    const bookingUserInfo = {
      fullname: this.props.user
        ? this.props.user.name
        : this.state.controls.fullname.value,
      age: this.state.controls.age.value,
      email: this.props.user
        ? this.props.user.email
        : this.state.controls.email.value,
      phone: this.state.controls.phone.value,
    };
    const payment = (
      <Payment
        formIsValid={this.state.formIsValid}
        bookingUserInfo={bookingUserInfo}
        tourDetail={this.props.tourDetail}
        onCreateBooking={this.props.onCreateBooking}
        bookingInfo={this.props.bookingInfo}
      />
    );

    return (
      <div>
        {this.props.tourDetail && this.props.bookingInfo ? (
          <div>
            <BookingComponent
              tour={this.props.tourDetail}
              bookingInfo={this.props.bookingInfo}
              user={this.props.user}
              form={form}
              payment={payment}
              checkPromotionCode={this.checkPromotionCode}
              checkCodeSuccess={this.state.checkCodeSuccess}
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
    onCreateBooking: (data) => {
      dispatch(actionCreators.createBooking(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Booking);
