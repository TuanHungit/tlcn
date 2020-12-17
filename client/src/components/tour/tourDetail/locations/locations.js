import React from 'react';
import Location from './location/location';
export default (props) => {
  return (
    <div
      id='detail-content-sticky-nav-02'
      class='fullwidth-horizon-sticky-section'
    >
      <h5 class='mt-30'>
        <i class='far fa-star'></i> Những điểm nổi bật làm Tour trở nên thú vị
      </h5>

      <ul class='list-icon-data-attr font-ionicons'>
        <div
          dangerouslySetInnerHTML={{
            __html: props.content.description,
          }}
        />
      </ul>
      <h4 class='heading-title'>
        <i class='fas fa-plane'></i> Hành trình
      </h4>

      <ul class='itinerary-list mt-30'>
        {Object.values(props.content.locations).map((el, key) => (
          <Location location={el} key={key} />
        ))}
      </ul>

      <div class='mb-50'></div>
    </div>
  );
};
