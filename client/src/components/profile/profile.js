import React, { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import PageTitle from '../../components/layout/PageTitle/PageTile';
import Presonality from './personality/personality';
import Booking from './booking/booking';
import Background from '../../img/02.jpg';

export default (props) => {
  return (
    <div
      class='main-wrapper scrollspy-container'
      style={{ backgroundColor: '#f3f3f3' }}
    >
      <section class='page-wrapper page-detail'>
        <PageTitle src={Background} name='Trang thông tin cá nhân' />
        <div class='container pt-30' style={{ backgroundColor: '#fff' }}>
          <div class='row gap-20 gap-lg-40'>
            <div class='col-12 col-lg-3'>
              <aside class='sticky-kit sidebar-wrapper'>
                <div class='bashboard-nav-box'>
                  <div class='box-heading'>
                    <h3 class='h6 text-white text-uppercase'>
                      Bạn đã đăng nhập với tài khoản:
                    </h3>
                  </div>
                  <div class='box-content'>
                    <div class='dashboard-avatar mb-10'>
                      <div class='image'>
                        <img src={props.photo} alt='Image' />
                      </div>

                      <div class='content'>
                        <h6>{props.user.name}</h6>
                      </div>
                    </div>

                    <nav class='menu-vertical-01 mt-20'>
                      <ul>
                        <li>
                          <Link to='/profile'>Trang thông tin cá nhân</Link>
                        </li>
                        <li>
                          <Link to='/profile/booking'>Quản lý booking</Link>
                        </li>
                        <li>
                          <a href='dashboard.html#'>Danh sách Tour yêu thích</a>
                        </li>
                        <li>
                          <Link to='/logout'>Đăng xuất</Link>
                        </li>
                      </ul>
                    </nav>

                    <p class='font-sm mt-20'>
                      Lần đăng nhập cuối cùng của bạn:{' '}
                      <span class='text-primary font700'>4 giờ trước</span>
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            <div class='col-12 col-lg-9'>
              <Route
                path={`/profile`}
                exact
                component={() => (
                  <Presonality
                    profile={props.profile}
                    photo={props.photo}
                    user={props.user}
                    onUpdateProfile={props.onUpdateProfile}
                  />
                )}
              />
              <Route
                path={`/profile/booking`}
                exact
                component={() => (
                  <Booking
                    onFetchBookingFromUser={props.onFetchBookingFromUser}
                    bookingList={props.bookingList}
                    onUpdateBooking={props.onUpdateBooking}
                    updateBookingSuccess={props.updateBookingSuccess}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
