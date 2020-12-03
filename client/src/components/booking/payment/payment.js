import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeCheckoutForm from './stripe/stripe';
import './payment.css';
const stripePromise = loadStripe(
  'pk_test_51GYOVxL6ceTfSxmONsG00SRGhgEy12v0le3Yu0MOOvsG1wFSerJMvZRlqZ8YSRWDwjPBTa9iToEmG260hVgjOzln00CVJ5foFx'
);

export default (props) => {
  const [paypal, setPaypal] = useState(false);
  const [card, setCard] = useState(false);
  const clickPaypalHandler = () => {
    setCard(false);
    setPaypal(!paypal);
  };
  const clickCardHandler = () => {
    setPaypal(false);
    setCard(!card);
  };

  return (
    <div>
      <h4 class='heading-title' className='font20'>
        <i class='fas fa-credit-card' style={{ color: '#ff5454' }}></i>
        <span style={{ color: '#ff5454' }}>
          {' '}
          Thông tin thanh toán{' '}
          <small class='font-sm text-muted'>
            / <i class='fas fa-lock'></i> secure
          </small>
        </span>
      </h4>

      <div class='alert alert-info line-145 padding-30' role='alert'>
        <h4 class='alert-heading line-125 mb-5'>Chúc mừng!</h4>
        <p class='lead mb-10 font18'>
          Bạn đã có mức giá tốt nhất chỉ{' '}
          <strong class='text-dark'>$37.71</strong> mỗi người
        </p>
        <hr class='mt-0 mb-10' />
        <p class='mb-0'>
          Giá có thể tăng, vì vậy hãy đảm bảo đặt chỗ ngay hôm nay.
        </p>
      </div>

      <div class='box-payment mt-20 '>
        <div class='row gap-20'>
          <div class='col-6'>
            <div class='payment-option-item'>
              <div class='custom-control custom-radio'>
                <input
                  type='radio'
                  id='BoxPayment-CreditCard'
                  name='BoxPayment'
                  class='custom-control-input'
                  onClick={clickCardHandler}
                />
                <label
                  class='custom-control-label text-muted'
                  for='BoxPayment-CreditCard'
                >
                  <img
                    class='d-inline-block'
                    src='/images/image-payment/payment-credit-cards.jpg'
                    alt='images'
                  />
                  <br />
                  Thanh toán với Credit Card
                </label>
              </div>
            </div>
          </div>

          <div class='col-6'>
            <div class='payment-option-item '>
              <div class='custom-control custom-radio'>
                <input
                  type='radio'
                  id='BoxPayment-paypal'
                  name='BoxPayment'
                  class='custom-control-input'
                  onClick={clickPaypalHandler}
                />
                <label
                  class='custom-control-label text-muted'
                  for='BoxPayment-paypal'
                >
                  <img
                    class='d-inline-block'
                    src='/images/image-payment/payment-paypal.jpg'
                    alt='images'
                  />
                  <br />
                  Thanh toán qua Paypal
                </label>
              </div>
            </div>
          </div>
        </div>

        <Collapse isOpened={card}>
          <div class='payment-form '>
            <h5 className='font16'>
              Tổng số tiền thanh toán của bạn là: $ 150.60 US
            </h5>
            <p className='font14'>
              Số tiền thanh toán sẽ được ghi nợ vào tài khoản của bạn sau khi
              quá trình thanh toán đã hoàn tất.
            </p>
            <h6>Vui lòng điền vào chi tiết tín dụng của bạn</h6>

            <div class='row gap-20 mb-15'>
              <div className='col'>
                <Elements stripe={stripePromise}>
                  <StripeCheckoutForm
                    formIsValid={props.formIsValid}
                    bookingUserInfo={props.bookingUserInfo}
                    tourDetail={props.tourDetail}
                  />
                </Elements>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse isOpened={paypal}>
          <div class='payment-form'>
            <h5 className='font16'>
              Tổng số tiền thanh toán của bạn là: $ 150.60 US
            </h5>
            <p className='font14'>
              Số tiền thanh toán sẽ được ghi nợ vào tài khoản của bạn sau khi
              quá trình thanh toán đã hoàn tất.
            </p>

            <p className='font14'>
              Sau khi nhấp vào 'Đặt ngay', bạn sẽ được chuyển đến Paypal để hoàn
              tất thanh toán.{' '}
              <strong>
                Bạn phải hoàn tất quá trình này nếu không việc đặt Tour sẽ dừng
                lại.{' '}
              </strong>
            </p>

            <a href='tour-payment.html#' class='btn btn-dark'>
              Tiếp tục đến Paypal
            </a>
          </div>
        </Collapse>
      </div>
    </div>
  );
};
