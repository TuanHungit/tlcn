import React, { Component } from 'react';
import Background from '../../../img/01.jpg';
import Slider from 'react-slick';

import './search.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'absolute',
        width: '85px',
        height: '85px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: '0',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'absolute',
        left: '0',
        width: '85px',
        height: '85px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '10',
      }}
      onClick={onClick}
    />
  );
}
class Search extends Component {
  render() {
    const styles = {
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'top center',
    };
    const settings = {
      infinite: true,
      speed: 2000,
      autoplay: true,
      vertical: true,
      fade: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      verticalSwiping: true,
      slidesToShow: 1,
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
      <div className='hero-banner hero-banner-01 overlay-light opacity-2 overlay-relative overlay-gradient gradient-white alt-option-03'>
        <div className='overlay-holder bottom'></div>
        <div className='hero-inner'>
          <div className='container'>
            <h1>
              Du lịch{' '}
              <span className='font200'>
                mọi nơi,{' '}
                <span className='block'>
                  {' '}
                  đầy <span className='font700'>say mê.</span>
                </span>
              </span>
            </h1>
            <p className='font-lg spacing-1'>
              Du lịch Châu Âu, Nhật Bản, Hàn Quốc và hơn thế nữa!
            </p>
            <div className='search-form-main'>
              <form>
                <div className='from-inner'>
                  <div className='row shrink-auto-sm gap-1'>
                    <div className='col-12 col-auto'>
                      <div className='col-inner'>
                        <div className='row cols-1 cols-sm-3 gap-1'>
                          <div className='col'>
                            <div className='col-inner'>
                              <div className='form-group'>
                                <label>Tour</label>
                                <select
                                  className='form-control form-control-sm'
                                  placeholder='Select one'
                                  tabindex='2'
                                  style={{ height: '22px' }}
                                >
                                  <option>Tất cả</option>

                                  <option>Tiền Giang</option>
                                  <option>City tour</option>
                                  <option>Honeymoon</option>
                                  <option>Cultural</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='col-inner'>
                              <div className='form-group'>
                                <label>Điểm đến</label>
                                <select
                                  className=' form-control form-control-sm'
                                  placeholder='Select two'
                                  tabindex='2'
                                  style={{ height: '22px' }}
                                >
                                  {Object.values(
                                    this.props.destinationList
                                  ).map((el) => (
                                    <option key={el.id}>{el.name}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className='col'>
                            <div className='col-inner'>
                              <div className='form-group'>
                                <label>Thời gian</label>

                                <input
                                  type='text'
                                  className=' form-control form-control-sm form-readonly-control air-datepicker'
                                  placeholder='Chọn thời gian'
                                  data-min-view='months'
                                  data-view='months'
                                  data-date-format='MM yyyy'
                                  data-language='en'
                                  data-auto-close='true'
                                  readonly
                                  style={{ height: '22px' }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-12 col-shrink'>
                      <div className='col-inner'>
                        <a
                          type='submit'
                          href='/search'
                          className='btn btn-primary btn-block '
                          style={{ height: '75px' }}
                        >
                          <i class='fas fa-search'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
