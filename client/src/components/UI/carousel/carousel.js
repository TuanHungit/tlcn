import React, { Component } from 'react';

import Slider from 'react-slick';
import LazyLoadImage from '../../lazyLoadImage/lazyLoadImage';
import './carousel.css';

class CustomSlide extends Component {
  render() {
    const { index, className, ...props } = this.props;
    return (
      <div {...props} className={className}>
        {props.children}
      </div>
    );
  }
}
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    const settings = {
      className: 'slider-1',
      infinite: true,
      speed: 1500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
    };
    return (
      <>
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {Object.values(this.props.images).map((el, key) => (
            <CustomSlide key={key} index={key + 1} className='custom-slide0'>
              <LazyLoadImage src={`http://${el}`} />
            </CustomSlide>
          ))}
        </Slider>

        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={4}
          speed={1000}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {Object.values(this.props.images).map((el, key) => (
            <CustomSlide key={key} index={key + 1} className='custom-slide'>
              <LazyLoadImage src={`http://${el}`} />
            </CustomSlide>
          ))}
        </Slider>
      </>
    );
  }
}
