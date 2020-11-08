import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actionCreator from '../../../store/actions';

import { connect } from 'react-redux';
import Spinner from '../../../components/UI/Spinner/Spinner';
import alertify from 'alertifyjs';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      setShow: false,
      email: ' ',
      password: ' ',
    };
  }
  handleClick = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.password);
    this.props.onAuthLognin(this.state.email, this.state.password);
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isAuthencated !== nextProps.isAuthencated) {
      this.buttonElement.click();
      alertify.success('Login susscess!');
    }
  }

  render() {
    const status = this.props.loadding ? <Spinner /> : null;
    const errors = this.props.error ? <p>{this.props.error}</p> : null;
    return (
      <div>
        {this.props.isAuthencated ? <Redirect to='/' /> : null}
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
              <nav className='d-none'>
                <ul className='nav external-link-navs clearfix'>
                  <li>
                    <a
                      className='active'
                      data-toggle='tab'
                      href='tour-detail-02.html#loginFormTabInModal-login'
                    >
                      Sign-in
                    </a>
                  </li>
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
                  id='loginFormTabInModal-login'
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
                              <div className='form-group'>
                                <label>Email adress:</label>
                                <input
                                  type='text'
                                  name='email'
                                  onChange={(event) =>
                                    this.setState({ email: event.target.value })
                                  }
                                  className='form-control'
                                />
                              </div>
                              <div className='form-group'>
                                <label>Password</label>
                                <input
                                  type='password'
                                  name='password'
                                  onChange={(event) =>
                                    this.setState({
                                      password: event.target.value,
                                    })
                                  }
                                  className='form-control'
                                />
                              </div>
                              <div className='d-flex flex-column flex-md-row mt-25'>
                                <div className='flex-shrink-0'>
                                  <a
                                    className='btn btn-primary'
                                    onClick={this.handleClick}
                                  >
                                    Sign-in
                                  </a>
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
        {status}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
