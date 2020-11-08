import React from 'react';

const navigationItems = (props) => (
  <div>
    {!props.isAuthencated ? (
      <ul className='nav-mini-right'>
        <li className='d-none d-sm-block'>
          <a
            href='tour-detail-02.html#loginFormTabInModal-register'
            data-toggle='modal'
            data-target='#loginFormTabInModal'
            data-backdrop='static'
            data-keyboard='false'
          >
            Register
          </a>
        </li>
        <li className='d-none d-sm-block'>
          <a
            href='tour-detail-02.html#loginFormTabInModal-login'
            data-toggle='modal'
            data-target='#loginFormTabInModal'
            data-backdrop='static'
            data-keyboard='false'
          >
            Login
          </a>
        </li>
        <li className='d-block d-sm-none'>
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
            className='btn btn-toggle collapsed'
            data-toggle='collapse'
            data-target='#mobileMenu'
          ></button>
        </li>
      </ul>
    ) : (
      <ul className='nav-mini-right'>
        <li className='d-none d-sm-block'>
          <a
            href='tour-detail-02.html#loginFormTabInModal-login'
            data-toggle='modal'
            data-target='#loginFormTabInModal'
            data-backdrop='static'
            data-keyboard='false'
          >
            {props.user}
          </a>
        </li>
        <li className='d-none d-sm-block'>
          <a href='/logout'>Logout</a>
        </li>
        <li className='d-block d-sm-none'>
          <a
            href='tour-detail-02.html#loginFormTabInModal-register'
            data-toggle='modal'
            data-target='#loginFormTabInModal'
            data-backdrop='static'
            data-keyboard='false'
          >
            {props.user} / Logout
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
