import React from 'react';
import ToPriceForView from '../../../../common/convertPriceForView';
export default (props) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div class='item-text-long pr-3'>
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
                    new Date(props.start).getTime() +
                      props.duration * 24 * 60 * 60 * 1000
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
                <strong class='d-block'>
                  {props.priceAdults ? ToPriceForView(props.priceAdults) : null}
                </strong>
                <span class='font-sm'>/ người</span>
              </div>
            </div>
          </div>
        </div>
        <div class='col-4 col-sm-2'>
          <a
            class='btn btn-primary btn-block btn-sm mt-3 text-light'
            onClick={() => {
              props.changeDateHandler(props.start);
              props.closeModalHandler();
            }}
          >
            Chọn lịch!
          </a>
        </div>
      </div>
    </div>
  );
};
