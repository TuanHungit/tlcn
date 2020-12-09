import React from 'react';
import Sticky from 'react-stickynode';
import ToMoneyForView from '../../../common/convertPriceForView';
import ToDateForView from '../../../common/convertDateForView';
export default (props) => {
  return (
    <div class='col-12 col-lg-5'>
      <Sticky top={80} innerZ={2} bottomBoundary={1650}>
        <aside class='sidebar-wrapper no-border'>
          <div class='booking-box'>
            <div class='box-heading'>
              <h3 class='h6 text-white text-uppercase'>Chi tiết đặt hàng</h3>
            </div>
            <div class='box-content'>
              <a
                href='tour-payment.html#'
                class='tour-small-grid-01 mb-20 clearfix'
              >
                <div class='image'>
                  <img src='/images/image-bg/04.jpg' alt='image' />
                </div>
                <div class='content'>
                  <h6>{props.tour.name}</h6>
                  <ul class='item-meta'>
                    <li>
                      <i class='elegent-icon-pin_alt text-warning'></i>{' '}
                      {props.tour.country}
                    </li>
                    <li>
                      <strong>
                        {props.tour.duration} ngày &amp;{' '}
                        {props.tour.duration - 1} ngày
                      </strong>
                    </li>
                  </ul>
                  <span class='price'>
                    Giá chỉ từ{' '}
                    <span class='h6 line-1 text-primary number'>
                      {ToMoneyForView(props.tour.price)}
                    </span>
                  </span>
                </div>
              </a>

              <span class='font600 text-muted line-125'>Bạn chọn ngày</span>
              <h4 class='line-125 choosen-date mt-3'>
                <i class='far fa-calendar-alt'></i>
                {ToDateForView(props.bookingInfo.startDate)}{' '}
                <small class='d-block'>
                  ({props.tour.duration} ngày){' '}
                  <a
                    type='button'
                    class='anchor font10 pl-40 d-block text-uppercase h6 text-primary float-right mt-5'
                    data-toggle='modal'
                    data-target='#BookingModal'
                  >
                    Thay đổi
                  </a>
                </small>
              </h4>

              <ul class='border-top mt-20 py-15'>
                <li class='clearfix'>
                  <span>Giá người lớn: </span>
                  <span
                    class='float-right text-dark text-primary  font16'
                    style={{ marginTop: '3px' }}
                  >
                    {ToMoneyForView(props.bookingInfo.priceAdults, ' đ')} x{' '}
                    {props.bookingInfo.numOfPersonAdults} người lớn{' '}
                  </span>
                </li>

                {props.bookingInfo.numOfPersonChildren > 0 ? (
                  <li class='clearfix'>
                    <span>Giá trẻ em: </span>
                    <span
                      class='float-right text-dark text-primary  font16'
                      style={{ marginTop: '3px' }}
                    >
                      {`${ToMoneyForView(
                        props.bookingInfo.priceChildren,
                        ' đ'
                      )}x ${props.bookingInfo.numOfPersonChildren} em bé`}
                    </span>
                  </li>
                ) : null}
                {props.bookingInfo.numOfPersonBaby > 0 ? (
                  <li class='clearfix'>
                    <span>Giá em bé: </span>
                    <span
                      class='float-right text-dark text-primary  font16'
                      style={{ marginTop: '3px' }}
                    >
                      {`${ToMoneyForView(props.bookingInfo.priceBaby, ' đ')}x ${
                        props.bookingInfo.numOfPersonBaby
                      } em bé`}
                    </span>
                  </li>
                ) : null}

                <li class='clearfix'>
                  <div class='border-top mt-1 py-15'>
                    <span>Thành tiền: </span>
                    <span
                      class='float-right text-dark text-primary font16'
                      style={{ marginTop: '3px' }}
                    >
                      {ToMoneyForView(props.bookingInfo.total, ' đ')}
                    </span>
                  </div>
                </li>
                {props.bookingInfo.discount ? (
                  <li class='clearfix'>
                    <div class='border-top py-15'>
                      <span>Giảm giá: </span>
                      <span
                        class='float-right text-dark'
                        style={{ marginTop: '3px' }}
                      >
                        {ToMoneyForView(props.bookingInfo.discount, ' đ')}
                      </span>
                    </div>
                  </li>
                ) : null}

                <li class='clearfix border-top font700'>
                  <div class='border-top mt-1'>
                    <span>Tổng cộng</span>
                    <span
                      class='float-right text-dark h6 text-primary font20'
                      style={{ marginTop: '3px' }}
                    >
                      {props.bookingInfo.discount
                        ? ToMoneyForView(props.bookingInfo.finalTotal, ' đ')
                        : ToMoneyForView(props.bookingInfo.total, ' đ')}
                    </span>
                  </div>
                </li>
              </ul>

              <p class='text-right font-sm'>100% đảm bảo hài lòng</p>
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
