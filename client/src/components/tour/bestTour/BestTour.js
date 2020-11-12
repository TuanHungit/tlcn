import React, { Component } from 'react';
import StarRating from '../../star/star';
class BestTour extends Component {
  render() {
    return (
      <div>
        <div class='section-title'>
          <h2>
            <span>
              <span>Best</span> Tour Packages
            </span>
          </h2>
        </div>
        <div class='row equal-height cols-1 cols-sm-2 cols-lg-3 gap-20 mb-30'>
          <div class='col'>
            <figure class='tour-grid-item-01'>
              <a href='index.html#'>
                <div class='image'>
                  <img src='images/image-tour/01.jpg' alt='images' />
                </div>
                <figcaption class='content'>
                  <h5>Rome to Naples and Amalfi Coast Adventure</h5>
                  <ul class='item-meta'>
                    <li>
                      <i class='elegent-icon-pin_alt text-warning'></i> Italy
                    </li>
                    <li>
                      <div class='rating-item rating-sm rating-inline clearfix'>
                        <div class='rating-icons'>
                          <StarRating size={20} isHover={false} />
                        </div>
                        <p class='rating-text font600 text-muted font-12 letter-spacing-1'>
                          26 reviews
                        </p>
                      </div>
                    </li>
                  </ul>
                  <ul class='item-meta mt-15'>
                    <li>
                      <span class='font700 h6'>3 days &amp; 2 night</span>
                    </li>
                    <li>
                      Start: <span class='font600 h6 line-1 mv-0'> Rome</span> -
                      End: <span class='font600 h6 line-1 mv-0'> Naoples</span>
                    </li>
                  </ul>
                  <p class='mt-3'>
                    Price from{' '}
                    <span class='h6 line-1 text-primary font16'>$125.99</span>{' '}
                    <span class='text-muted mr-5'></span>
                  </p>
                </figcaption>
              </a>
            </figure>
          </div>

          <div class='col'>
            <figure class='tour-grid-item-01'>
              <a href='index.html#'>
                <div class='image'>
                  <img src='images/image-tour/02.jpg' alt='images' />
                </div>

                <figcaption class='content'>
                  <h5>Everest Base Camp Trek through 3 High Passes</h5>
                  <ul class='item-meta'>
                    <li>
                      <i class='elegent-icon-pin_alt text-warning'></i> Nepal
                    </li>
                    <li>
                      <div class='rating-item rating-sm rating-inline clearfix'>
                        <div class='rating-icons'>
                          <StarRating size={20} isHover={false} />
                        </div>
                        <p class='rating-text font600 text-muted font-12 letter-spacing-1'>
                          53 reviews
                        </p>
                      </div>
                    </li>
                  </ul>
                  <ul class='item-meta mt-15'>
                    <li>
                      <span class='font700 h6'>22 days</span>
                    </li>
                    <li>
                      Start/End:{' '}
                      <span class='font600 h6 line-1 mv-0'> Kathmandu</span>
                    </li>
                  </ul>
                  <p class='mt-3'>
                    Price from{' '}
                    <span class='h6 line-1 text-primary font16'>$125.99</span>{' '}
                    <span class='text-muted mr-5'></span>
                  </p>
                </figcaption>
              </a>
            </figure>
          </div>
          <div class='col'>
            <figure class='tour-grid-item-01'>
              <a href='index.html#'>
                <div class='image'>
                  <img src='images/image-tour/03.jpg' alt='images' />
                </div>
                <figcaption class='content'>
                  <h5>10 Days From the South to the North of Vietnam</h5>
                  <ul class='item-meta'>
                    <li>
                      <i class='elegent-icon-pin_alt text-warning'></i> Vietnam
                    </li>
                    <li>
                      <div class='rating-item rating-sm rating-inline clearfix'>
                        <div class='rating-icons'>
                          <StarRating size={20} isHover={false} />
                        </div>
                        <p class='rating-text font600 text-muted font-12 letter-spacing-2'>
                          44 reviews
                        </p>
                      </div>
                    </li>
                  </ul>
                  <ul class='item-meta mt-15'>
                    <li>
                      <span class='font700 h6'>10 days &amp; 9 night</span>
                    </li>
                    <li>
                      Start:{' '}
                      <span class='font600 h6 line-1 mv-0'> Hochiminh</span> -
                      End: <span class='font600 h6 line-1 mv-0'> Hanoi</span>
                    </li>
                  </ul>
                  <p class='mt-3'>
                    Price from{' '}
                    <span class='h6 line-1 text-primary font16'>$125.99</span>{' '}
                    <span class='text-muted mr-5'></span>
                  </p>
                </figcaption>
              </a>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}
export default BestTour;
