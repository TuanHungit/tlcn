import React from 'react';
export default (props) => {
  return (
    <div class='form-draft-payment'>
      <h4 class='heading-title'>
        <i class='fas fa-info-circle' style={{ color: '#ff5454' }}></i>
        <span style={{ color: '#ff5454' }}> Thông tin sản phẩm, dịch vụ</span>
      </h4>
      <div className='row'>
        <div className='col-6'>
          <h6>Tour Séc - Áo - Hungary - Slovakia 9 ngày 8 đêm</h6>
        </div>
        <div className='col-3'>
          <label>Số người: 3</label>
        </div>
        <div className='col-3'>
          <label>Ngày khởi hành: 26/11/2020</label>
        </div>
      </div>
      <h4 class='heading-title'></h4>
      <div
        className='d-flex justify-content-end'
        style={{ marginTop: '-15px' }}
      >
        <p style={{ color: '#ff5454' }}>Sử dụng mã giảm giá</p>
      </div>
    </div>
  );
};
