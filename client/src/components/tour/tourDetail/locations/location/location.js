import React from 'react';

export default (props) => {
  return (
    <li>
      <div class='itinerary-day'>
        <span style={{ fontSize: '17px' }}>Ngày {props.location.day}</span>
      </div>

      <h6>Điểm đến: {props.location.title}</h6>

      <div
        dangerouslySetInnerHTML={{
          __html: props.location.description,
        }}
      />

      <ul class='itinerary-meta list-inline-block text-primary'>
        <li>
          <i class='far fa-clock'></i> Thời gian chuyến đi: 8am - 4.30pm
        </li>
      </ul>
    </li>
  );
};
