import React from 'react';
import './benefit.css';

export default () => {
  return (
    <div class='container'>
      <div
        class='row cols-1 cols-lg-3 gap-20 gap-lg-40'
        style={{ marginTop: '-20px' }}
      >
        <div class='col'>
          <div class='featured-icon-horizontal-01 clearfix featured-1'>
            <div class='icon-font'>
              <i class=' text-danger elegent-icon-gift_alt text-primary'></i>
            </div>
            <div class='content'>
              <h6>GIÁ TỐT - NHIỀU ƯU ĐÃI</h6>
              <p class='text-muted'>
                Ưu đãi và quà tặng hấp dẫn khi mua tour online.
              </p>
            </div>
          </div>
        </div>

        <div class='col'>
          <div class='featured-icon-horizontal-01 clearfix featured-2'>
            <div class='icon-font'>
              <i class='text-danger elegent-icon-wallet text-primary'></i>
            </div>
            <div class='content'>
              <h6>THANH TOÁN AN TOÀN</h6>
              <p class='text-muted'>
                Được bảo mật bởi tổ chức quốc tế Global Sign.
              </p>
            </div>
          </div>
        </div>

        <div class='col'>
          <div class='featured-icon-horizontal-01 clearfix featured-3'>
            <div class='icon-font'>
              <i class='text-danger elegent-icon-heart_alt text-primary'></i>
            </div>
            <div class='content'>
              <h6>THƯƠNG HIỆU UY TÍN</h6>
              <p class='text-muted'>Thương hiệu lữ hành hàng đầu Việt Nam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
