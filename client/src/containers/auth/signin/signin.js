import React from 'react';

export default () => (
  <div
    class='modal fade modal-with-tabs form-login-modal'
    id='loginFormTabInModal'
    aria-labelledby='modalWIthTabsLabel'
    tabindex='0'
    role='dialog'
    aria-hidden='true'
  >
    <div class='modal-dialog' role='document'>
      <div class='modal-content shadow-lg'>
        <nav class='d-none'>
          <ul class='nav external-link-navs clearfix'>
            <li>
              <a
                class='active'
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

        <div class='tab-content'>
          <div
            role='tabpanel'
            class='tab-pane active'
            id='loginFormTabInModal-login'
          >
            <div class='form-login'>
              <div class='form-header'>
                <h4>Welcome Back to SiteName</h4>
                <p>Sign in to your account to continue using SiteName</p>
              </div>

              <div class='form-body'>
                <form method='post' action='tour-detail-02.html#'>
                  <div class='d-flex flex-column flex-lg-row align-items-stretch'>
                    <div class='flex-md-grow-1 bg-primary-light'>
                      <div class='form-inner'>
                        <div class='form-group'>
                          <label>Email adress/username</label>
                          <input type='text' class='form-control' />
                        </div>
                        <div class='form-group'>
                          <label>Password</label>
                          <input type='password' class='form-control' />
                        </div>
                        <div class='d-flex flex-column flex-md-row mt-25'>
                          <div class='flex-shrink-0'>
                            <a
                              href='tour-detail-02.html#'
                              class='btn btn-primary btn-wide'
                            >
                              Sign-in
                            </a>
                          </div>
                          <div class='ml-0 ml-md-15 mt-15 mt-md-0'>
                            <div class='custom-control custom-checkbox'>
                              <input
                                type='checkbox'
                                class='custom-control-input'
                                id='loginFormTabInModal-rememberMe'
                              />
                              <label
                                class='custom-control-label'
                                for='loginFormTabInModal-rememberMe'
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>
                        <a
                          href='tour-detail-02.html#loginFormTabInModal-forgot-pass'
                          class='tab-external-link block mt-25 font600'
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <div class='form-login-socials'>
                      <div class='login-socials-inner'>
                        <h5 class='mb-20'>Or sign-up with your socials</h5>
                        <button class='btn btn-login-with btn-facebook btn-block'>
                          <i class='fab fa-facebook'></i> facebook
                        </button>
                        <button class='btn btn-login-with btn-google btn-block'>
                          <i class='fab fa-google'></i> google
                        </button>
                        <button class='btn btn-login-with btn-twitter btn-block'>
                          <i class='fab fa-twitter'></i> google
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class='form-footer'>
                <p>
                  Not a member yet?{' '}
                  <a
                    href='tour-detail-02.html#loginFormTabInModal-register'
                    class='tab-external-link font600'
                  >
                    Sign up
                  </a>{' '}
                  for free
                </p>
              </div>
            </div>
          </div>

          <div
            role='tabpanel'
            class='tab-pane fade in'
            id='loginFormTabInModal-register'
          >
            <div class='form-login'>
              <div class='form-header'>
                <h4>Join SiteName for Free</h4>
                <p>
                  Access thousands of online classes in design, business, and
                  more!
                </p>
              </div>

              <div class='form-body'>
                <form method='post' action='tour-detail-02.html#'>
                  <div class='d-flex flex-column flex-lg-row align-items-stretch'>
                    <div class='flex-grow-1 bg-primary-light'>
                      <div class='form-inner'>
                        <div class='form-group'>
                          <label>Full name</label>
                          <input type='text' class='form-control' />
                        </div>
                        <div class='form-group'>
                          <label>Email adress</label>
                          <input type='text' class='form-control' />
                        </div>
                        <div class='row cols-2 gap-10'>
                          <div class='col'>
                            <div class='form-group'>
                              <label>Password</label>
                              <input type='password' class='form-control' />
                            </div>
                          </div>
                          <div class='col'>
                            <div class='form-group'>
                              <label>Confirm password</label>
                              <input type='password' class='form-control' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class='form-login-socials'>
                      <div class='login-socials-inner'>
                        <h5 class='mb-20'>Or sign-in with your socials</h5>
                        <button class='btn btn-login-with btn-facebook btn-block'>
                          <i class='fab fa-facebook'></i> facebook
                        </button>
                        <button class='btn btn-login-with btn-google btn-block'>
                          <i class='fab fa-google'></i> google
                        </button>
                        <button class='btn btn-login-with btn-twitter btn-block'>
                          <i class='fab fa-twitter'></i> google
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class='d-flex flex-column flex-md-row mt-30 mt-lg-10'>
                    <div class='flex-shrink-0'>
                      <a
                        href='tour-detail-02.html#'
                        class='btn btn-primary btn-wide mt-5'
                      >
                        Sign-up
                      </a>
                    </div>
                    <div class='pt-1 ml-0 ml-md-15 mt-15 mt-md-0'>
                      <div class='custom-control custom-checkbox'>
                        <input
                          type='checkbox'
                          class='custom-control-input'
                          id='loginFormTabInModal-acceptTerm'
                        />
                        <label
                          class='custom-control-label line-145'
                          for='loginFormTabInModal-acceptTerm'
                        >
                          By clicking this, you are agree to to our{' '}
                          <a href='tour-detail-02.html#'>terms of use</a> and{' '}
                          <a href='tour-detail-02.html#'>privacy policy</a>{' '}
                          including the use of cookies
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class='form-footer'>
                <p>
                  Already a member?{' '}
                  <a
                    href='tour-detail-02.html#loginFormTabInModal-login'
                    class='tab-external-link font600'
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            role='tabpanel'
            class='tab-pane fade in'
            id='loginFormTabInModal-forgot-pass'
          >
            <div class='form-login'>
              <div class='form-header'>
                <h4>Lost your password?</h4>
                <p>Please provide your detail.</p>
              </div>

              <div class='form-body'>
                <form method='post' action='tour-detail-02.html#'>
                  <p class='line-145'>
                    We'll send password reset instructions to the email address
                    associated with your account.
                  </p>
                  <div class='row'>
                    <div class='col-12 col-md-10 col-lg-8'>
                      <div class='form-group'>
                        <input
                          type='password'
                          class='form-control'
                          placeholder='password'
                        />
                      </div>
                    </div>
                  </div>
                  <button class='btn btn-primary mt-5'>
                    Retreive password
                  </button>
                </form>
              </div>

              <div class='form-footer'>
                <p>
                  Back to{' '}
                  <a
                    href='tour-detail-02.html#loginFormTabInModal-login'
                    class='tab-external-link font600'
                  >
                    Sign in
                  </a>{' '}
                  or{' '}
                  <a
                    href='tour-detail-02.html#loginFormTabInModal-register'
                    class='tab-external-link font600'
                  >
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class='text-center pb-20'>
          <button
            type='button'
            class='close'
            data-dismiss='modal'
            aria-labelledby='Close'
          >
            <span aria-hidden='true'>
              <i class='far fa-times-circle'></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);
