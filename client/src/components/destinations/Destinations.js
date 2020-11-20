import React, { Component } from 'react';

class Destinations extends Component {
  render() {
    return (
      <div>
        <div class='section-title'>
          <h2>
            <span>
              <span>Top</span> Destinations
            </span>
          </h2>
        </div>
        <div class='row cols-1 cols-md-3 gap-5'>
          <div class='col'>
            <div class='col-inner'>
              <a
                href='index-05.html#'
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
              </a>

              <a
                href='index-05.html#'
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
              </a>
            </div>
          </div>

          <div class='col'>
            <div class='col-inner'>
              <a
                href='index-05.html#'
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
              </a>

              <a
                href='index-05.html#'
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
              </a>
            </div>
          </div>

          <div class='col'>
            <div class='col-inner'>
              <a
                href='index-05.html#'
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
              </a>

              <a
                href='index-05.html#'
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
              </a>
            </div>
          </div>
        </div>
        <div class='clear mb-100'></div>
      </div>
    );
  }
}
export default Destinations;
