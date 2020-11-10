import React, { Component } from 'react';
import Carousel from '../carousel/carousel';
import PageTitle from '../layout/PageTitle/PageTile';
import BookingTour from './BookingTour/BookingTour';
import ContentDetail from './DetailContent/DetailContent';
import Sticky from './sticky/sticky';
import Schedule from './schedule/shedule';
import Map from './map/map';
class TourDetail extends Component {
  render() {
    return (
      <div className='body-inner'>
        <div class='main-wrapper scrollspy-container'>
          <section class='page-wrapper page-detail pt-0'>
            <div class='pt-0 pt-xl-15'></div>

            <Sticky />
            <Carousel />
            <PageTitle />

            <div class='container pt-30'>
              <div class='row gap-20 gap-lg-40'>
                <div class='col-12 col-lg-8'>
                  <div class='content-wrapper'>
                    <ContentDetail />

                    <div class='mb-50'></div>

                    <Schedule />
                    <Map />
                    <div
                      id='detail-content-sticky-nav-04'
                      class='fullwidth-horizon-sticky-section'
                    >
                      <h4 class='heading-title'>What's included</h4>

                      <ul class='list-icon-absolute what-included-list mb-30'>
                        <li>
                          <span class='icon-font'>
                            <i class='elegent-icon-check_alt2 text-primary'></i>{' '}
                          </span>
                          <h6>Guide</h6>
                          <p>Adieus except say barton put feebly favour him.</p>
                        </li>

                        <li>
                          <span class='icon-font'>
                            <i class='elegent-icon-check_alt2 text-primary'></i>{' '}
                          </span>
                          <h6>Meals</h6>
                          <p>4 breakfast &amp; 3 dinners </p>
                        </li>

                        <li>
                          <span class='icon-font'>
                            <i class='elegent-icon-check_alt2 text-primary'></i>{' '}
                          </span>
                          <h6>Transport</h6>
                          <p>
                            Modern air conditioned coach with reclining seats,
                            TV for showing DVDs, and toilet
                          </p>
                        </li>

                        <li>
                          <span class='icon-font'>
                            <i class='elegent-icon-check_alt2 text-primary'></i>{' '}
                          </span>
                          <h6>5 Experiences</h6>
                          <p>
                            Sense child do state to defer mr of forty. Become
                            latter but nor abroad wisdom waited. Was delivered
                            gentleman acuteness but daughters. In as of whole as
                            match asked. Pleasure exertion put add entrance
                            distance drawings.
                          </p>
                        </li>

                        <li>
                          <span class='icon-font'>
                            <i class='elegent-icon-check_alt2 text-primary'></i>{' '}
                          </span>
                          <h6>Other</h6>
                          <ul class='ul'>
                            <li>Free Wi-fi in all hotels </li>
                            <li>All taxes and fees </li>
                            <li>
                              Any public transport used as part of the tour
                              (excludes free days){' '}
                            </li>
                            <li>Free Expat Explore tour souvenir </li>
                          </ul>
                        </li>
                      </ul>

                      <h5>Not included</h5>

                      <ul class='list-icon-absolute what-included-list mb-30'>
                        <li>
                          <span class='icon-font'>
                            <i class='elegent-icon-close_alt2 text-dark'></i>{' '}
                          </span>
                          <h6>Flights</h6>
                          <p>
                            Warmth object matter course active law spring six{' '}
                            <a href='tour-detail-02.html#'>
                              line to some where
                            </a>
                            . Pursuit showing tedious unknown winding see had
                            man add.
                          </p>
                        </li>

                        <li>
                          <span class='icon-font'>
                            <i class='elegent-icon-close_alt2 text-dark'></i>{' '}
                          </span>
                          <h6>Insurance</h6>
                          <p>
                            Had repulsive dashwoods suspicion sincerity but
                            advantage now him. Remark easily garret nor nay{' '}
                            <a href='tour-detail-02.html#'>
                              line to some where
                            </a>
                            . Civil those mrs enjoy shy fat merry. You greatest
                            jointure saw horrible.
                          </p>
                        </li>
                      </ul>

                      <div class='mb-50'></div>
                    </div>

                    <div
                      id='detail-content-sticky-nav-05'
                      class='fullwidth-horizon-sticky-section'
                    >
                      <h4 class='heading-title'>Availabilities</h4>

                      <div class='row mt-30'>
                        <div class='col-12 col-md-6 col-lg-5'>
                          <div class='col-inner'>
                            <div class='form-group'>
                              <input
                                type='text'
                                class='form-control form-readonly-control air-datepicker'
                                placeholder='Pick a month'
                                data-min-view='months'
                                data-view='months'
                                data-date-format='MM yyyy'
                                data-language='en'
                                data-auto-close='true'
                                readonly
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class='mb-20'></div>

                      <div class='item-text-long-wrapper'>
                        <div class='item-heading text-muted'>
                          <div class='row d-none d-sm-flex'>
                            <div class='col-12 col-sm-7'>
                              <div class='col-inner'>
                                <div class='row gap-10'>
                                  <div class='col-5'>from</div>

                                  <div class='col-2'></div>

                                  <div class='col-5'>to</div>
                                </div>
                              </div>
                            </div>

                            <div class='col-12 col-sm-3'>
                              <div class='col-inner'>
                                <div class='row gap-10'>
                                  <div class='col-6 text-center'>status</div>

                                  <div class='col-6 text-right'>price</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class='item-text-long'>
                          <div class='row align-items-center'>
                            <div class='col-12 col-sm-7'>
                              <div class='col-inner mb-10 mb-sm-0'>
                                <div class='row gap-10 align-items-center'>
                                  <div class='col-5'>
                                    <span class='font-sm'>Monday</span>
                                    <strong class='d-block'>
                                      March 7, 2019
                                    </strong>
                                  </div>

                                  <div class='col-2'>
                                    <span class='day-count mt-3'>
                                      3<br />
                                      days
                                    </span>
                                  </div>

                                  <div class='col-5 text-right text-sm-left'>
                                    <span class='font-sm'>Thursday</span>
                                    <strong class='d-block'>
                                      March 9, 2019
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class='col-8 col-sm-3'>
                              <div class='col-inner'>
                                <div class='row gap-10 align-items-center'>
                                  <div class='col-6 text-left text-sm-center'>
                                    <span class='font-sm'>seats left </span>
                                    <strong class='d-block'>15</strong>
                                  </div>

                                  <div class='col-6 text-left  text-sm-right'>
                                    <strong class='d-block'>$1458</strong>
                                    <span class='font-sm'>/ person</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class='col-4 col-sm-2'>
                              <a
                                href='tour-detail-02.html#'
                                class='btn btn-primary btn-block btn-sm mt-3'
                              >
                                Book now
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class='item-text-long'>
                          <div class='row align-items-center'>
                            <div class='col-12 col-sm-7'>
                              <div class='col-inner mb-10 mb-sm-0'>
                                <div class='row gap-10 align-items-center'>
                                  <div class='col-5'>
                                    <span class='font-sm'>Monday</span>
                                    <strong class='d-block'>
                                      March 26, 2019
                                    </strong>
                                  </div>

                                  <div class='col-2'>
                                    <span class='day-count mt-3'>
                                      3<br />
                                      days
                                    </span>
                                  </div>

                                  <div class='col-5 text-right text-sm-left'>
                                    <span class='font-sm'>Thursday</span>
                                    <strong class='d-block'>
                                      March 28, 2019
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class='col-8 col-sm-3'>
                              <div class='col-inner'>
                                <div class='row gap-10 align-items-center'>
                                  <div class='col-6 text-left text-sm-center'>
                                    <span class='font-sm'>seats left </span>
                                    <strong class='d-block'>8</strong>
                                  </div>

                                  <div class='col-6 text-left  text-sm-right'>
                                    <strong class='d-block'>$1458</strong>
                                    <span class='font-sm'>/ person</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class='col-4 col-sm-2'>
                              <a
                                href='tour-detail-02.html#'
                                class='btn btn-primary btn-block btn-sm mt-3'
                              >
                                Book now
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class='item-text-long sold-out'>
                          <div class='row align-items-center'>
                            <div class='col-12 col-sm-7'>
                              <div class='col-inner mb-10 mb-sm-0'>
                                <div class='row gap-10 align-items-center'>
                                  <div class='col-5'>
                                    <span class='font-sm'>Monday</span>
                                    <strong class='d-block'>
                                      April 10, 2019
                                    </strong>
                                  </div>

                                  <div class='col-2'>
                                    <span class='day-count mt-3'>
                                      3<br />
                                      days
                                    </span>
                                  </div>

                                  <div class='col-5 text-right text-sm-left'>
                                    <span class='font-sm'>Thursday</span>
                                    <strong class='d-block'>
                                      April 12, 2019
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class='col-8 col-sm-3'>
                              <div class='col-inner'>
                                <div class='row gap-10 align-items-center'>
                                  <div class='col-6 text-left text-sm-center'>
                                    <strong class='d-block text-success'>
                                      sold out
                                    </strong>
                                  </div>

                                  <div class='col-6 text-left  text-sm-right'></div>
                                </div>
                              </div>
                            </div>

                            <div class='col-4 col-sm-2'>
                              <a
                                href='tour-detail-02.html#'
                                class='btn btn-primary btn-block btn-sm mt-3'
                              >
                                Book now
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class='item-text-long'>
                          <div class='row align-items-center'>
                            <div class='col-12 col-sm-7'>
                              <div class='col-inner mb-10 mb-sm-0'>
                                <div class='row gap-10 align-items-center'>
                                  <div class='col-5'>
                                    <span class='font-sm'>Monday</span>
                                    <strong class='d-block'>
                                      April 19, 2019
                                    </strong>
                                  </div>

                                  <div class='col-2'>
                                    <span class='day-count mt-3'>
                                      3<br />
                                      days
                                    </span>
                                  </div>

                                  <div class='col-5 text-right text-sm-left'>
                                    <span class='font-sm'>Thursday</span>
                                    <strong class='d-block'>
                                      April 21, 2019
                                    </strong>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class='col-8 col-sm-3'>
                              <div class='col-inner'>
                                <div class='row gap-10 align-items-center'>
                                  <div class='col-6 text-left text-sm-center'>
                                    <span class='font-sm'>seats left </span>
                                    <strong class='d-block'>8</strong>
                                  </div>

                                  <div class='col-6 text-left  text-sm-right'>
                                    <strong class='d-block'>$1458</strong>
                                    <span class='font-sm'>/ person</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class='col-4 col-sm-2'>
                              <a
                                href='tour-detail-02.html#'
                                class='btn btn-primary btn-block btn-sm mt-3'
                              >
                                Book now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class='mb-50'></div>
                    </div>

                    <div class='fullwidth-horizon-sticky-section'>
                      <h4 class='heading-title'>Similar Tour</h4>

                      <div class='row equal-height cols-1 cols-sm-2 gap-30 mb-25'>
                        <div class='col'>
                          <figure class='tour-grid-item-01'>
                            <a href='tour-detail-02.html#'>
                              <div class='image'>
                                <img
                                  src='images/image-bg/01.jpg'
                                  alt='images'
                                />
                              </div>

                              <figcaption class='content'>
                                <h5>
                                  Rome to Naples and Amalfi Coast Adventure
                                </h5>
                                <ul class='item-meta'>
                                  <li>
                                    <i class='elegent-icon-pin_alt text-warning'></i>{' '}
                                    Italy
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
                                    <span class='font700 h6'>
                                      3 days &amp; 2 night
                                    </span>
                                  </li>
                                  <li>
                                    Start:{' '}
                                    <span class='font600 h6 line-1 mv-0'>
                                      {' '}
                                      Rome
                                    </span>{' '}
                                    - End:{' '}
                                    <span class='font600 h6 line-1 mv-0'>
                                      {' '}
                                      Naoples
                                    </span>
                                  </li>
                                </ul>
                                <p class='mt-3'>
                                  Price from{' '}
                                  <span class='h6 line-1 text-primary font16'>
                                    $125.99
                                  </span>{' '}
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
                                <img
                                  src='images/image-bg/02.jpg'
                                  alt='images'
                                />
                              </div>

                              <figcaption class='content'>
                                <h5>
                                  Everest Base Camp Trek through 3 High Passes
                                </h5>
                                <ul class='item-meta'>
                                  <li>
                                    <i class='elegent-icon-pin_alt text-warning'></i>{' '}
                                    Nepal
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
                                    <span class='font600 h6 line-1 mv-0'>
                                      {' '}
                                      Kathmandu
                                    </span>
                                  </li>
                                </ul>
                                <p class='mt-3'>
                                  Price from{' '}
                                  <span class='h6 line-1 text-primary font16'>
                                    $125.99
                                  </span>{' '}
                                  <span class='text-muted mr-5'></span>
                                </p>
                              </figcaption>
                            </a>
                          </figure>
                        </div>
                      </div>

                      <div class='mb-50'></div>
                    </div>

                    <div
                      id='detail-content-sticky-nav-06'
                      class='fullwidth-horizon-sticky-section'
                    >
                      <h4 class='heading-title'>FAQ</h4>

                      <div class='faq-item-long-wrapper'>
                        <div class='faq-item-long'>
                          <div class='row'>
                            <div class='col-12 col-md-4 col-lg-3'>
                              <div class='col-inner'>
                                <h6>What is this faq?</h6>
                              </div>
                            </div>

                            <div class='col-12 col-md-8 col-lg-9'>
                              <div class='col-inner'>
                                <p class='font-lg'>
                                  Residence certainly elsewhere something she
                                  preferred cordially law. Age his surprise
                                  formerly mrs perceive few stanhill moderate.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class='faq-item-long'>
                          <div class='row'>
                            <div class='col-12 col-md-4 col-lg-3'>
                              <div class='col-inner'>
                                <h6>How does this faq work?</h6>
                              </div>
                            </div>

                            <div class='col-12 col-md-8 col-lg-9'>
                              <div class='col-inner'>
                                <p class='font-lg'>
                                  Appetite in unlocked advanced breeding
                                  position concerns as. Cheerful get shutters
                                  yet for repeated screened.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class='faq-item-long'>
                          <div class='row'>
                            <div class='col-12 col-md-4 col-lg-3'>
                              <div class='col-inner'>
                                <h6>Why use this faq?</h6>
                              </div>
                            </div>

                            <div class='col-12 col-md-8 col-lg-9'>
                              <div class='col-inner'>
                                <p class='font-lg'>
                                  Plan upon yet way get cold spot its week.
                                  Almost do am or limits hearts. Resolve parties
                                  but why she shewing.{' '}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class='faq-item-long'>
                          <div class='row'>
                            <div class='col-12 col-md-4 col-lg-3'>
                              <div class='col-inner'>
                                <h6>Is this faq free to use?</h6>
                              </div>
                            </div>

                            <div class='col-12 col-md-8 col-lg-9'>
                              <div class='col-inner'>
                                <p class='font-lg'>
                                  Received the likewise law graceful his. Nor
                                  might set along charm now equal green. Pleased
                                  yet equally correct colonel not one.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class='row mt-25'>
                        <div class='col-12 col-md-8 col-lg-9 offset-md-4 offset-lg-3'>
                          <div class='col-inner'>
                            <a
                              href='tour-detail-02.html#'
                              class='btn btn-primary btn-wide'
                            >
                              Ask q question
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class='mb-50'></div>
                    </div>

                    <div
                      id='detail-content-sticky-nav-07'
                      class='fullwidth-horizon-sticky-section'
                    >
                      <h4 class='heading-title'>Reviews</h4>

                      <ul class='review-list'>
                        <li>
                          <div class='review-man d-flex'>
                            <div class='image mr-15'>
                              <img
                                src='images/image-man/01.jpg'
                                alt='image'
                                class='image-circle'
                              />
                            </div>

                            <div class='line-125'>
                              <h6 class='line-125 mb-3'>Antony Robert</h6>
                              <div class='rating-item rating-sm'>
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
                              </div>
                              <span class='text-muted font-sm font600'>
                                Jan 15, 2019
                              </span>
                            </div>
                          </div>

                          <div class='review-content'>
                            <p>
                              She meant new their sex could defer child. An lose
                              at quit to life do dull. Moreover end horrible
                              endeavor entrance any families. Income appear
                              extent on of thrown in admire. It as announcing it
                              me stimulated frequently continuing. Least their
                              she you now above going stand forth. He pretty
                              future afraid should genius spirit on. Set
                              property addition building put likewise get. Of
                              will at sell well at as. Too want but tall nay
                              like old. Removing yourself be in answered
                            </p>
                          </div>
                        </li>

                        <li>
                          <div class='review-man d-flex'>
                            <div class='image mr-15'>
                              <img
                                src='images/image-man/02.jpg'
                                alt='image'
                                class='image-circle'
                              />
                            </div>

                            <div class='line-125'>
                              <h6 class='line-125 mb-3'>Mohammed Salem</h6>
                              <div class='rating-item rating-sm'>
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
                              </div>
                              <span class='text-muted font-sm font600'>
                                Jan 15, 2019
                              </span>
                            </div>
                          </div>

                          <div class='review-content'>
                            <p>
                              Spot of come to ever hand as lady meet on.
                              Delicate contempt received two yet advanced.
                              Gentleman as belonging he commanded believing
                              dejection in by. On no am winding chicken so
                              behaved. Its preserved sex enjoyment new way
                              behaviour. Him yet devonshire celebrated
                              especially. Unfeeling one provision are smallness
                              resembled repulsive.
                            </p>
                          </div>
                        </li>

                        <li>
                          <div class='review-man d-flex'>
                            <div class='image mr-15'>
                              <img
                                src='images/image-man/03.jpg'
                                alt='image'
                                class='image-circle'
                              />
                            </div>

                            <div class='line-125'>
                              <h6 class='line-125 mb-3'>Ange Ermolova</h6>
                              <div class='rating-item rating-sm'>
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
                              </div>
                              <span class='text-muted font-sm font600'>
                                Jan 15, 2019
                              </span>
                            </div>
                          </div>

                          <div class='review-content'>
                            <p>
                              Real sold my in call. Invitation on an advantages
                              collecting. But event old above shy bed noisy. Had
                              sister see wooded favour income has. Stuff rapid
                              since hence.
                            </p>
                          </div>
                        </li>

                        <li>
                          <div class='review-man d-flex'>
                            <div class='image mr-15'>
                              <img
                                src='images/image-man/04.jpg'
                                alt='image'
                                class='image-circle'
                              />
                            </div>

                            <div class='line-125'>
                              <h6 class='line-125 mb-3'>Ange Ermolova</h6>
                              <div class='rating-item rating-sm'>
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
                              </div>
                              <span class='text-muted font-sm font600'>
                                Jan 15, 2019
                              </span>
                            </div>
                          </div>

                          <div class='review-content'>
                            <p>
                              Unpleasant astonished an diminution up partiality.
                              Noisy an their of meant. Death means up civil do
                              an offer wound of. Called square an in afraid
                              direct. Resolution diminution conviction so mr at
                              unpleasing simplicity no. No it as breakfast up
                              conveying earnestly immediate principle. Him son
                              disposed produced humoured overcame she bachelor
                              improved. Studied however out wishing but inhabit
                              fortune windows.
                            </p>
                          </div>
                        </li>

                        <li>
                          <div class='review-man d-flex'>
                            <div class='image mr-15'>
                              <img
                                src='images/image-man/05.jpg'
                                alt='image'
                                class='image-circle'
                              />
                            </div>

                            <div class='line-125'>
                              <h6 class='line-125 mb-3'>Christine Gateau</h6>
                              <div class='rating-item rating-sm'>
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
                              </div>
                              <span class='text-muted font-sm font600'>
                                Jan 15, 2019
                              </span>
                            </div>
                          </div>

                          <div class='review-content'>
                            <p>
                              Greatly hearted has who believe. Sir margaret
                              drawings repeated recurred exercise laughing may
                              you. Cheerful but whatever ladyship disposed yet
                              judgment.
                            </p>
                          </div>
                        </li>

                        <li>
                          <nav>
                            <ul class='pagination mb-0'>
                              <li>
                                <a
                                  href='tour-detail-02.html#'
                                  aria-label='Previous'
                                >
                                  <span aria-hidden='true'>&laquo;</span>
                                </a>
                              </li>
                              <li class='active'>
                                <a href='tour-detail-02.html#'>1</a>
                              </li>
                              <li>
                                <a href='tour-detail-02.html#'>2</a>
                              </li>
                              <li>
                                <a href='tour-detail-02.html#'>3</a>
                              </li>
                              <li>
                                <span>...</span>
                              </li>
                              <li>
                                <a href='tour-detail-02.html#'>11</a>
                              </li>
                              <li>
                                <a href='tour-detail-02.html#'>12</a>
                              </li>
                              <li>
                                <a href='tour-detail-02.html#'>13</a>
                              </li>
                              <li>
                                <a
                                  href='tour-detail-02.html#'
                                  aria-label='Next'
                                >
                                  <span aria-hidden='true'>&raquo;</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <BookingTour />
              </div>
            </div>
          </section>
        </div>

        <a
          id='back-to-top'
          href='tour-detail-02.html#'
          class='back-to-top'
          role='button'
          title='Click to return to top'
          data-toggle='tooltip'
          data-placement='left'
        >
          <i class='elegent-icon-arrow_carrot-up'></i>
        </a>
      </div>
    );
  }
}

export default TourDetail;
