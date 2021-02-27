import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../UI/avatar/avatar';
const navigationItems = ({ photo, isAuthencated, user }) => (
  <div>
    {!isAuthencated ? (
      <ul className='nav-mini-right'>
        {/* <li className='d-none d-sm-block'>
          <a
            href='tour-detail-02.html#loginFormTabInModal-register'
            data-toggle='modal'
            data-target='#loginFormTabInModal'
            data-backdrop='static'
            data-keyboard='false'
          >
            Register
          </a>
        </li> */}
        {/* <li><a href="/register"> Register</a></li> */}
        <li className='d-none d-sm-block'>
          <a
            href='tour-detail-02.html#loginFormTabInModal-login'
            data-toggle='modal'
            data-target='#loginFormTabInModal'
            data-backdrop='static'
            data-keyboard='false'
          >
            Đăng nhập
          </a>
        </li>
        <li className='d-none d-sm-block'>
          <a
            href='tour-detail-02.html#loginFormTabInModal-survey'
            data-toggle='modal'
            data-target='#surveyFormTabInModal'
            data-backdrop='static'
            data-keyboard='false'
          >
            Khảo sát
          </a>
        </li>
        <li className='d-block d-sm-block'>
          <a
            href='tour-detail-02.html#loginFormTabInModal-register'
            data-toggle='modal'
            data-target='#registerFormTabInModal'
            data-backdrop='static'
            data-keyboard='false'
          >
            Đăng ký
          </a>
        </li>
        <li>
          <button
            className='btn btn-toggle collapsed'
            data-toggle='collapse'
            data-target='#mobileMenu'
          ></button>
        </li>
      </ul>
    ) : (
      <ul className='nav-mini-right'>
        <li className='d-none d-sm-block'>
          <ul>
            <Link to='/profile' className='d-flex pt-1'>
              {photo ? <Avatar image={photo} /> : null}
              {user ? user.toUpperCase() : null}
            </Link>
          </ul>
        </li>
        <li className='d-none d-sm-block pt-1'>
          <a href='/logout'>Đăng xuất</a>
        </li>
        <li className='d-block d-sm-none'>
          <a
            href='tour-detail-02.html#loginFormTabInModal-register'
            data-toggle='modal'
            data-target='#loginFormTabInModal'
            data-backdrop='static'
            data-keyboard='false'
          >
            {user} / Đăng xuất
          </a>
        </li>
        <li>
          <button
            className='btn btn-toggle collapsed'
            data-toggle='collapse'
            data-target='#mobileMenu'
          ></button>
        </li>
      </ul>
    )}
  </div>
);

export default navigationItems;
