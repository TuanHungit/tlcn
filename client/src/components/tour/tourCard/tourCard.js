import React from 'react';
import { NavLink } from 'react-router-dom';
import StarRating from '../../UI/star/star';
import ToMoneyForView from '../../../common/convertPriceForView';
import LazyLoadImage from '../../lazyLoadImage/lazyLoadImage';

import './tourCard.css';
export default ({ lazyLoad = true, ...props }) => {
  return (
    <div class='col '>
      <figure class='container tour-grid-item-01 '>
        <NavLink to={`/tour/${props.tour.slug}`}>
          <div class='image'>
            {lazyLoad ? (
              <LazyLoadImage
                src={`http://${props.tour.images[0]}`}
                alt='images'
                class='figure-img img-fluid rounded'
              />
            ) : (
              <img
                src={`http://${props.tour.images[0]}`}
                alt='images'
                class='figure-img img-fluid rounded'
              />
            )}

            {props.tour.label ? (
              <div class='text-block'>{props.tour.label}</div>
            ) : null}
          </div>
          <figcaption class='content'>
            <h5>{props.tour.name}</h5>
            <ul class='item-meta'>
              <li>
                <i class='elegent-icon-pin_alt text-warning'></i>{' '}
                {props.tour.country}
              </li>
              <li>
                <div class='rating-item rating-sm rating-inline clearfix'>
                  <div class='rating-icons'>
                    <StarRating
                      size={20}
                      isHover={false}
                      average={props.tour.ratingsAverage}
                    />
                  </div>
                  <p class='rating-text font600 text-muted font-10 letter-spacing-1'>
                    {props.tour.ratingsQuantity} đánh giá
                  </p>
                </div>
              </li>
            </ul>
            <ul class='item-meta'>
              <li>
                <span class='font700 h6'>
                  {props.tour.duration} ngày &amp; {props.tour.duration - 1} đêm
                </span>
              </li>
              <li>
                Bắt đầu:{' '}
                <span class='font600 h6 line-1 mv-0'>
                  {props.tour.startLocation.address}
                </span>
              </li>
            </ul>
            <p class='mt-3'>
              Giá từ{' '}
              <span class='h6 line-1 text-primary font16'>
                {ToMoneyForView(props.tour.priceAdults, ' đ')}
              </span>{' '}
              <span class='text-muted mr-5'></span>
            </p>
          </figcaption>
        </NavLink>
      </figure>
    </div>
  );
};
