import React, { useState } from 'react';
import './index.css';
import alertify from 'alertifyjs';
import axios from '../../../common/axios-order';
export default () => {
  const [email, setEmail] = useState('');
  const onSubmit = () => {
    axios
      .post(`/email-promotions`, { email: email })
      .then((response) => {
        setEmail('');
        alertify.message('Đăng ký email thành công!');
      })
      .catch((err) => {
        alertify.warning(err.response.data.errors[0].message);
      });
  };
  return (
    <footer class='footer-wrapper dark scrollspy-footer fixed'>
      <div class='footer-top'>
        <div class='container'>
          <div class='row shrink-auto-md align-items-lg-center gap-10'>
            <div class='col-12 col-auto'>
              <div class='col-inner'>
                <ul class='footer-contact-list d-flex justify-content-between'>
                  <li>
                    <span class='icon-font text-primary inline-block-middle mr-5 font16'>
                      <i class='fa fa-phone'></i>
                    </span>{' '}
                    <span class='font700 text-black'>1 2258 2554 00</span>{' '}
                    <span class='text-muted'>Mon-Fri | 8.30am-6:30pm</span>
                  </li>
                  <li>
                    <span class='icon-font text-primary inline-block-middle mr-5 font16'>
                      <i class='fa fa-envelope'></i>
                    </span>{' '}
                    <span class='font700 text-black'>support@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr class='opacity-7' />
        </div>
      </div>

      <div class='main-footer'>
        <div class='container'>
          <div class='row gap-50'>
            <div class='col-12 col-lg-5'>
              <div class='footer-logo'>
                <img src='/images/logo.png' alt='images' />
              </div>

              <p class='mt-20'>
                Sứ mệnh của TH-Travel là giúp cho người Việt Nam đi du lịch dễ
                dàng hơn. Các thông tin cẩm nang hướng dẫn du lịch, kinh nghiệm
                du lịch, blog du lịch là kênh cung cấp thông tin hữu ích cho rất
                nhiều khách du lịch Việt Nam.
              </p>

              <a
                href='tour-detail-02.html#'
                class='text-capitalize font14 h6 line-1 mb-0 font500 mt-30'
              >
                xem thêm{' '}
                <i class='elegent-icon-arrow_right font18 inline-block-middle'></i>
              </a>
            </div>

            <div class='col-12 col-lg-7'>
              <div class='col-inner'>
                <div class='row shrink-auto-sm gap-30'>
                  <div class='col-6 col-shrink'>
                    <div class='col-inner'>
                      <h5 class='footer-title'>Sản phẩm / Dịch vụ</h5>
                      <ul class='footer-menu-list set-width'>
                        <li>
                          <a>Tour du lịch trong nước</a>
                        </li>
                        <li>
                          <a>Tour du lịch nước ngoài</a>
                        </li>
                        <li>
                          <a>Đặt vé online</a>
                        </li>
                        <li>
                          <a href='tour-detail-02.html#'>Blog - Trao đổi</a>
                        </li>
                        <li>
                          <a>Tour du lịch hấp dẫn</a>
                        </li>
                        <li>
                          <a>Bảo hiểm du lịch</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class='col-6 col-shrink'>
                    <div class='col-inner'>
                      <h5 class='footer-title'>Customer Service</h5>
                      <ul class='footer-menu-list set-width'>
                        <li>
                          <a href='tour-detail-02.html#'>Payment</a>
                        </li>
                        <li>
                          <a href='tour-detail-02.html#'>Feedback</a>
                        </li>
                        <li>
                          <a href='tour-detail-02.html#'>Contact us</a>
                        </li>
                        <li>
                          <a href='tour-detail-02.html#'>Our Service</a>
                        </li>
                        <li>
                          <a href='tour-detail-02.html#'>FAQ</a>
                        </li>
                        <li>
                          <a href='tour-detail-02.html#'>Site map</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class='col-12 col-auto'>
                    <div class='col-inner'>
                      <h5 class='footer-title'>
                        Đăng ký nhận khuyến mãi qua email
                      </h5>
                      <p class='font12'>
                        Đăng ký nhận tin qua email để không bỏ lỡ bất kỳ khuyến
                        mãi nào từ chúng tôi.
                      </p>
                      <form class='footer-newsletter mt-20' onSubmit={onSubmit}>
                        <div class='input-group'>
                          <input
                            type='email'
                            class='form-control'
                            placeholder='Địa chỉ Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div class='input-group-append'>
                            <button
                              class='btn btn-primary'
                              type='button'
                              onClick={onSubmit}
                            >
                              <i class='far fa-envelope'></i>
                            </button>
                          </div>
                        </div>
                      </form>
                      <div class='footer-socials mt-20'>
                        <a href='tour-detail-02.html#'>
                          <i class='fab fa-facebook-square'></i>
                        </a>
                        <a href='tour-detail-02.html#'>
                          <i class='fab fa-twitter-square'></i>
                        </a>
                        <a href='tour-detail-02.html#'>
                          <i class='fab fa-google-plus-square'></i>
                        </a>
                        <a href='tour-detail-02.html#'>
                          <i class='fab fa-pinterest-square'></i>
                        </a>
                        <a href='tour-detail-02.html#'>
                          <i class='fab fa-flickr'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='bottom-footer'>
        <div class='container'>
          <div class='row shrink-auto-md gap-10 gap-40-lg'>
            <div class='col-auto'>
              <div class='col-inner'>
                <ul class='footer-menu-list-02'>
                  <li>
                    <a href='tour-detail-02.html#'>Cookies</a>
                  </li>
                  <li>
                    <a href='tour-detail-02.html#'>Policies</a>
                  </li>
                  <li>
                    <a href='tour-detail-02.html#'>Terms</a>
                  </li>
                  <li>
                    <a href='tour-detail-02.html#'>Blogs</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class='col-shrink'>
              <div class='col-inner'>
                <p class='footer-copy-right'>
                  {' '}
                  &#169; 2020 – 2021{' '}
                  <span class='text-primary'>MyCompany Ltd.,</span> All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
