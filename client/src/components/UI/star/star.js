import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './star.css';
const StarRating = (props) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            {props.isHover ? (
              <FaStar
                size={props.size}
                className='star'
                color={ratingValue <= hover || rating ? '#ffc107' : '#e4e5e9'}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            ) : (
              <FaStar
                size={props.size}
                className='star'
                color={ratingValue <= props.average ? '#ffc107' : '#e4e5e9'}
              />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
