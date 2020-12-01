import React, { Component } from 'react';
import Background from '../../img/01.jpg';
import Slider from 'react-slick';
import Review from './review/review';
import ReactPaginate from 'react-paginate';

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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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
