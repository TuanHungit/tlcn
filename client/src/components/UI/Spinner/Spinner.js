import React from 'react';

const spinner = () => (
  <div>
    <div className='mt-100'></div>
    <div className='mt-100'></div>
    <div className='mt-100'></div>
    <div className='mt-100'></div>
    <div class='d-flex justify-content-center'>
      <div class='spinner-border' role='status'>
        <span class='sr-only'>Loading...</span>
      </div>
    </div>
    <div className='mb-100'></div>
    <div className='mb-100'></div>
    <div className='mb-100'></div>
    <div className='mb-100'></div>
  </div>
);

export default spinner;
