import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actionCreator from '../../store/actions';

import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

import alertify from 'alertifyjs';
import Input from '../../components/UI/input/input';
import propTypes from 'prop-types';
import * as data from './index';
class Survey extends Component {
  state = {
    place: '',
    email: '',
    age: '',
    time: '',
    month: '',
    price: '',
    locations: '',
    formErrors: {
      email: '',
      age: '',
      place: '',
      time: '',
      month: '',
      price: '',
      locations: '',
    },
    emailValid: false,
    placeValid: false,
    ageValid: false,
    priceValid: false,
    monthValid: false,
    timeValid: false,
    formValid: false,
  };
  handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let placeValid = this.state.placeValid;
    let ageValid = this.state.ageValid;
    let timeValid = this.state.timeValid;
    let monthValid = this.state.monthValid;
    let priceValid = this.state.priceValid;
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'is invalid';
        break;
      case 'place':
        placeValid = value.length > 0;
        fieldValidationErrors.place = placeValid ? '' : 'is not invalid';
        break;
      case 'age':
        ageValid = value.length > 0;
        fieldValidationErrors.age = ageValid ? '' : 'is not invalid';
        break;
      case 'month':
        monthValid = value.length > 0;
        fieldValidationErrors.month = monthValid ? '' : 'is not invalid';
        break;
      case 'price':
        priceValid = value.length > 0;
        fieldValidationErrors.price = priceValid ? '' : 'is not invalid';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        placeValid: placeValid,
        ageValid: ageValid,
        priceValid: priceValid,
        timeValid: timeValid,
        monthValid: monthValid,
      },
      this.validateForm
    );
  };
  validateForm = () => {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.placeValid &&
        this.state.ageValid &&
        this.state.timeValid &&
        this.state.monthValid &&
        this.state.priceValid,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    // const validationForms = this.validateForm();

    // if (!validationForms) {
    //   console.log("Email không đúng định dạng.");

    // } else {
    //   //   this.props.onAuthRegister(
    //   //     this.state.controls.name.value,
    //   //     this.state.controls.email.value
    //   //   );
    //   // }
    console.log(
      this.state.email,
      this.state.place,
      this.state.age,
      this.state.time,
      this.state.price,
      this.state.month
    );
    // }
  };

  componentDidUpdate(nextProps, nextState) {
    if (this.props.isAuthencated !== nextProps.isAuthencated) {
      this.buttonElement.click();
    }
  }
  render() {
    const status = this.props.loadding ? <Spinner /> : null;
    const errors = this.props.error ? <p>{this.props.error}</p> : null;

    return (
      <div>
        <div
          className='modal fade modal-with-tabs form-login-modal'
          id='surveyFormTabInModal'
          aria-labelledby='modalWIthTabsLabel'
          tabindex='0'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content shadow-lg'>
              <nav className='d-none'>
                <ul className='nav external-link-navs clearfix'>
                  <li>
                    <a
                      data-toggle='tab'
                      href='tour-detail-02.html#loginFormTabInModal-register'
                    >
                      Register{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle='tab'
                      href='tour-detail-02.html#loginFormTabInModal-login'
                    >
                      Sign-in
                    </a>
                  </li>
                  <li>
                    <a
                      className='active'
                      data-toggle='tab'
                      href='tour-detail-02.html#loginFormTabInModal-survey'
                    >
                      Surey{' '}
                    </a>
                  </li>
                </ul>
              </nav>
              <div className='tab-content'>
                <div
                  role='tabpanel'
                  className='tab-pane active'
                  id='surveyFormTabInModal'
                >
                  <div className='form-login'>
                    <div className='form-header'>
                      <h4>Khảo sát khách hàng</h4>
                      <p className='font13'>
                        Khảo sát của bạn giúp cho dịch vụ của chúng tôi tốt hơn.
                        Xin quý khách dành chút thời gian của mình để hoàn thành
                        phiếu đánh giá và nhận xét dịch vụ này.
                      </p>
                    </div>

                    <div className='form-body'>
                      <form formErrors={this.state.formErrors}>
                        <div className='d-flex flex-column flex-lg-row align-items-stretch'>
                          <div className='flex-md-grow-1 bg-primary-light'>
                            <div className='form-inner'>
                              {/* {form} */}
                              <div className='form-group '>
                                <label className={'Label'}> 1. Email</label>
                                <input
                                  className={'Input'}
                                  type='email'
                                  placeholder='Email'
                                  required
                                  name='email'
                                  checked={this.validationForm}
                                  onChange={this.handleInput}
                                />
                              </div>
                              <div className='form-group '>
                                <label className={'Label'}>
                                  {' '}
                                  2. Độ tuổi của bạn
                                </label>
                                {data.age.map((el, index) => (
                                  <div className='custom-control custom-radio  '>
                                    <input
                                      key={el.id}
                                      type={el.type}
                                      className='custom-control-input'
                                      id={el.id}
                                      value={el.value}
                                      name={el.name}
                                      required
                                      onChange={this.handleInput}
                                    />
                                    <label
                                      className='custom-control-label'
                                      for={el.id}
                                    >
                                      {el.value}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              <div className='form-group '>
                                <label className={'Label'}>
                                  {' '}
                                  3. Địa điểm du lịch bạn thích nhất
                                </label>
                                <input
                                  className={'Input'}
                                  type='text'
                                  placeholder='Địa điểm du lịch'
                                  required
                                  name='place'
                                  checked={this.validationForm1}
                                  onChange={this.handleInput}
                                />
                              </div>
                              <div className='form-group'>
                                <label className={'Label'}>
                                  4. Thời gian ở lại
                                </label>
                                {data.time.map((el, index) => (
                                  <div key={el.id} className='form-check'>
                                    <input
                                      type={el.type}
                                      className='form-check-input'
                                      id={el.id}
                                      value={el.value}
                                      name={el.name}
                                      onChange={this.handleInput}
                                    />
                                    <label
                                      className='form-check-label'
                                      for={el.id}
                                    >
                                      {el.value}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              <div className='form-group'>
                                <label className={'Label'}>
                                  5. Bạn hay đi du lịch vào khoảng thời gian nào
                                </label>
                                {data.month.map((el, index) => (
                                  <div class='custom-control custom-radio'>
                                    <input
                                      key={el.id}
                                      type={el.type}
                                      className='custom-control-input'
                                      id={el.id}
                                      name={el.name}
                                      value={el.value}
                                      onChange={this.handleInput}
                                    />
                                    <label
                                      className='custom-control-label'
                                      for={el.id}
                                    >
                                      {el.value}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              <div className='form-group'>
                                <label className={'Label'}>
                                  6. Khoảng giá mà bạn mong muốn
                                </label>
                                {data.price.map((el, index) => (
                                  <div class='custom-control custom-radio'>
                                    <input
                                      key={el.id}
                                      type={el.type}
                                      className='custom-control-input'
                                      id={el.id}
                                      name={el.name}
                                      value={el.value}
                                      onChange={this.handleInput}
                                    />
                                    <label
                                      className='custom-control-label'
                                      for={el.id}
                                    >
                                      {el.value}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              <div className='form-group'>
                                <label className={'Label'}>
                                  7. Các điểm tham quan
                                </label>
                                {data.locations.map((el, index) => (
                                  <div class='custom-control custom-radio'>
                                    <input
                                      key={el.id}
                                      type={el.type}
                                      className='custom-control-input'
                                      id={el.id}
                                      name={el.name}
                                      value={el.value}
                                      onChange={this.handleInput}
                                    />
                                    <label
                                      className='custom-control-label'
                                      for={el.id}
                                    >
                                      {el.value}
                                    </label>
                                  </div>
                                ))}
                              </div>
                              <div className='form-group '>
                                <label className={'Label'}>
                                  {' '}
                                  8. Góp ý chung
                                </label>
                                <textarea
                                  className={'Input'}
                                  placeholder='Góp ý của bạn'
                                  required
                                  name='feedback'
                                  onChange={this.handleInput}
                                />
                              </div>
                            </div>
                            <div className='d-flex flex-column flex-md-row mt-25 pl-5'>
                              <div className='flex-shrink-0'>
                                <button
                                  type='submit'
                                  className='btn btn-success btn-wide'
                                  disabled={!this.state.formValid}
                                  onClick={this.handleClick}
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      {errors}
                    </div>
                  </div>
                </div>
                <div className='text-center pb-20'>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-labelledby='Close'
                    ref={(button) => (this.buttonElement = button)}
                  >
                    <span aria-hidden='true'>
                      <i className='far fa-times-circle'></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Survey.propTypes = {
  authSignup: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    // loadding: state.auth.loadding,
    // error: state.auth.error,
    // isAuthencated: state.auth.token !== null,
    // authRedirectPath: "/",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onAuthRegister: (name, email, password) =>
    //   dispatch(actionCreator.authSignup(name, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
