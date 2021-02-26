import React, { useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';

import ToDateForView from '../../common/convertDateForView';
import BookingAside from './bookingAside/bookingAside';
import PageTitle from '../../components/layout/PageTitle/PageTile';
import Background from '../../img/02.jpg';
import './booking.css';

export default (props) => {
  const [discount, setDiscount] = useState(false);
  const [code, setCode] = useState('');
  const [click, setClick] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class='main-wrapper scrollspy-container'>
      <section class='page-wrapper page-detail pt-0'>
        <PageTitle src={Background} name='Booking' />

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
                    <p
                      style={{ color: '#ff5454' }}
                      className='font14'
                      onClick={() => {
                        setDiscount(!discount);
                        setClick(false);
                      }}
                    >
                      Sử dụng mã giảm giá
                    </p>
                  </div>
                  <Collapse isOpened={discount}>
                    <div
                      className='d-flex align-items-center flex-column py-3'
                      style={{ backgroundColor: 'rgba(255,25,68,0.3)' }}
                    >
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          props.checkPromotionCode(code);
                          setClick(true);
                        }}
                      >
                        <input
                          onChange={(e) => setCode(e.target.value)}
                          value={code}
                          required
                        />
                        <button
                          className='btn btn-primary  text-light ml-3'
                          type='submit'
                        >
                          Áp dụng
                        </button>
                      </form>
                      <div className='pt-1'>
                        {click ? (
                          props.checkCodeSuccess ? (
                            <p>Mã khuyến mãi hợp lệ</p>
                          ) : (
                            <p>Mã khuyến mãi không hợp lệ</p>
                          )
                        ) : null}
                      </div>
                    </div>
                  </Collapse>
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
                      Vui lòng điền đầy đủ thông tin, nếu đã có tài khoản, vui
                      lòng đăng nhập?{' '}
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
                        <a href='tour-payment.html#'>Điều khoản và Quy định</a>
                      </label>
                    </div>

                    <div class='row mt-20'>
                      <div class='col-sm-8 col-md-6'>
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

            <BookingAside tour={props.tour} bookingInfo={props.bookingInfo} />
          </div>
        </div>
      </section>
    </div>
  );
};
