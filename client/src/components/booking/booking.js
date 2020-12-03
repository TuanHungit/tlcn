import React, { useEffect } from 'react';
import BookingAside from './bookingAside/bookingAside';
import Payment from './payment/payment';
import ToDateForView from '../../common/convertDateForView';
import './booking.css';
export default (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='body-inner'>
      <div class='main-wrapper scrollspy-container'>
        <section
          class='page-wrapper page-detail'
          style={{ backgroundColor: '#f3f3f3' }}
        >
          <div
            class='page-title border-bottom mb-5 border-bottom-0 pt-0'
            style={{ marginTop: '-30px' }}
          >
            <div class='container'>
              <div class='row gap-15 align-items-center'>
                <div class='col-12 col-md-7'>
                  <nav aria-label='breadcrumb'>
                    <ol class='breadcrumb'>
                      <li class='breadcrumb-item'>
                        <a href='tour-detail-02.html#'>
                          <i class='fas fa-home'></i>
                        </a>
                      </li>
                      <li class='breadcrumb-item'>
                        <a href='tour-detail-02.html#'>Tour</a>
                      </li>

                      <li class='breadcrumb-item active' aria-current='page'>
                        tour-hungary-slovakia-9-ngay-8-djem
                      </li>
                      <li class='breadcrumb-item active' aria-current='page'>
                        Đặt Tour
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div class='container'>
            <div class='row gap-20 gap-lg-40'>
              <div class='col-12 col-lg-7' style={{ backgroundColor: '#fff' }}>
                <div class='content-wrapper pt-15'>
                  <div class='form-draft-payment'>
                    <h4 class='heading-title' className='font20'>
                      <i
                        class='fas fa-info-circle'
                        style={{ color: '#ff5454' }}
                      ></i>
                      <span style={{ color: '#ff5454' }}>
                        {' '}
                        Thông tin sản phẩm, dịch vụ
                      </span>
                    </h4>
                    <div className='row'>
                      <div className='col-6'>
                        <p className='font14'>
                          <strong>{props.tour.name}</strong>{' '}
                        </p>
                        <label className='font14'>
                          Ngày khởi hành:{' '}
                          {ToDateForView(props.bookingInfo.startDate)}
                        </label>
                      </div>
                      <div className='col-2'>
                        <p className='font14'>Số người lớn</p>
                        <label className='font14'>
                          {props.bookingInfo.numOfPersonAdults}
                        </label>
                      </div>
                      <div className='col-2'>
                        <p className='font14'>Số trẻ em</p>
                        <label className='font14'>
                          {' '}
                          {props.bookingInfo.numOfPersonChildren}
                        </label>
                      </div>
                      <div className='col-2'>
                        <p className='font14'>Số em bé</p>
                        <label className='font14'>
                          {props.bookingInfo.numOfPersonBaby}
                        </label>
                      </div>
                    </div>
                    <h4 class='heading-title'></h4>
                    <div
                      className='d-flex justify-content-end'
                      style={{ marginTop: '-15px' }}
                    >
                      <p style={{ color: '#ff5454' }} className='font14'>
                        Sử dụng mã giảm giá
                      </p>
                    </div>
                  </div>
                  <div class='mb-20'></div>
                  <div class='form-draft-payment'>
                    <form>
                      <h4 class='heading-title' className='font20'>
                        <i class='fas fa-user' style={{ color: '#ff5454' }}></i>
                        <span style={{ color: '#ff5454' }}>
                          {' '}
                          Thông tin người đặt dịch vụ
                        </span>
                      </h4>
                      <p class='post-heading' className='font14'>
                        Nếu đã có tài khoản, vui lòng đăng nhập?{' '}
                        <a
                          href='tour-payment.html#loginFormTabInModal-login'
                          data-toggle='modal'
                          data-target='#loginFormTabInModal'
                          data-backdrop='static'
                          data-keyboard='false'
                        >
                          Đăng nhập
                        </a>
                      </p>

                      <div class='mb-20'></div>

                      <div class='row cols-1 cols-md-2 gap-15 mb-15'>
                        {props.form}
                      </div>

                      <div class='mb-60'></div>
                      {props.payment}

                      <hr class='mv-40' />

                      <div class='custom-control custom-checkbox'>
                        <input
                          id='formDraftPayment02-terms'
                          name='formDraftPayment02-terms'
                          type='checkbox'
                          class='custom-control-input'
                          value='paymentsCreditCard'
                          required
                        />
                        <label
                          class='custom-control-label'
                          for='formDraftPayment02-terms'
                        >
                          Tôi đã đọc và đồng ý với{' '}
                          <a href='tour-payment.html#'>
                            Điều khoản và Quy định
                          </a>
                        </label>
                      </div>

                      <div class='row mt-20'>
                        <div class='col-sm-8 col-md-6'>
                          <p class='line-145 mt-20 font-italic font-sm'>
                            <span class='font600'>** Xem kỹ thông tin </span>
                            đặt, thông tin người đặt (tên, sđt, email),... Sau
                            khi hoàn tất việc đặt dịch vụ, du khách sẽ nhận được
                            xác nhận qua email đã đăng ký.
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <BookingAside tour={props.tour} bookingInfo={props.bookingInfo} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
