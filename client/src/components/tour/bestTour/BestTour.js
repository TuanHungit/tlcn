import React, { Component } from 'react';

import TourCard from '../tourCard/tourCard';
class BestTour extends Component {
  render() {
    return (
      <div>
        <div class='section-title'>
          <h2>
            <span>
              <span>Tour</span> thu hút
            </span>
          </h2>
        </div>
        {/* cols-1 cols-sm-2 cols-lg-3 gap-20 mb-30 */}
        <div class='row equal-height mb-30 '>
          <div className='col-12-block col-lg-3'>
            <img
              src='https://trippycdn.com/images/side-bar-tour-3.jpg'
              alt=''
              className='img-fluid'
            />
          </div>
          <div className='col-12 col-lg-9'>
            <div classNam='container'>
              <div className='row equal-height  cols-1 cols-sm-2 gap-20 mb-30 '>
                {Object.values(this.props.tourList).map((el) => (
                  <TourCard key={el.id} tour={el} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BestTour;
