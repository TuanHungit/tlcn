import React from 'react';
export default (props) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div class='item-text-long'>
      <div class='row align-items-center'>
        <div class='col-12 col-sm-7'>
          <div class='col-inner mb-10 mb-sm-0'>
            <div class='row gap-10 align-items-center'>
              <div class='col-5'>
                <strong class='d-block'>
                  {new Date(props.start).toLocaleDateString(undefined, options)}
                </strong>
              </div>

              <div class='col-2'>
                <span class='day-count mt-3'>
                  {props.duration}
                  <br />
                  ngày
                </span>
              </div>

              <div class='col-5 text-right text-sm-left'>
                <strong class='d-block'>
                  {new Date(
                    new Date(props.start).getDate() + props.duration
                  ).toLocaleDateString(undefined, options)}
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div class='col-8 col-sm-3'>
          <div class='col-inner'>
            <div class='row gap-10 align-items-center'>
              <div class='col-6 text-left  text-sm-right'>
                <strong class='d-block'>${props.price}</strong>
                <span class='font-sm'>/ người</span>
              </div>
            </div>
          </div>
        </div>
        <div class='col-4 col-sm-2'>
          <a
            href='tour-detail-02.html#'
            class='btn btn-primary btn-block btn-sm mt-3'
          >
            Đặt Tour ngay!
          </a>
        </div>
      </div>
    </div>
  );
};
