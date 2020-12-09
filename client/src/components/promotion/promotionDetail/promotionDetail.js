import React from 'react';

import Slider from 'react-slick';
export default (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div class='main-wrapper scrollspy-container'>
      <section class='page-wrapper pb-0'>
        <div class='page-title bg-light mb-0'>
          <div class='container'>
            <div class='row gap-15 align-items-center'>
              <div class='col-12 col-md-7'>
                <nav aria-label='breadcrumb'>
                  <ol class='breadcrumb'>
                    <li class='breadcrumb-item'>
                      <a href='blog-05.html#'>
                        <i class='fas fa-home'></i>
                      </a>
                    </li>
                    <li class='breadcrumb-item active' aria-current='page'>
                      Tin tức
                    </li>
                    <li class='breadcrumb-item active' aria-current='page'>
                      Ưu đãi
                    </li>
                  </ol>
                </nav>

                <h4 class='mt-0 line-125'>Ưu đãi</h4>
              </div>
            </div>
          </div>
        </div>

        <div class='container'>
          <div className='row pt-50'>
            <div className='col'>
              <Slider {...settings}>
                <div>
                  <img
                    src='https://staticproxy.mytourcdn.com/0x0/resources/pictures/banners/advertising1607308307.jpg'
                    alt='Hình ảnh'
                  />
                </div>
                <div>
                  <img
                    src='https://staticproxy.mytourcdn.com/0x0/resources/pictures/banners/advertising1605865863.jpg'
                    alt='Hình ảnh'
                  />
                </div>
                <div>
                  <img
                    src='https://staticproxy.mytourcdn.com/0x0/resources/pictures/banners/advertising1607402873.jpg'
                    alt='Hình ảnh'
                  />
                </div>
                <div>
                  <img
                    src='https://staticproxy.mytourcdn.com/0x0/resources/pictures/banners/advertising1607401648.jpg'
                    alt='Hình ảnh'
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div class='content-wrapper pt-50 pb-0 pb-lg-50'>
            <h4>Tin ưu đãi</h4>
            <div className='row'>
              <div className='col'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.promotion.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
