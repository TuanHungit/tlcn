import React from 'react';
import './intro.css';
export default () => {
  return (
    <section class='section-stories'>
      <div class='bg-video'>
        <video loop autoPlay muted class='bg-video__content'>
          <source src='images/video.webm' type='video/mp4' />
        </video>
      </div>
      <div class='container'>
        <div class='row'>
          <div class='col-md-7 col-md-push-5'>
            <div class='booking-cta'>
              <h1>Make your booking</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                facere, soluta magnam consectetur molestias itaque ad sint fugit
                architecto incidunt iste culpa perspiciatis possimus voluptates
                aliquid consequuntur cumque quasi. Perspiciatis.
              </p>
            </div>
          </div>
          <div class='col-md-4 col-md-pull-7'>
            <div class='booking-form'>
              <form>
                <div class='form-group'>
                  <span class='form-label'>Fullname</span>
                  <input
                    class='form-control'
                    type='text'
                    placeholder='Enter your fullname'
                  />
                </div>
                <div class='form-group'>
                  <span class='form-label'>Email address</span>
                  <input
                    class='form-control'
                    type='text'
                    placeholder='Enter your email address'
                  />
                </div>
                <div class='form-btn'>
                  <button class='submit-btn'>Next step</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
