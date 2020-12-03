import React, { Component } from 'react';

import TourCard from '../tourCard/tourCard';
class BestTour extends Component {
  render() {
    return (
      <div>
        <div class='section-title'>
          <h2>
            <span>
              <i class='fas fa-suitcase'></i> <span>Tour</span> thu hút
            </span>
          </h2>
        </div>
        {/* cols-1 cols-sm-2 cols-lg-3 gap-20 mb-30 */}
        <div class='row equal-height  cols-1 cols-sm-2 cols-lg-3 gap-20 mb-30 '>
          {Object.values(this.props.tourList).map((el) => (
            <TourCard key={el.id} tour={el} />
          ))}
        </div>
      </div>
    );
  }
}
export default BestTour;
