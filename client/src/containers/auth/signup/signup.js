import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actionCreator from '../../../store/actions';

import { connect } from 'react-redux';
import Spinner from '../../../components/UI/Spinner/Spinner';
import alertify from 'alertifyjs';
import Input from '../../../components/UI/Input/Input';
import propTypes from 'prop-types';
class Signup extends Component {
  state = {
    controls: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Full Name',
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
          placeholder: 'Email Address',
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
      password1: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Confirm Password',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
    isSignUp: false,
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
    if (
      this.state.controls.password.value !== this.state.controls.password1.value
    ) {
      console.log('Password is not correct');
    } else {
      this.props.onAuthRegister(
        this.state.controls.name.value,
        this.state.controls.email.value,
        this.state.controls.password.value
      );
      //  actionCreator.authSignup({name, email, password });
    }
    // if (isAuthenticated) {
    //     return <Redirect to="/tour" />;
    //   }
    console.log(
      this.state.controls.name.value,
      this.state.controls.email.value,
      this.state.controls.password.value
    );
  };

  componentDidUpdate(nextProps, nextState) {
    if (this.props.isAuthencated !== nextProps.isAuthencated) {
      this.buttonElement.click();
    }
  }

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
          id='registerFormTabInModal'
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
                      className='active'
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
                      data-toggle='tab'
                      href='tour-detail-02.html#loginFormTabInModal-forgot-pass'
                    >
                      Forgot Password{' '}
                    </a>
                  </li>
                </ul>
              </nav>
              <div className='tab-content'>
                <div
                  role='tabpanel'
                  className='tab-pane active'
                  id='registerFormTabInModal-login'
                >
                  <div className='form-login'>
                    <div className='form-header'>
                      <h4>Welcome Back to SiteName</h4>
                      <p>Sign in to your account to continue using SiteName</p>
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
                                    Sign-up
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
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <a
                                href='tour-detail-02.html#loginFormTabInModal-forgot-pass'
                                className='tab-external-link block mt-25 font600'
                              >
                                Forgot password?
                              </a>
                            </div>
                          </div>
                          <div className='form-login-socials'>
                            <div className='login-socials-inner'>
                              <h5 className='mb-20'>
                                Or sign-up with your socials
                              </h5>
                              <button className='btn btn-login-with btn-facebook btn-block'>
                                <i className='fab fa-facebook'></i> facebook
                              </button>
                              <button className='btn btn-login-with btn-google btn-block'>
                                <i className='fab fa-google'></i> google
                              </button>
                              <button className='btn btn-login-with btn-twitter btn-block'>
                                <i className='fab fa-twitter'></i> google
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      {errors}
                    </div>

                    <div className='form-footer'>
                      <p>
                        Already a member?{' '}
                        <a
                          href='tour-detail-02.html#loginFormTabInModal-login'
                          className='tab-external-link font600'
                        >
                          Sign in
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

// const mapStateToProps = (state) => {
//   return {
//     loadding: state.auth.loadding,
//     error: state.auth.error,
//     isAuthencated: state.auth.token !== null,
//     authRedirectPath: state.auth.authRedirectPath,
//   };
// };
Signup.propTypes = {
  authSignup: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    loadding: state.auth.loadding,
    error: state.auth.error,
    isAuthencated: state.auth.token !== null,
    authRedirectPath: '/',
  };
};
// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthRegister: (name, email, password) =>
      dispatch(actionCreator.authSignup(name, email, password)),
  };
};
//export default connect(mapStateToProps, { authSignup })(Signup);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
