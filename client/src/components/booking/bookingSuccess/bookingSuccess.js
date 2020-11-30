import React from 'react';
import ToPriceForView from '../../../common/convertPriceForView';
import ToDateForView from '../../../common/convertDateForView';
export default (props) => {
  console.log(props.location.state);
  return (
    <section
      class='page-wrapper page-detail'
      style={{ marginTop: '-30px', backgroundColor: '#f3f3f3' }}
    >
      <div class='page-title border-bottom mb-0 border-bottom-0'>
        <div class='container'>
          <div class='row gap-15 align-items-center'>
            <div class='col-12 col-md-7'>
              <nav aria-label='breadcrumb'>
                <ol class='breadcrumb'>
                  <li class='breadcrumb-item'>
                    <a href='tour-conformation.html#'>
                      <i class='fas fa-home'></i>
                    </a>
                  </li>
                  <li class='breadcrumb-item'>
                    <a href='tour-conformation.html#'>Trang chủ</a>
                  </li>
                  <li class='breadcrumb-item'>
                    <a href='tour-conformation.html#'>Tour</a>
                  </li>
                  <li class='breadcrumb-item'>
                    <a href='tour-conformation.html#'>
                      {props.location.state.slug}
                    </a>
                  </li>
                  <li class='breadcrumb-item'>
                    <a href='tour-conformation.html#'>Booking</a>
                  </li>
                  <li class='breadcrumb-item active' aria-current='page'>
                    Xác nhận
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class='container'>
        <div class='row justify-content-center'>
          <div
            class='col-12 col-md-11 col-lg-10 col-xl-9'
            style={{ backgroundColor: '#fff' }}
          >
            <div class='content-wrapper'>
              <div class='success-icon-text'>
                <span class='icon-font  text-success'>
                  <i class='elegent-icon-check_alt2'></i>
                </span>
                <h4 class='text-uppercase letter-spacing-1'>Chúc mừng!</h4>
                <p>
                  Tour {props.location.state.name} (
                  {props.location.state.country},{props.location.state.duration}{' '}
                  ngày & {props.location.state.duration - 1}
                  đêm ) bạn đã đặt đã được xác nhận và hoàn thành.
                </p>
              </div>

              <div class='mb-50'></div>

              <div class='text-center'>
                <p class='lead mb-10'>Xin chào, Mr. Chaiyapatt Putsathit</p>
                <h3 class='text-primary line-125 mv-10'>
                  Đặt chỗ của bạn đã được xác nhận và hoàn tất
                </h3>
                <p class='lead mt-10'>Mã Booking của bạn: #DSH544177</p>
                <p>
                  Giờ đây, bạn có thể dễ dàng quản lý đặt Tour của mình bằng
                  chính bạn.
                </p>
                <a
                  href='tour-conformation.html#'
                  class='btn btn-dark btn-lg btn-wide'
                >
                  Quản lý Booking
                </a>
              </div>

              <div class='mb-50'></div>

              <div class='booking-box'>
                <div class='box-heading'>
                  <h3 class='h6 text-white text-uppercase'>
                    Chi tiết Booking của bạn
                  </h3>
                </div>

                <div class='box-content'>
                  <figure class='tour-long-item-01'>
                    <a href='tour-conformation.html#'>
                      <div class='d-flex flex-column flex-sm-row align-items-xl-center'>
                        <div>
                          <div class='image'>
                            <img
                              src='/images/image-regular/01.jpg'
                              alt='images'
                            />
                          </div>
                        </div>

                        <div>
                          <figcaption class='content'>
                            <h5>{props.location.state.name}</h5>
                            <ul class='item-meta'>
                              <li>
                                <i class='elegent-icon-pin_alt text-warning'></i>{' '}
                                {props.location.state.country}{' '}
                              </li>
                              <li>
                                <div class='rating-item rating-sm rating-inline clearfix'>
                                  <div class='rating-icons'>
                                    <input
                                      type='hidden'
                                      class='rating'
                                      data-filled='rating-icon ri-star rating-rated'
                                      data-empty='rating-icon ri-star-empty'
                                      data-fractions='2'
                                      data-readonly
                                      value='4.5'
                                    />
                                  </div>
                                  <p class='rating-text font600 text-muted font-12 letter-spacing-1'>
                                    {props.location.state.ratingsQuantity} đánh
                                    giá
                                  </p>
                                </div>
                              </li>
                            </ul>
                            <p>{props.location.state.summary} </p>
                            <ul class='item-meta mt-15'>
                              <li>
                                <span class='font700 h6'>
                                  {props.location.state.duration} ngày &amp;{' '}
                                  {props.location.state.duration - 1} đêm
                                </span>
                              </li>
                              <li>
                                Nơi bắt đầu:{' '}
                                <span class='font600 h6 line-1 mv-0'>
                                  {' '}
                                  {
                                    props.location.state.startLocation.address
                                  }{' '}
                                </span>
                              </li>
                            </ul>
                            <p class='mt-3 mb-0'>
                              Giá từ{' '}
                              <span class='h6 line-1 text-primary font16'>
                                {ToPriceForView(props.location.state.price)}
                              </span>{' '}
                              <span class='text-muted mr-5'></span>
                            </p>
                          </figcaption>
                        </div>
                      </div>
                    </a>
                  </figure>

                  <ul class='list-li-border-top mt-30'>
                    <li class='clearfix'>
                      <span class='font600'>Booking ID:</span>
                      <span class='d-block float-sm-right'>#DSH544177</span>
                    </li>
                    <li class='clearfix'>
                      <span class='font600'>Ngày khởi hành:</span>
                      <span class='d-block float-sm-right'>
                        {ToDateForView(props.location.state.availableDate[0])}{' '}
                        {props.location.state.duration} ngày
                      </span>
                    </li>
                    <li class='clearfix'>
                      <span class='font600'>Bắt đầu tại:</span>
                      <span class='d-block float-sm-right'>
                        {ToDateForView(props.location.state.availableDate[0])}{' '}
                        từ {props.location.state.startLocation.address}
                      </span>
                    </li>
                    <li class='clearfix'>
                      <span class='font600'>Kết thúc tại:</span>
                      <span class='d-block float-sm-right'>
                        {props.location.state.country}
                      </span>
                    </li>

                    <li class='clearfix'>
                      <span class='font600'>Số người</span>
                      <span class='d-block float-sm-right'>2 người</span>
                    </li>
                  </ul>

                  <div class='mb-40'></div>

                  <h6 style={{ color: '#ff1944' }}>
                    Đặt phòng của bạn đã được thanh toán đầy đủ
                  </h6>

                  <ul class='list-li-border-top'>
                    <li class='clearfix'>
                      <span class='font600'>Phí Tour:</span>
                      <span class='d-block float-sm-right'>$251.98</span>
                    </li>
                    {/* <li class='clearfix'>
                      <span class='font600'>Booking fee + tax:</span>
                      <span class='d-block float-sm-right'>$9.50</span>
                    </li>
                    <li class='clearfix'>
                      <span class='font600'>Book now & Save:</span>
                      <span class='d-block float-sm-right'>-$15</span>
                    </li>  */}
                    <li class='clearfix'>
                      <span class='font600'>Phí khác</span>
                      <span class='d-block float-sm-right'>Free</span>
                    </li>
                    <li class='clearfix text-uppercase border-double'>
                      <span class='font700'>Tổng cộng</span>
                      <span class='font700 d-block float-sm-right'>
                        $248.58
                      </span>
                    </li>
                  </ul>

                  <p class='text-right font-sm'>100% Đảm bảo hài lòng</p>

                  <div class='mb-20'></div>

                  <h6>Lưu ý</h6>
                  <p>
                    Sau khi hoàn tất việc đặt dịch vụ, du khách sẽ nhận được xác
                    nhận qua email đã đăng ký. Nhân viên chăm sóc khách hàng của
                    Trippy.vn sẽ liên hệ với du khách để xác nhận lại tình trạng
                    dịch vụ đã đặt và hướng dẫn thanh toán. Mọi thắc mắc du
                    khách có thể liên hệ hotline: (028) 3838 6928 hoặc
                    0911883399 để được hỗ trợ.
                  </p>
                </div>

                <div class='box-bottom bg-light'>
                  <h6 class='font-sm'>
                    Chúng tôi là nhà phát hành Tour tốt nhất
                  </h6>
                  <p class='font-sm'>
                    Tùy chỉnh chương trình du lịch của chúng tôi, vui lòng liên
                    hệ qua <span class='text-primary'>+66857887444</span>.
                  </p>
                </div>
              </div>

              <div class='mb-50'></div>

              <div class='row gap-20 cols-1 cols-lg-3'>
                <div class='col'>
                  <a href='tour-conformation.html#' class='cta-small-item'>
                    <span class='icon-font'>
                      <i class='elegent-icon-printer'></i>
                    </span>
                    <h5>In</h5>
                    <span class='text-muted'>In chi tiết hóa đơn</span>
                  </a>
                </div>

                <div class='col'>
                  <a href='tour-conformation.html#' class='cta-small-item'>
                    <span class='icon-font'>
                      <i class='elegent-icon-cloud-download_alt'></i>
                    </span>
                    <h5>Tải xuống</h5>
                    <span class='text-muted'>Tải xuống PDF doc</span>
                  </a>
                </div>

                <div class='col'>
                  <a href='tour-conformation.html#' class='cta-small-item'>
                    <span class='icon-font'>
                      <i class='elegent-icon-volume-high_alt'></i>
                    </span>
                    <h5>Yêu cầu</h5>
                    <span class='text-muted'>Yêu cầu đặc biệt</span>
                  </a>
                </div>
              </div>

              <div class='mb-50'></div>

              <div class='text-center'>
                <h4 class='text-capitalize'>GiJandan</h4>
                <p>
                  324 Yarang Road, T.Chabangtigo
                  <br />
                  Muanng Pattani 9400
                  <br />
                  myemail@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
