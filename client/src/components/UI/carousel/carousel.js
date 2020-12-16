import React, { useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';
export default (props) => {
  return (
    <Carousel infiniteLoop autoPlay interval={2000}>
      {Object.values(props.images).map((el, key) => (
        <div key={key}>
          <img src={`http://${el}`} class='img-fluid' />
        </div>
      ))}
    </Carousel>
  );
};
