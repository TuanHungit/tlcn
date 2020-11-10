import React, { useEffect } from 'react';
import './carousel.css';
export default () => {
  return (
    <div id='slider' className='pb-3'>
      <div id='myCarousel' class='carousel slide shadow'>
        <div class='carousel-inner'>
          <div class='active carousel-item' data-slide-number='0'>
            <img src='images/image-gallery/01.jpg' class='img-fluid' />
          </div>
          <div class='carousel-item' data-slide-number='1'>
            <img src='images/image-gallery/02.jpg' class='img-fluid' />
          </div>
          <div class='carousel-item' data-slide-number='2'>
            <img src='images/image-gallery/03.jpg' class='img-fluid' />
          </div>
          <div class='carousel-item' data-slide-number='3'>
            <img src='images/image-gallery/04.jpg' class='img-fluid' />
          </div>
          <div class='carousel-item' data-slide-number='4'>
            <img src='images/image-gallery/05.jpg' class='img-fluid' />
          </div>
          <div class='carousel-item' data-slide-number='5'>
            <img src='images/image-gallery/06.jpg' class='img-fluid' />
          </div>
          <div class='carousel-item' data-slide-number='6'>
            <img src='images/image-gallery/07.jpg' class='img-fluid' />
          </div>
          <div class='carousel-item' data-slide-number='7'>
            <img src='images/image-gallery/08.jpg' class='img-fluid' />
          </div>
          <div class='carousel-item' data-slide-number='8'>
            <img src='images/image-gallery/09.jpg' class='img-fluid' />
          </div>
          <div class='carousel-item' data-slide-number='9'>
            <img src='images/image-gallery/10.jpg' class='img-fluid' />
          </div>

          <a
            class='carousel-control-prev'
            href='#myCarousel'
            role='button'
            data-slide='prev'
          >
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='sr-only'>Previous</span>
          </a>
          <a
            class='carousel-control-next'
            href='#myCarousel'
            role='button'
            data-slide='next'
          >
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='sr-only'>Next</span>
          </a>
        </div>

        <ul class='carousel-indicators list-inline mx-auto border px-2'>
          <li class='list-inline-item active'>
            <a
              id='carousel-selector-0'
              class='selected'
              data-slide-to='0'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/01.jpg' class='img-fluid' />
            </a>
          </li>
          <li class='list-inline-item'>
            <a
              id='carousel-selector-1'
              data-slide-to='1'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/02.jpg' class='img-fluid' />
            </a>
          </li>
          <li class='list-inline-item'>
            <a
              id='carousel-selector-2'
              data-slide-to='2'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/03.jpg' class='img-fluid' />
            </a>
          </li>
          <li class='list-inline-item'>
            <a
              id='carousel-selector-3'
              data-slide-to='3'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/04.jpg' class='img-fluid' />
            </a>
          </li>
          <li class='list-inline-item'>
            <a
              id='carousel-selector-4'
              data-slide-to='4'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/05.jpg' class='img-fluid' />
            </a>
          </li>
          <li class='list-inline-item'>
            <a
              id='carousel-selector-5'
              data-slide-to='5'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/06.jpg' class='img-fluid' />
            </a>
          </li>
          <li class='list-inline-item'>
            <a
              id='carousel-selector-6'
              data-slide-to='6'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/07.jpg' class='img-fluid' />
            </a>
          </li>
          <li class='list-inline-item'>
            <a
              id='carousel-selector-7'
              data-slide-to='7'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/07.jpg' class='img-fluid' />
            </a>
          </li>
          <li class='list-inline-item'>
            <a
              id='carousel-selector-6'
              data-slide-to='8'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/09.jpg' class='img-fluid' />
            </a>
          </li>
          <li class='list-inline-item'>
            <a
              id='carousel-selector-7'
              data-slide-to='9'
              data-target='#myCarousel'
            >
              <img src='images/image-gallery/10.jpg' class='img-fluid' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
