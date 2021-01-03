import React from 'react';
import './intro.css';
export default () => {
  return (
    <section class='section-stories'>
      <div class='bg-video'>
        <video loop autoPlay muted class='bg-video__content'>
          <source src='images/video.webm' type='video/mp4' />
        </video>
      </div>
      <div class='container'>
        <div class='row'>
          <div class='col-md-7 col-md-push-5'>
            <div class='booking-cta'>
              <h1>Book Tour ngay!</h1>

              <p className='text-light'>
                TH-Travel là website đặt dịch vụ du lịch trực tuyến số Việt Nam,
                website cung cấp các dịch vụ du lịch như: tour du lịch, đặt vé
                tham quan trong nước và nước ngoài,...Sứ mệnh của TH-Travel là
                giúp cho người Việt Nam đi du lịch dễ dàng hơn. Các thông tin
                cẩm nang hướng dẫn du lịch, kinh nghiệm du lịch, blog du lịch là
                kênh cung cấp thông tin hữu ích cho rất nhiều khách du lịch Việt
                Nam.
              </p>
            </div>
          </div>
          <div class='col-md-4 col-md-pull-7'>
            <div class='booking-form'>
              <form>
                <div class='form-group'>
                  <span class='form-label'>Họ tên</span>
                  <input
                    class='form-control'
                    type='text'
                    placeholder='Nhập họ tên của bạn'
                  />
                </div>
                <div class='form-group'>
                  <span class='form-label'>Địa chỉ email</span>
                  <input
                    class='form-control'
                    type='text'
                    placeholder='Nhập email của bạn'
                  />
                </div>
                <div class='form-btn'>
                  <button class='submit-btn'>Bước tiếp theo</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
