import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Destinations extends Component {
  render() {
    return (
      <div className='container pt-100'>
        <div className=' d-flex justify-content-center'>
          <div class='section-title'>
            <h2>
              <span>
                <i class='fas fa-suitcase-rolling'></i>{' '}
                <span>Top điểm đến nổi bật</span>
              </span>
            </h2>
          </div>
        </div>
        <div class='row cols-1 cols-md-3 gap-5'>
          <div class='col'>
            <div class='col-inner'>
              <Link
                to={`/destination/${this.props.destinationList[0].slug}`}
                class='destination-grid-item-02 caption-relative set-height-1'
              >
                <div class='image'>
                  <img src='images/image-destination/01.jpg' alt='image' />
                </div>

                <div class='content caption-holder'>
                  <div class='caption-inner caption-bottom caption-gradient'>
                    <div class='row shrink-auto gap-20 align-items-end'>
                      <div class='col-auto'>
                        <div class='col-inner'>
                          <h6>{this.props.destinationList[0].name}</h6>
                        </div>
                      </div>

                      <div class='col-shrink'>
                        <div class='col-inner'>
                          <span class='caption-label'>
                            {this.props.destinationList[0].numOfTour} Tours
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to={`/destination/${this.props.destinationList[1].slug}`}
                class='destination-grid-item-02 caption-relative set-height-3'
              >
                <div class='image'>
                  <img src='images/image-destination/02.jpg' alt='image' />
                </div>
                <div class='content caption-holder'>
                  <div class='caption-inner caption-bottom caption-gradient'>
                    <div class='row shrink-auto gap-20 align-items-end'>
                      <div class='col-auto'>
                        <div class='col-inner'>
                          <h6>{this.props.destinationList[1].name}</h6>
                        </div>
                      </div>

                      <div class='col-shrink'>
                        <div class='col-inner'>
                          <span class='caption-label'>
                            {this.props.destinationList[1].numOfTour} Tours
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div class='col'>
            <div class='col-inner'>
              <Link
                to={`/destination/${this.props.destinationList[2].slug}`}
                class='destination-grid-item-02 caption-relative set-height-2'
              >
                <div class='image'>
                  <img src='images/image-destination/03.jpg' alt='image' />
                </div>

                <div class='content caption-holder'>
                  <div class='caption-inner caption-bottom caption-gradient'>
                    <div class='row shrink-auto gap-20 align-items-end'>
                      <div class='col-auto'>
                        <div class='col-inner'>
                          <h6>{this.props.destinationList[2].name}</h6>
                        </div>
                      </div>

                      <div class='col-shrink'>
                        <div class='col-inner'>
                          <span class='caption-label'>
                            {this.props.destinationList[2].numOfTour} Tours
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to={`/destination/${this.props.destinationList[3].slug}`}
                class='destination-grid-item-02 caption-relative set-height-2'
              >
                <div class='image'>
                  <img src='images/image-destination/04.jpg' alt='image' />
                </div>

                <div class='content caption-holder'>
                  <div class='caption-inner caption-bottom caption-gradient'>
                    <div class='row shrink-auto gap-20 align-items-end'>
                      <div class='col-auto'>
                        <div class='col-inner'>
                          <h6>{this.props.destinationList[3].name}</h6>
                        </div>
                      </div>

                      <div class='col-shrink'>
                        <div class='col-inner'>
                          <span class='caption-label'>
                            {this.props.destinationList[3].numOfTour} Tours
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div class='col'>
            <div class='col-inner'>
              <Link
                to={`/destination/${this.props.destinationList[4].slug}`}
                class='destination-grid-item-02 caption-relative set-height-3'
              >
                <div class='image'>
                  <img src='images/image-destination/05.jpg' alt='image' />
                </div>

                <div class='content caption-holder'>
                  <div class='caption-inner caption-bottom caption-gradient'>
                    <div class='row shrink-auto gap-20 align-items-end'>
                      <div class='col-auto'>
                        <div class='col-inner'>
                          <h6>{this.props.destinationList[4].name}</h6>
                        </div>
                      </div>

                      <div class='col-shrink'>
                        <div class='col-inner'>
                          <span class='caption-label'>
                            {this.props.destinationList[4].numOfTour} Tours
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to={`/destination/${this.props.destinationList[5].slug}`}
                class='destination-grid-item-02 caption-relative set-height-1'
              >
                <div class='image'>
                  <img src='images/image-destination/06.jpg' alt='image' />
                </div>

                <div class='content caption-holder'>
                  <div class='caption-inner caption-bottom caption-gradient'>
                    <div class='row shrink-auto gap-20 align-items-end'>
                      <div class='col-auto'>
                        <div class='col-inner'>
                          <h6>{this.props.destinationList[5].name}</h6>
                        </div>
                      </div>

                      <div class='col-shrink'>
                        <div class='col-inner'>
                          <span class='caption-label'>
                            {this.props.destinationList[5].numOfTour} Tours
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div class='clear mb-100'></div>
      </div>
    );
  }
}
export default Destinations;
