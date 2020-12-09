import React from 'react';
import { Link } from 'react-router-dom';

import ToDateForView from '../../../common/convertDateForView';

export default (props) => {
  return (
    <div className='col'>
      <div class='card' style={{ width: '20rem' }}>
        <img
          class='card-img-top'
          src='https://staticproxy.mytourcdn.com/480x360,q90/resources/pictures/news/ems1606710467.jpg'
          alt='Card image cap'
        />
        <div class='card-body'>
          <h5 class='card-title'>{props.promotion.title}</h5>
          <p class='card-text'>
            <i class='far fa-calendar-alt'></i>{' '}
            {ToDateForView(props.promotion.startDate)}
          </p>
          <Link to={`/promotions/${props.promotion.slug}`} class='float-right'>
            Xem thêm &raquo;
          </Link>
        </div>
      </div>
    </div>
  );
};
