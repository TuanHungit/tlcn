import React, { useEffect } from 'react';
import './index.css';

import Navigation from './Navigation/Navigation';
import { Link, NavLink } from 'react-router-dom';
export default ({ photo, isAuthencated, user }) => {
  return (
    <header
      id='header-waypoint-sticky'
      className='header-main header-mobile-menu with-absolute-navbar'
    >
      <div className='header-outer clearfix'>
        <div className='header-inner'>
          <div className='row shrink-auto-lg gap-0 align-items-center'>
            <div className='col-5 col-shrink'>
              <div className='col-inner'>
                <div className='main-logo'>
                  <a href='index.html'>
                    <img src='/images/logo.png' alt='images' />
                  </a>
                </div>
              </div>
            </div>

            <div className='col-7 col-shrink order-last-lg'>
              <div className='col-inner'>
                <Navigation
                  isAuthencated={isAuthencated}
                  user={user}
                  photo={photo}
                />
              </div>
            </div>

            <div className='col-12 col-auto'>
              <div className='navbar-wrapper'>
                <div className='navbar navbar-expand-lg'>
                  <div id='mobileMenu' className='collapse navbar-collapse'>
                    <nav className='main-nav-menu main-menu-nav navbar-arrow'>
                      <ul className='main-nav'>
                        <li>
                          <NavLink to='/'>Trang chủ</NavLink>
                        </li>
                        <li>
                          <NavLink to='/tour'>Tour trong nước</NavLink>
                        </li>
                        <li>
                          <NavLink to='/blogs'>Tour nước ngoài</NavLink>
                        </li>
                        <li>
                          <NavLink to='/blogs'>Blogs du lịch</NavLink>
                        </li>
                        <li>
                          <NavLink to='/promotions'>Dịch vụ du lịch</NavLink>
                        </li>
                        <li>
                          <a href='contact-us.html'>Liên hệ</a>
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
