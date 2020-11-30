import React, { useEffect } from 'react';
import './carousel.css';
import { Carousel } from 'react-bootstrap';
export default () => {
  return (
    <div className='pb-3'>
      <Carousel id='slider' slide={true}>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/01.jpg' class='img-fluid' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/02.jpg' class='img-fluid' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/03.jpg' class='img-fluid' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/04.jpg' class='img-fluid' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/05.jpg' class='img-fluid' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/06.jpg' class='img-fluid' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/07.jpg' class='img-fluid' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/08.jpg' class='img-fluid' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/09.jpg' class='img-fluid' />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src='/images/image-gallery/10.jpg' class='img-fluid' />
        </Carousel.Item>
      </Carousel>

      <ul class='carousel-indicators list-inline mx-auto border px-2'>
        <li class='list-inline-item active'>
          <a
            id='carousel-selector-0'
            class='selected'
            data-slide-to='0'
            data-target='#slider'
          >
            <img src='/images/image-gallery/01.jpg' class='img-fluid' />
          </a>
        </li>
        <li class='list-inline-item'>
          <a id='carousel-selector-1' data-slide-to='1' data-target='#slider'>
            <img src='/images/image-gallery/02.jpg' class='img-fluid' />
          </a>
        </li>
        <li class='list-inline-item'>
          <a id='carousel-selector-2' data-slide-to='2' data-target='#slider'>
            <img src='/images/image-gallery/03.jpg' class='img-fluid' />
          </a>
        </li>
        <li class='list-inline-item'>
          <a id='carousel-selector-3' data-slide-to='3' data-target='#slider'>
            <img src='/images/image-gallery/04.jpg' class='img-fluid' />
          </a>
        </li>
        <li class='list-inline-item'>
          <a id='carousel-selector-4' data-slide-to='4' data-target='#slider'>
            <img src='/images/image-gallery/05.jpg' class='img-fluid' />
          </a>
        </li>
        <li class='list-inline-item'>
          <a id='carousel-selector-5' data-slide-to='5' data-target='#slider'>
            <img src='/images/image-gallery/06.jpg' class='img-fluid' />
          </a>
        </li>
        <li class='list-inline-item'>
          <a id='carousel-selector-6' data-slide-to='6' data-target='#slider'>
            <img src='/images/image-gallery/07.jpg' class='img-fluid' />
          </a>
        </li>
        <li class='list-inline-item'>
          <a id='carousel-selector-7' data-slide-to='7' data-target='#slider'>
            <img src='/images/image-gallery/07.jpg' class='img-fluid' />
          </a>
        </li>
        <li class='list-inline-item'>
          <a id='carousel-selector-6' data-slide-to='8' data-target='#slider'>
            <img src='/images/image-gallery/09.jpg' class='img-fluid' />
          </a>
        </li>
        <li class='list-inline-item'>
          <a id='carousel-selector-7' data-slide-to='9' data-target='#slider'>
            <img src='/images/image-gallery/10.jpg' class='img-fluid' />
          </a>
        </li>
      </ul>
    </div>
  );
};
