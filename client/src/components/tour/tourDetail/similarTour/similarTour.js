import React from 'react';
import TourCard from '../../tourCard/tourCard';
export default (props) => {
  return (
    <div class='fullwidth-horizon-sticky-section'>
      <h4 class='heading-title'>
        <i class='fas fa-torii-gate'></i> Các Tour liên quan
      </h4>

      <div class='row equal-height cols-1 cols-sm-2 gap-30 mb-25'>
        {Object.values(props.tourSimilarList).map((el, key) => (
          <TourCard tour={el} key={key} />
        ))}
      </div>

      <div class='mb-50'></div>
    </div>
  );
};
