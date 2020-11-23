import React from 'react';
import Review from './review/review';
export default (props) => {
  return (
    <div
      id='detail-content-sticky-nav-07'
      class='fullwidth-horizon-sticky-section'
    >
      <h4 class='heading-title'>
        <i class='far fa-comment-dots'></i> Đánh giá của khách hàng
      </h4>

      <ul class='review-list'>
        {Object.values(props.reviews).map((el, key) => (
          <Review key={key} review={el} />
        ))}
      </ul>
    </div>
  );
};
