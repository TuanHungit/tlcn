import React, { useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';
export default () => {
  return (
    <Carousel infiniteLoop autoPlay interval={2000}>
      <div>
        <img src='/images/image-gallery/01.jpg' class='img-fluid' />
      </div>
      <div>
        <img src='/images/image-gallery/02.jpg' class='img-fluid' />
      </div>
      <div>
        <img src='/images/image-gallery/03.jpg' class='img-fluid' />
      </div>
      <div>
        <img src='/images/image-gallery/04.jpg' class='img-fluid' />
      </div>
      <div>
        <img src='/images/image-gallery/05.jpg' class='img-fluid' />
      </div>
      <div>
        <img src='/images/image-gallery/06.jpg' class='img-fluid' />
      </div>
      <div>
        <img src='/images/image-gallery/07.jpg' class='img-fluid' />
      </div>
      <div>
        <img src='/images/image-gallery/08.jpg' class='img-fluid' />
      </div>
      <div>
        <img src='/images/image-gallery/09.jpg' class='img-fluid' />
      </div>
      <div>
        <img src='/images/image-gallery/10.jpg' class='img-fluid' />
      </div>
    </Carousel>
  );
};
