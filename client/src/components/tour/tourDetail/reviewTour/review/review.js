import React from 'react';
import Star from '../../../../UI/star/star';
import ToDateView from '../../../../../common/convertDateForView';
export default (props) => {
  return (
    <li>
      <div class='review-man d-flex'>
        <div class='image mr-15'>
          <img
            src='/images/image-man/01.jpg'
            alt='image'
            class='image-circle'
          />
        </div>

        <div class='line-125'>
          <h6 class='line-125 mb-3'>{props.review.user.name}</h6>
          <div class='rating-item rating-sm'>
            <div class='rating-icons'>
              <Star size={20} isHover={false} average={props.review.rating} />
            </div>
          </div>
          <span class='text-muted font-sm font600'>
            {ToDateView(props.review.createdAt)}
          </span>
        </div>
      </div>

      <div class='review-content'>
        <p>{props.review.review}</p>
      </div>
    </li>
  );
};
