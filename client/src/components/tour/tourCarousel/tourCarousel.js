import React from 'react';
import Slider from 'react-slick';
import TourCard from '../tourCard/tourCard';
import Background from '../../../img/01.jpg';

const sectionStyle = {
  backgroundImage: `url(${Background})`,
};
export default ({ tourList }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoPlay: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoPlay: true,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoPlay: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div class='bg-white-gradient-top-bottom pt-0'>
      <div class='bg-gradient-top'></div>
      <div class='bg-gradient-bottom'></div>
      <div class='bg-image pv-100 overlay-relative' style={sectionStyle}>
        <div class='overlay-holder overlay-white opacity-4'></div>

        {/* cols-1 cols-sm-2 cols-lg-3 gap-20 mb-30 */}
        <div className='container'>
          <div className=' d-flex justify-content-center'>
            <div class='section-title'>
              <h2>
                <span>
                  <i class='fas fa-certificate'></i>
                  <span>Tour</span> tết
                </span>
              </h2>
            </div>
          </div>
          <Slider {...settings}>
            {Object.values(tourList)
              .filter((el) => el.label)
              .map((el) => (
                <TourCard key={el.id} tour={el} />
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
