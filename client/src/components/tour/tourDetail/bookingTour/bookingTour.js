import React from 'react';
import Sticky from 'react-stickynode';

export default () => {
  return (
    <div class='col-12 col-lg-4'>
      <Sticky top={80} innerZ={2} enableTransform={true}>
        <aside class='sidebar-wrapper no-border mt-lg-0'>
          <div class='booking-box'>
            <div class='box-heading'>
              <h3 class='h6 text-white text-uppercase'>Thông tin Tour</h3>
            </div>

            <div class='box-content'>
              <span class='font600 text-muted line-125'>Bạn chọn ngày</span>
              <h4 class='line-125 choosen-date mt-3'>
                <i class='far fa-calendar-alt'></i> 7 - 9 March, 2019{' '}
                <small class='d-block'>
                  (3 days){' '}
                  <a
                    href='tour-detail-02.html#detail-content-sticky-nav-05'
                    class='anchor font10 pl-40 d-block text-uppercase h6 text-primary float-right mt-5'
                  >
                    Change
                  </a>
                </small>
              </h4>

              <div class='form-group form-spin-group border-top mt-15 pt-10'>
                <label class='h6 font-sm'>Chọn số người?</label>
                <input
                  type='text'
                  class='form-control touch-spin-03 form-control-readonly'
                  value='2'
                  readonly
                />
              </div>

              <ul class='border-top mt-20 pt-15'>
                <li class='clearfix'>
                  $39.000.000 x 2 người
                  <span class='float-right'>$78.000.000</span>
                </li>

                <li class='clearfix border-top font700'>
                  <div class='border-top mt-1'>
                    <span>Tổng cộng</span>
                    <span class='float-right text-dark'>$78.000.000</span>
                  </div>
                </li>
              </ul>

              <p class='text-right font-sm'>100% đảm bảo hài lòng</p>

              <a href='tour-detail-02.html#' class='btn btn-primary btn-block'>
                ĐẶT TOUR
              </a>

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
