import React from 'react';
import { NavLink } from 'react-router-dom';
const navigationItems = (props) => (
  <div>
    {!props.isAuthencated ? (
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
            <a
              href='tour-detail-02.html#loginFormTabInModal-login'
              data-toggle='modal'
              data-target='#loginFormTabInModal'
              data-backdrop='static'
              data-keyboard='false'
            >
              <i class='fas fa-user-circle'></i> {props.user.toUpperCase()}
            </a>
          </ul>
        </li>
        <li className='d-none d-sm-block'>
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
            {props.user} / Đăng xuất
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
