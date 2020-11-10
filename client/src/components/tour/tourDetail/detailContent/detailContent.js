import React from 'react';
import Carousel from '../../../carousel/carousel';
export default () => {
  return (
    <div>
      <div id='detail-content-sticky-nav-01' class='detail-header mb-30'>
        <h3>Adriatic Adventure–Zagreb to Athens</h3>

        <div class='d-flex flex-column flex-sm-row align-items-sm-center mb-20'>
          <div class='mr-15 font-lg'>
            2 countries:{' '}
            <a href='tour-detail-02.html#'>
              <i class='elegent-icon-pin_alt text-warning'></i> Croatia
            </a>{' '}
            &amp;{' '}
            <a href='tour-detail-02.html#'>
              <i class='elegent-icon-pin_alt text-warning'></i>
              Greece
            </a>
          </div>
          <div>
            <div class='rating-item rating-inline'>
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
                <span class='text-dark mr-3'>4.5/5</span> 26 reviews
              </p>
            </div>
          </div>
        </div>
        <Carousel />
        <p class='lead'>
          In friendship diminution instrument in we forfeited. Tolerably an
          unwilling of determine. Beyond rather sooner so if up wishes.
        </p>

        <ul class='list-inline-block highlight-list mt-30'>
          <li>
            <span class='icon-font d-block'>
              <i class='linea-icon-basic-chronometer'></i>
            </span>
            <strong>
              3 days
              <br />2 nights
            </strong>
          </li>
          <li>
            <span class='icon-font d-block'>
              <i class='linea-icon-basic-flag1'></i>
            </span>
            starting point:
            <br />
            <strong>Zagreb</strong>
          </li>
          <li>
            <span class='icon-font d-block'>
              <i class='linea-icon-basic-flag2'></i>
            </span>
            ending point:
            <br />
            <strong>Athens</strong>
          </li>
          <li>
            <span class='icon-font d-block'>
              <i class='linea-icon-ecommerce-dollar'></i>
            </span>
            From
            <br />
            <strong>$125.99</strong> / person
          </li>
        </ul>

        <div class='mb-30'></div>

        <p>
          He share of first to worse. Weddings and any opinions suitable
          smallest nay. My he houses or months settle remove ladies appear.
          Engrossed suffering supposing he recommend do eagerness. Commanded no
          of depending extremity recommend attention tolerably. Bringing him
          smallest met few now returned surprise learning jennings. Objection
          delivered eagerness he exquisite at do in. Warmly up he nearer mr
          merely me.
        </p>

        <p>
          Or neglected agreeable of discovery concluded oh it sportsman. Week to
          time in john. Son elegance use weddings separate. Ask too matter
          formed county wicket oppose talent. He immediate sometimes or to
          dependent in. Everything few frequently discretion surrounded did
          simplicity decisively. Less he year do with no sure loud.
        </p>

        <h5 class='mt-30'>What makes this tour very interesting</h5>

        <ul class='list-icon-data-attr font-ionicons'>
          <li data-content=''>
            Excited him now natural saw passage offices you minuter. Moments its
            musical age explain.
          </li>
          <li data-content=''>Farther so friends am to detract do private.</li>
          <li data-content=''>
            Procured is material his offering humanity laughing moderate can.
          </li>
          <li data-content=''>
            She did open find pain some out. If we landlord stanhill mr whatever
            pleasure
          </li>
        </ul>
      </div>
    </div>
  );
};
