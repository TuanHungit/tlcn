import React, { Component } from 'react';
import alertify from 'alertifyjs';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import * as actionCreator from '../../../store/actions';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/input/input';
import axios from '../../../common/axios-order';
class Signin extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Địa chỉ email',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    isSignUp: true,
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
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
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  };
  handleClick = (event) => {
    event.preventDefault();
    console.log(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
    this.props.onAuthLognin(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
  };

  componentDidUpdate(nextProps, nextState) {
    if (
      this.props.isAuthencated &&
      this.props.isAuthencated !== nextProps.isAuthencated
    ) {
      this.buttonElement.click();
      alertify.success('Đăng nhập thành công!');
    }
  }
  responseGoogle = (response) => {
    this.props.onAuthLogninGoogle(response.tokenId);
  };
  render() {
    const status = this.props.loadding ? <Spinner /> : null;
    const errors = this.props.error ? <p>{this.props.error}</p> : null;
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }
    let form = formElementsArray.map((formElement) => (
      <div className='form-group'>
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          label={formElement.config.elementConfig.placeholder}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => this.inputChangedHandler(event, formElement.id)}
        />
      </div>
    ));
    return (
      <div>
        <div
          className='modal fade modal-with-tabs form-login-modal'
          id='loginFormTabInModal'
          aria-labelledby='modalWIthTabsLabel'
          tabindex='0'
          role='dialog'
          aria-hidden='true'
        >
          <div className='modal-dialog' role='document'>
            <div className='modal-content shadow-lg'>
              <div className='tab-content'>
                <div
                  role='tabpanel'
                  className='tab-pane active'
                  id='loginFormTabInModal-login'
                >
                  <div className='form-login'>
                    <div className='form-header'>
                      <h4>Chào mừng đến website của chúng tôi</h4>
                      <p>
                        Đăng nhập vào tài khoản để tiếp tục sử dụng dịch vụ của
                        chúng tôi.
                      </p>
                    </div>

                    <div className='form-body'>
                      <form>
                        <div className='d-flex flex-column flex-lg-row align-items-stretch'>
                          <div className='flex-md-grow-1 bg-primary-light'>
                            <div className='form-inner'>
                              {form}
                              <div className='d-flex flex-column flex-md-row mt-25 pl-5'>
                                <div className='flex-shrink-0'>
                                  <button
                                    className='btn btn-success btn-wide'
                                    onClick={this.handleClick}
                                    disabled={!this.state.formIsValid}
                                  >
                                    Đăng nhập
                                  </button>
                                </div>
                                <div className='ml-0 ml-md-15 mt-15 mt-md-0'>
                                  <div className='custom-control custom-checkbox'>
                                    <input
                                      type='checkbox'
                                      className='custom-control-input'
                                      id='loginFormTabInModal-rememberMe'
                                    />
                                    <label
                                      className='custom-control-label'
                                      for='loginFormTabInModal-rememberMe'
                                    >
                                      Nhớ tôi
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <a
                                href='tour-detail-02.html#loginFormTabInModal-forgot-pass'
                                className='tab-external-link block mt-25 font600'
                              >
                                Quên mật khẩu?
                              </a>
                            </div>
                          </div>
                          <div className='form-login-socials'>
                            <div className='login-socials-inner'>
                              <h5 className='mb-20'>
                                hoặc đăng nhập bằng tài khoản mạng xã hội
                              </h5>
                              <button className='btn btn-login-with btn-facebook btn-block'>
                                <i className='fab fa-facebook'></i> facebook
                              </button>

                              <GoogleLogin
                                clientId='75939233417-t7f3tfifirqoprmu2b270ul95hplptqs.apps.googleusercontent.com'
                                buttonText='Google'
                                className='btn btn-login-with btn-google btn-block'
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                              />

                              <button className='btn btn-login-with btn-twitter btn-block'>
                                <i className='fab fa-twitter'></i> Twitter
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      {errors}
                    </div>

                    <div className='form-footer'>
                      <p>
                        Bạn chưa có tài khoản?{' '}
                        <a
                          href='tour-detail-02.html#loginFormTabInModal-login'
                          className='tab-external-link font600'
                        >
                          Đăng ký
                        </a>
                      </p>
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

const mapStateToProps = (state) => {
  return {
    loadding: state.auth.loadding,
    error: state.auth.error,
    isAuthencated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthLognin: (email, password) =>
      dispatch(actionCreator.authSignin(email, password)),
    onAuthLogninGoogle: (tokenId) =>
      dispatch(actionCreator.authSigninGoogle(tokenId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
