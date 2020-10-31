import React from 'react';
import './index.css';
export default () => {
  return (
    <header
      id='header-waypoint-sticky'
      class='header-main header-mobile-menu with-absolute-navbar'
    >
      <div class='header-outer clearfix'>
        <div class='header-inner'>
          <div class='row shrink-auto-lg gap-0 align-items-center'>
            <div class='col-5 col-shrink'>
              <div class='col-inner'>
                <div class='main-logo'>
                  <a href='index.html'>
                    <img src='images/logo.png' alt='images' />
                  </a>
                </div>
              </div>
            </div>

            <div class='col-7 col-shrink order-last-lg'>
              <div class='col-inner'>
                <ul class='nav-mini-right'>
                  <li class='d-none d-sm-block'>
                    <a
                      href='tour-detail-02.html#loginFormTabInModal-register'
                      data-toggle='modal'
                      data-target='#loginFormTabInModal'
                      data-backdrop='static'
                      data-keyboard='false'
                    >
                      <span class='icon-font'>
                        <i class='icon-user-follow'></i>
                      </span>{' '}
                      Register
                    </a>
                  </li>
                  <li class='d-none d-sm-block'>
                    <a
                      href='tour-detail-02.html#loginFormTabInModal-login'
                      data-toggle='modal'
                      data-target='#loginFormTabInModal'
                      data-backdrop='static'
                      data-keyboard='false'
                    >
                      <span class='icon-font'>
                        <i class='icon-login'></i>
                      </span>{' '}
                      Login
                    </a>
                  </li>
                  <li class='d-block d-sm-none'>
                    <a
                      href='tour-detail-02.html#loginFormTabInModal-register'
                      data-toggle='modal'
                      data-target='#loginFormTabInModal'
                      data-backdrop='static'
                      data-keyboard='false'
                    >
                      Login / Register
                    </a>
                  </li>
                  <li>
                    <button
                      class='btn btn-toggle collapsed'
                      data-toggle='collapse'
                      data-target='#mobileMenu'
                    ></button>
                  </li>
                </ul>
              </div>
            </div>

            <div class='col-12 col-auto'>
              <div class='navbar-wrapper'>
                <div class='navbar navbar-expand-lg'>
                  <div id='mobileMenu' class='collapse navbar-collapse'>
                    <nav class='main-nav-menu main-menu-nav navbar-arrow'>
                      <ul class='main-nav'>
                        <li>
                          <a href='index.html'>Home</a>
                        </li>
                        <li>
                          <a href='http://crenoveative.com/envato/gijalan/result-grid.html'>
                            Tour Package
                          </a>
                          <ul>
                            <li>
                              <a href='tour-result-list.html'>Result - List</a>
                            </li>

                            <li>
                              <a href='tour-detail.html'>Detail 01</a>
                            </li>

                            <li>
                              <a href='tour-detail-empty-booking.html'>
                                Detail - empty booking
                              </a>
                            </li>
                            <li>
                              <a href='tour-payment.html'>Payment</a>
                            </li>
                            <li>
                              <a href='tour-conformation.html'>Conformation</a>
                            </li>

                            <li>
                              <a href='destinations-02.html'>Destinations 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Blog</a>
                          <ul>
                            <li>
                              <a href='blog-01.html'> Blog - Grid Full 01</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Pages</a>
                          <ul>
                            <li>
                              <a href='about-us.html'>About Us</a>
                            </li>
                            <li>
                              <a href='service.html'>Service</a>
                            </li>
                            <li>
                              <a href='service-single.html'>Service Single</a>
                            </li>
                            <li>
                              <a href='faq.html'>FAQ</a>
                            </li>
                            <li>
                              <a href='privacy-and-term.html'>
                                Privacy and Term
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='contact-us.html'>Contact us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
