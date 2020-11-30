import React from 'react';
import './Spinner.css';
const spinner = () => (
  <div className='container-spinner'>
    <div class='text-center loader'>
      <div class='spinner-border' role='status'>
        <span class='sr-only'>Loading...</span>
      </div>
    </div>
  </div>
);

export default spinner;
