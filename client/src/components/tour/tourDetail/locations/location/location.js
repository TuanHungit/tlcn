import React from 'react';

export default (props) => {
  return (
    <li>
      <div class='itinerary-day'>
        <span>Ngày {props.location.day}</span>
      </div>

      <h6>Điểm đến: {props.location.title}</h6>

      {props.location.description.split('<br/>').map((el, key) => (
        <p key={key}>{el}</p>
      ))}

      <ul class='itinerary-meta list-inline-block text-primary'>
        <li>
          <i class='far fa-clock'></i> Thời gian chuyến đi: 8am - 4.30pm
        </li>
      </ul>
    </li>
  );
};
