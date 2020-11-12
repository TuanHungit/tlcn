import React from 'react';
import StartRating from '../../star/star';
export default (props) => {
  return (
    <figure class='tour-grid-item-01'>
      <a href={props.id}>
        <div class='image'>
          <img src='images/image-tour/01.jpg' alt='images' />
        </div>
        <figcaption class='content'>
          <h5>{props.name}</h5>
          <ul class='item-meta'>
            <li>
              <i class='elegent-icon-pin_alt text-warning'></i>{' '}
              {props.startLocation.address}
            </li>
            <li>
              <div class='rating-item rating-sm rating-inline clearfix'>
                <div class='rating-icons'>
                  <StartRating />
                </div>
                <p class='rating-text font600 text-muted font-12 letter-spacing-1'>
                  26 reviews
                </p>
              </div>
            </li>
          </ul>
          <ul class='item-meta mt-15'>
            <li>
              <span class='font700 h6'>{props.duration} day</span>
            </li>
            <li>
              Start: <span class='font600 h6 line-1 mv-0'> Rome</span> - End:{' '}
              <span class='font600 h6 line-1 mv-0'> Naoples</span>
            </li>
          </ul>
          <p class='mt-3'>
            Price from{' '}
            <span class='h6 line-1 text-primary font16'>${props.price}</span>{' '}
            <span class='text-muted mr-5'></span>
          </p>
        </figcaption>
      </a>
    </figure>
  );
};
