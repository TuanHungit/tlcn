import React, { useState, useRef } from 'react';
import Review from './review/review';
import Pagination from 'react-js-pagination';
import ReviewForm from './reviewForm/reviewForm';
export default (props) => {
  const [activePage, setActivePage] = useState(1);

  const inputEl = useRef(null);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);

    props.onFetchReviewRourList(props.tourId, pageNumber, 3, [
      'review',
      'user',
      'createdAt',
      'rating',
    ]);
    // inputEl.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id='detail-content-sticky-nav-07'
      class='fullwidth-horizon-sticky-section'
    >
      <h4 class='heading-title'>
        <i class='far fa-comment-dots'></i> Đánh giá của khách hàng
      </h4>

      <ul class='review-list' ref={inputEl}>
        {!props.reviewLoading ? (
          Object.values(props.reviews).map((el, key) => (
            <Review key={key} review={el} />
          ))
        ) : (
          <div className='text-center'>
            <div class='spinner-border' role='status'>
              <span class='sr-only'>Loading...</span>
            </div>
          </div>
        )}
        <li>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={(pageNumber) => handlePageChange(pageNumber)}
          />
        </li>
        <li>
          <ReviewForm onReviewTour={props.onReviewTour} />
        </li>
      </ul>
    </div>
  );
};
