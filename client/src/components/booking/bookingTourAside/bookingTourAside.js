import React, { useState, useEffect } from 'react';
import Sticky from 'react-stickynode';
import { Link } from 'react-router-dom';
import ToDateView from '../../../common/convertDateForView';
import ToMoneyForView from '../../../common/convertPriceForView';
import { useScrollData } from 'scroll-data-hook';
export default (props) => {
  const { position } = useScrollData({});

  return (
    <div class='col-12 col-lg-4'>
      <Sticky top={80} innerZ={2} bottomBoundary={12000}>
        <aside class='sidebar-wrapper no-border mt-lg-0'>
          <div class='booking-box'>
            <div class='box-heading'>
              <h3 class='h6 text-white text-uppercase'>Thông tin Tour</h3>
            </div>

            <div class='box-content' style={{ marginTop: '-35px' }}>
              <span class='font600 text-muted line-125'>Bạn chọn ngày</span>
              <h5 class='line-125 choosen-date mt-3'>
                <i class='far fa-calendar-alt'></i>
                {ToDateView(props.date)}{' '}
                <small class='d-block'>
                  ({props.duration} ngày){' '}
                  <a
                    type='button'
                    class='anchor font10 pl-40 d-block text-uppercase h6 text-primary float-right mt-5'
                    data-toggle='modal'
                    data-target='#BookingModal'
                  >
                    Thay đổi
                  </a>
                </small>
              </h5>
              <div class='form-group form-spin-group border-top mt-15 pt-10'>
                <div className='row'>
                  <div className='col-6'>Giá người lớn:</div>
                  <div className='col-6'>
                    <span class='h6 line-1 text-primary font16'>
                      {ToMoneyForView(props.priceAdults, ' đ')}
                    </span>{' '}
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>Giá trẻ em:</div>
                  <div className='col-6'>
                    <span class='h6 line-1 text-primary font16'>
                      {ToMoneyForView(props.priceChildren, ' đ')}
                    </span>{' '}
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>Giá em bé:</div>
                  <div className='col-6'>
                    <span class='h6 line-1 text-primary font16'>
                      {ToMoneyForView(props.priceBaby, ' đ')}
                    </span>{' '}
                  </div>
                </div>
              </div>

              <div class='form-group form-spin-group border-top mt-15 pt-10'>
                <div className='row'>
                  <div className='col-8'>
                    <p>Số lượng người lớn:</p>
                  </div>
                  <div className='col-4'>
                    <input
                      type='number'
                      min='1'
                      step='1'
                      class='form-control touch-spin-03 form-control-readonly border-0 h6 text-primary font16'
                      value={props.numOfPerson[0]}
                      onChange={props.changePersonAdultsHandler}
                      style={{ marginTop: '-5px' }}
                    />
                  </div>
                </div>
                <div className='row' style={{ marginTop: '-10px' }}>
                  <div className='col-8'>
                    <p>Số lượng trẻ em:</p>
                  </div>
                  <div className='col-4'>
                    <input
                      type='number'
                      min='0'
                      step='1'
                      class='form-control touch-spin-03 form-control-readonly border-0 h6 text-primary font16'
                      value={props.numOfPerson[1]}
                      onChange={props.changePersonChildrenHandler}
                      style={{ marginTop: '-5px' }}
                    />
                  </div>
                </div>
                <div
                  className='row'
                  style={{ marginTop: '-10px', marginBottom: '-30px' }}
                >
                  <div className='col-8'>
                    <p>Số lượng em bé:</p>
                  </div>
                  <div className='col-4'>
                    <input
                      type='number'
                      min='0'
                      step='1'
                      class='form-control touch-spin-03 form-control-readonly border-0 h6 text-primary font16'
                      value={props.numOfPerson[2]}
                      onChange={props.changePersonBabyHandler}
                      style={{ marginTop: '-5px' }}
                    />
                  </div>
                </div>
              </div>

              <ul class='border-top mt-20 pt-15'>
                <li class='clearfix'>
                  {ToMoneyForView(props.total, ' đ')} x {props.numOfPerson[0]}{' '}
                  người lớn{' '}
                  {props.numOfPerson[1] > 0
                    ? `x ${props.numOfPerson[1]} trẻ em`
                    : null}{' '}
                  {props.numOfPerson[2] > 0
                    ? `x ${props.numOfPerson[2]} em bé`
                    : null}
                </li>

                <li class='clearfix border-top font700'>
                  <div class='border-top mt-1'>
                    <span>Tổng cộng</span>
                    <span
                      class='float-right text-dark h6 text-primary font16'
                      style={{ marginTop: '3px' }}
                    >
                      {ToMoneyForView(props.total, ' đ')}
                    </span>
                  </div>
                </li>
              </ul>

              <p class='text-right font-sm'>100% đảm bảo hài lòng</p>

              <Link
                to={`/tour/${props.slug}/booking`}
                class='btn btn-primary btn-block'
              >
                ĐẶT TOUR
              </Link>

              {/* <p class='line-115 mt-20'>
                By clicking the above button you agree to our{' '}
                <a href='tour-detail-02.html#'>Terms of Service</a> and have
                read and understood our{' '}
                <a href='tour-detail-02.html#'>Privacy Policy</a>
              </p> */}
            </div>

            <div class='box-bottom bg-light'>
              <h6 class='font-sm'>
                Chúng tôi là nhà điều hành tour du lịch tốt nhất
              </h6>
              <p class='font-sm'>
                Nếu bạn muốn tùy chỉnh chương trình du lịch của chúng tôi, gọi
                trực tiếp <span class='text-primary'>+66857887444</span>.
              </p>
            </div>
          </div>
        </aside>
      </Sticky>
    </div>
  );
};
