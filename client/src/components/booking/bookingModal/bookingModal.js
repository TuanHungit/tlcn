import React, { Component } from 'react';
import Schedule from '../../tour/tourDetail/schedule/schedule';
export default class extends Component {
  closeModalHandler = () => {
    this.buttonElement.click();
  };
  render() {
    return (
      <div
        className='modal fade modal-with-tabs form-login-modal'
        id='BookingModal'
        aria-labelledby='modalWIthTabsLabel'
        tabindex='0'
        role='dialog'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content shadow-lg'>
            <div className='tab-content'>
              <div className='form-login'>
                <div className='form-body'>
                  <Schedule
                    duration={this.props.duration}
                    start={this.props.start}
                    priceAdults={this.props.priceAdults}
                    changeDateHandler={this.props.changeDateHandler}
                    closeModalHandler={this.closeModalHandler}
                  />
                </div>
              </div>
              <div className='text-center pb-20'>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-labelledby='Close'
                  ref={(button) => (this.buttonElement = button)}
                >
                  <span aria-hidden='true'>
                    <i className='far fa-times-circle'></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
