import React from 'react';
export default () => {
  return (
    <div class='fullwidth-horizon-sticky-section'>
      <h4 class='heading-title'>Similar Tour</h4>

      <div class='row equal-height cols-1 cols-sm-2 gap-30 mb-25'>
        <div class='col'>
          <figure class='tour-grid-item-01'>
            <a href='tour-detail-02.html#'>
              <div class='image'>
                <img src='/images/image-bg/01.jpg' alt='images' />
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
                        <input
                          type='hidden'
                          class='rating'
                          data-filled='rating-icon ri-star rating-rated'
                          data-empty='rating-icon ri-star-empty'
                          data-fractions='2'
                          data-readonly
                          value='4.5'
                        />
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
            <a href='tour-detail-02.html#'>
              <div class='image'>
                <img src='/images/image-bg/02.jpg' alt='images' />
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
                        <input
                          type='hidden'
                          class='rating'
                          data-filled='rating-icon ri-star rating-rated'
                          data-empty='rating-icon ri-star-empty'
                          data-fractions='2'
                          data-readonly
                          value='4.5'
                        />
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
      </div>

      <div class='mb-50'></div>
    </div>
  );
};
