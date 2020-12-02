import React, { useState } from 'react';
import Star from '../../../../UI/star/star';
export default (props) => {
  const [star, setStar] = useState(null);
  const [content, setContent] = useState(null);
  const onChangeStar = (star) => {
    setStar(star);
  };
  const status = (star) => {
    switch (star) {
      case 1:
        return <p>Quá tệ</p>;
      case 2:
        return <p>Tệ</p>;

      case 3:
        return <p>Chấp nhận được</p>;
      case 4:
        return <p>Tốt</p>;
      case 5:
        return <p>Tuyệt vời</p>;
      default:
        return null;
    }
  };
  return (
    <div>
      <h4 class='heading-title'>
        <i class='fas fa-feather-alt'></i> <span>Viết đánh giá</span>
      </h4>

      <div className='row'>
        <div class='col-3'>
          <div class='form-group'>
            <p for='comment-message'>
              Bình chọn <span class='text-danger'>*</span>
              {'  '}
            </p>
          </div>
        </div>
        <div className='col-9'>
          <Star isHover={true} size={30} onChangeStar={onChangeStar} />
          {status(star)}
        </div>
      </div>
      <div class='row'>
        <div class='col-3'>
          <div class='form-group d-flex justify-content-start'>
            <p for='comment-message'>
              Nội dung <span class='text-danger'>*</span>
              {'  '}
            </p>
          </div>
        </div>
        <div className='col-9'>
          <textarea
            name='message'
            id='comment-message'
            class='form-control'
            rows='5'
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div class='row pt-10'>
        <div className='col-3'></div>
        <div class='col-9'>
          <button
            className='btn btn-primary text-light btn-wide'
            onClick={() =>
              props.onReviewTour(props.tourId, {
                review: content,
                rating: star,
              })
            }
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};
