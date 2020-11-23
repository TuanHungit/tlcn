import React from 'react';
import Carousel from '../../../carousel/carousel';
import Star from '../../../star/star';
import Calendar from '../calendar/calender';
export default (props) => {
  return (
    <div>
      <div id='detail-content-sticky-nav-01' class='detail-header mb-30'>
        <h3>{props.content.name}</h3>

        <div class='d-flex flex-column flex-sm-row align-items-sm-center mb-20'>
          <div class='mr-15 font-lg'>
            Quốc Gia, Thành Phố:{' '}
            <a href='tour-detail-02.html#'>
              <i class='elegent-icon-pin_alt text-warning'></i>
              {props.content.country}
            </a>
          </div>
          <div>
            <div class='rating-item rating-inline'>
              <div class='rating-icons'>
                <Star
                  size={20}
                  isHover={false}
                  average={props.content.ratingsAverage}
                />
              </div>
              <p class='rating-text font600 text-muted font-12 letter-spacing-1'>
                <span class='text-dark mr-3'>
                  {props.content.ratingsAverage}/5
                </span>{' '}
                {props.content.ratingsQuantity} đánh giá
              </p>
            </div>
          </div>
        </div>
        <Carousel />

        <ul class='list-inline-block highlight-list mt-30'>
          <li>
            <span class='icon-font d-block'>
              <i class='linea-icon-basic-chronometer'></i>
            </span>
            <strong>
              {props.content.duration} ngày &amp;
              <br />
              {props.content.duration - 1} đêm
            </strong>
          </li>
          <li>
            <span class='icon-font d-block'>
              <i class='linea-icon-basic-flag1'></i>
            </span>
            Khởi hành:
            <br />
            <strong>{props.content.startLocation.address}</strong>
          </li>
          <li>
            <span class='icon-font d-block'>
              <i class='linea-icon-basic-flag2'></i>
            </span>
            Điểm đếm:
            <br />
            <strong>{props.content.country}</strong>
          </li>
          <li>
            <span class='icon-font d-block'>
              <i class='linea-icon-ecommerce-dollar'></i>
            </span>
            Chỉ từ
            <br />
            <strong>{props.content.price}</strong> / người
          </li>
        </ul>

        <div class='mb-30'></div>

        {props.content.summary.split('<br/>').map((el, key) => (
          <p key={key}>{el}</p>
        ))}
        <div class='mb-30'></div>
        <Calendar />
        <h5 class='mt-30'>
          <i class='far fa-star'></i> Những điểm nổi bật làm Tour trở nên thú vị
        </h5>

        <ul class='list-icon-data-attr font-ionicons'>
          {props.content.description.split('<br/>').map((el, key) => (
            <li key={key} className='inline'>
              <p>
                <span class='icon-font'>
                  <i class='elegent-icon-check_alt2 text-primary'></i>
                  {'    '}
                </span>
                {el}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
