import React, { Component } from 'react';
import Background from '../../../img/01.jpg';
import Slider from 'react-slick';
import Review from './review/review';

const sectionStyle = {
  backgroundImage: `url(${Background})`,
  // "url(" + { Background } + ")"
};
class Reviews extends Component {
  state = {
    data: [],
    offset: 0,
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoPlay: true,
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
      <div
        class='bg-white-gradient-top-bottom pt-0'
        style={{ marginTop: '-160px' }}
      >
        <div class='bg-gradient-top'></div>
        <div class='bg-gradient-bottom'></div>

        <div class='bg-image pv-100 overlay-relative' style={sectionStyle}>
          <div class='overlay-holder overlay-white opacity-8'></div>

          <div class='container'>
            <div class='testimonial-grid-slick-carousel testimonial-grid-wrapper'>
              <div class='testimonial-grid-arrow'>
                <ul>
                  <li class='testimonial-grid-prev'>
                    <button>
                      <span>previuos</span>
                    </button>
                  </li>
                  <li class='testimonial-grid-next'>
                    <button>
                      <span>next</span>
                    </button>
                  </li>
                </ul>
              </div>
              <Slider {...settings}>
                {Object.values(this.props.reviewList).map((el) => (
                  <Review review={el} key={el.id} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div class='overlay-relative overlay-gradient gradient-white set-height-01'>
          <div class='overlay-holder bottom'></div>
        </div>
      </div>
    );
  }
}
export default Reviews;
