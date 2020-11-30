import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class='main-wrapper scrollspy-container'>
      <div class='error-404-wrapper'>
        <div class='container'>
          <h1 class='text-primary'>404</h1>
          <h3>Xin lỗi, Trang này hiện không thể tìm thấy!</h3>
          <p class='lead'>
            Trang bạn đang tìm kiếm không tồn tại -{' '}
            <a href='error-404.html#'>báo cáo ?</a>
          </p>

          <div class='mb-40'></div>

          <h6>Bạn tìm kiếm những gì bạn đang tìm kiếm</h6>

          <div class='row justify-content-center gap-30'>
            <div class='col-12 col-sm-8 col-md-7 col-lg-4'>
              <form class='quick-form-box'>
                <div class='input-group'>
                  <input
                    type='email'
                    class='form-control'
                    placeholder='Email address'
                  />
                  <div class='input-group-append'>
                    <button class='btn btn-primary' type='button'>
                      <i class='fas fa-search'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class='mb-25'></div>

          <h3>Hoặc</h3>
          <p class='lead'>Những đường link hữu ích</p>

          <div class='row justify-content-center gap-10'>
            <div class='col-8 col-md-6 col-lg-5'>
              <div class='col-inner'>
                <div class='row justify-content-center gap-10'>
                  <div class='col-12 col-sm-4 col-md-6 col-lg-4'>
                    <div class='error-menu text-left'>
                      <i class='fas fa-arrow-right text-muted mr-10 font12'></i>{' '}
                      <a href='error-404.html#'>Trang chủ</a>
                    </div>
                  </div>
                  <div class='col-12 col-sm-4 col-md-6 col-lg-4'>
                    <div class='error-menu text-left'>
                      <i class='fas fa-arrow-right text-muted mr-10 font12'></i>{' '}
                      <a href='error-404.html#'>Điểm đến</a>
                    </div>
                  </div>
                  <div class='col-12 col-sm-4 col-md-6 col-lg-4'>
                    <div class='error-menu text-left'>
                      <i class='fas fa-arrow-right text-muted mr-10 font12'></i>{' '}
                      <a href='error-404.html#'>Về chúng tôi</a>
                    </div>
                  </div>
                  <div class='col-12 col-sm-4 col-md-6 col-lg-4'>
                    <div class='error-menu text-left'>
                      <i class='fas fa-arrow-right text-muted mr-10 font12'></i>{' '}
                      <a href='error-404.html#'>Blog</a>
                    </div>
                  </div>
                  <div class='col-12 col-sm-4 col-md-6 col-lg-4'>
                    <div class='error-menu text-left'>
                      <i class='fas fa-arrow-right text-muted mr-10 font12'></i>{' '}
                      <a href='error-404.html#'>Tour</a>
                    </div>
                  </div>
                  <div class='col-12 col-sm-4 col-md-6 col-lg-4'>
                    <div class='error-menu text-left'>
                      <i class='fas fa-arrow-right text-muted mr-10 font12'></i>{' '}
                      <a href='error-404.html#'>Profile</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
