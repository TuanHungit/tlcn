import React from 'react';
import ScheduleItem from './scheduleItem';
export default (props) => {
  return (
    <div
      id='detail-content-sticky-nav-05'
      class='fullwidth-horizon-sticky-section'
    >
      <h4 class='heading-title'>Lịch khởi hành</h4>

      <div class='mb-20'></div>

      <div class='item-text-long-wrapper'>
        <div class='item-heading text-muted'>
          <div class='row d-none d-sm-flex'>
            <div class='col-12 col-sm-7'>
              <div class='col-inner'>
                <div class='row gap-10'>
                  <div class='col-5'>Từ ngày</div>

                  <div class='col-2'></div>

                  <div class='col-5'>đến ngày</div>
                </div>
              </div>
            </div>

            <div class='col-12 col-sm-3'>
              <div class='col-inner'>
                <div class='row gap-10'>
                  <div class='col-6 text-right'>giá</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {props.start.map((el, key) => (
          <ScheduleItem
            start={el}
            duration={props.duration}
            price={props.price}
            key={key}
          />
        ))}
      </div>
      <div class='mb-50'></div>
    </div>
  );
};
