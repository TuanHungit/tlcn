import React, { useState, useRef } from 'react';
import Review from './review/review';
import Pagination from 'react-js-pagination';
import ReviewForm from './reviewForm/reviewForm';
import Star from '../../../UI/star/star';
import ToDateForView from '../../../../common/convertDateForView';
export default (props) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);

    props.onFetchReviewRourList(props.tourId, pageNumber, 3, [
      'review',
      'user',
      'createdAt',
      'rating',
    ]);
  };

  return (
    <div
      id='detail-content-sticky-nav-07'
      class='fullwidth-horizon-sticky-section'
    >
      {Object.keys(props.userReview).length !== 0 ? (
        <div>
          <h4 class='heading-title'>
            <span>Đánh giá của bạn</span>
          </h4>

          <div class='blog-author bg-light'>
            <div class='author-label'>
              <img
                src='/images/image-man/01.jpg'
                alt='author image'
                class='img-circle'
              />
            </div>
            <div class='author-details'>
              <h5 class='heading'>
                <a href='#'>{props.userReview.user.name}</a>
                <Star
                  size={30}
                  isHover={false}
                  average={props.ratingsAverage}
                />
                <span>{ToDateForView(props.userReview.createdAt)}</span>
              </h5>
              <p>{props.userReview.review}. </p>
            </div>
          </div>
          <div class='mb-50'></div>
        </div>
      ) : null}
      <h4 class='heading-title'>
        <i class='far fa-comment-dots'></i> Đánh giá của khách hàng
      </h4>

      <ul class='review-list'>
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
        {Object.keys(props.userReview).length === 0 ? (
          <li>
            <ReviewForm
              onReviewTour={props.onReviewTour}
              tourId={props.tourId}
            />
          </li>
        ) : null}
      </ul>
    </div>
  );
};
