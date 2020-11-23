import React from 'react';
import Location from './location/location';
export default (props) => {
  console.log(props);
  return (
    <div
      id='detail-content-sticky-nav-02'
      class='fullwidth-horizon-sticky-section'
    >
      <h4 class='heading-title'>
        <i class='fas fa-plane'></i> Hành trình
      </h4>

      <h6>Giới thiệu</h6>

      <p>{props.content.summary}</p>

      <ul class='itinerary-list mt-30'>
        {Object.values(props.content.locations).map((el, key) => (
          <Location location={el} key={key} />
        ))}
      </ul>

      <div class='mb-50'></div>
    </div>
  );
};
