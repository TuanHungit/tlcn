import React, { Component } from 'react';

import TourCard from '../../tour/tourCard/tourCard';
class search extends Component {
  render() {
    return (     
     <div className="row">
   
    {Object.values(this.props.tourList).map((el) => (
      <TourCard key={el.id} tour={el} />
    ))}   
      </div>
    );
   
  
  }
}
export default search;
