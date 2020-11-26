import React, { useEffect } from 'react';
import Booking from './bookingAside/bookingAside';
import Payment from './payment/payment';
import './booking.css';
export default (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class='main-wrapper scrollspy-container'>
      <section class='page-wrapper page-detail'>
        <div class='page-title border-bottom  mb-0 border-bottom-0'>
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

        <div class='container pt-30'>
          <div class='row gap-20 gap-lg-40'>
            <div class='col-12 col-lg-7'>
              <div class='content-wrapper'>
                <div class='form-draft-payment'>
                  <h4 class='heading-title'>
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
                      <h6>Tour Séc - Áo - Hungary - Slovakia 9 ngày 8 đêm</h6>
                    </div>
                    <div className='col-3'>
                      <label>Số người: 3</label>
                    </div>
                    <div className='col-3'>
                      <label>Ngày khởi hành: 26/11/2020</label>
                    </div>
                  </div>
                  <h4 class='heading-title'></h4>
                  <div
                    className='d-flex justify-content-end'
                    style={{ marginTop: '-15px' }}
                  >
                    <p style={{ color: '#ff5454' }}>Sử dụng mã giảm giá</p>
                  </div>
                </div>
                <div class='mb-20'></div>
                <div class='form-draft-payment'>
                  <form>
                    <h4 class='heading-title'>
                      <i class='fas fa-user' style={{ color: '#ff5454' }}></i>
                      <span style={{ color: '#ff5454' }}>
                        {' '}
                        Thông tin người đặt dịch vụ
                      </span>
                    </h4>
                    <p class='post-heading'>
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

                    <div class='row gap-15 mb-15'>
                      <div class='w-100 d-block d-md-none'></div>

                      <div class='col-6 col-md-5'>
                        <div class='form-group'>
                          <label>Họ</label>
                          <input
                            type='text'
                            class='form-control'
                            placeholder='Họ'
                          />
                        </div>
                      </div>

                      <div class='col-6 col-md-5'>
                        <div class='form-group'>
                          <label>Tên</label>
                          <input
                            type='text'
                            class='form-control'
                            placeholder='Tên'
                          />
                        </div>
                      </div>
                      <div class='col-4 col-sm-3 col-md-2'>
                        <div class='form-group'>
                          <label>Tuổi</label>
                          <input
                            type='text'
                            class='form-control'
                            placeholder='Tuổi'
                          />
                        </div>
                      </div>

                      <div class='col-6 col-sm-6 col-md-7'>
                        <div class='form-group'>
                          <label>Email</label>
                          <input
                            type='email'
                            class='form-control'
                            placeholder='Địa chỉ Email'
                          />
                        </div>
                      </div>

                      <div class='col-12 col-sm-6 col-md-5'>
                        <div class='form-group'>
                          <label>Số điện thoại</label>
                          <input
                            type='text'
                            class='form-control'
                            placeholder='Số điện thoại'
                          />
                        </div>
                      </div>
                    </div>

                    <div class='mb-60'></div>

                    <Payment />

                    <hr class='mv-40' />

                    <div class='custom-control custom-checkbox'>
                      <input
                        id='formDraftPayment02-terms'
                        name='formDraftPayment02-terms'
                        type='checkbox'
                        class='custom-control-input'
                        value='paymentsCreditCard'
                      />
                      <label
                        class='custom-control-label'
                        for='formDraftPayment02-terms'
                      >
                        Tôi đã đọc và đồng ý với{' '}
                        <a href='tour-payment.html#'>Điều khoản và Quy định</a>
                      </label>
                    </div>

                    <div class='row mt-20'>
                      <div class='col-sm-8 col-md-6'>
                        <button class='btn btn-primary'>ĐẶT NGAY</button>

                        <p class='line-145 mt-20 font-italic font-sm'>
                          <span class='font600'>** Xem kỹ thông tin </span>
                          đặt, thông tin người đặt (tên, sđt, email),... Sau khi
                          hoàn tất việc đặt dịch vụ, du khách sẽ nhận được xác
                          nhận qua email đã đăng ký.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <Booking />
          </div>
        </div>
      </section>
    </div>
  );
};
