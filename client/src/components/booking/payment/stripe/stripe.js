import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Redirect } from 'react-router-dom';

import axios from '../../../../common/axios-order';
import './stripe.css';

const createPaymentIntent = (options) => {
  return axios
    .post(`/booking/create-payment-intent`, options, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        return null;
      }
    })
    .then((data) => {
      if (!data || data.error) {
        console.log('API error:', { data });
        throw new Error('PaymentIntent API Error');
      } else {
        return data.client_secret;
      }
    });
};
export default function CheckoutForm(props) {
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setProcessing(true);

    createPaymentIntent({
      amount: 39000000,
      currency: 'VND',
      ...props.bookingUserInfo,
    })
      .then(async (clientSecret) => {
        setClientSecret(clientSecret);
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: ev.target.name.value,
            },
          },
        });

        if (payload.error) {
          setError(`Payment failed: ${payload.error.message}`);
          setProcessing(false);
          console.log('[error]', payload.error);
        } else {
          setError(null);
          setSucceeded(true);
          setProcessing(false);
          setMetadata(payload.paymentIntent);
          console.log('[PaymentIntent]', payload.paymentIntent);
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const renderSuccess = () => {
    const bookingData = {
      ...props.bookingInfo,
      tour: props.tourDetail.id,
      user: {
        email: props.bookingUserInfo.email,
        name: props.bookingUserInfo.fullname,
        phone: props.bookingUserInfo.phone,
      },
    };
    props.onCreateBooking(bookingData);
    return (
      <Redirect
        to={{
          pathname: `/tour/Tour-DaNang/booking/success`,
          state: { ...props.tourDetail, ...bookingData },
        }}
      />
    );
  };

  const renderForm = () => {
    const options = {
      style: {
        base: {
          color: '#32325d',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a',
        },
      },
    };

    return (
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-md col-lg-5'>
            <div class='form-group'>
              <label>TÊN CHỦ THẺ</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Tên chủ thẻ'
                autoComplete='cardholder'
                className='sr-input form-control'
                style={{ height: '38px', textTransform: 'uppercase' }}
              />
            </div>
          </div>

          <div className='col-md col-lg-7'>
            <div class='form-group'>
              <label>SỐ THẺ</label>
              <CardElement
                className='sr-input sr-card-element form-control'
                options={options}
              />
            </div>
          </div>
        </div>

        {error && <div className='message sr-field-error'>{error}</div>}

        <button
          onClick={handleSubmit}
          className='btn btn-primary btn-block text-light'
          disabled={processing || !stripe || !props.formIsValid}
        >
          {processing ? (
            <div>
              <span
                class='spinner-border spinner-border-sm'
                role='status'
                aria-hidden='true'
              ></span>
              <span> Đang xử lý…</span>
            </div>
          ) : (
            'Thanh Toán'
          )}
        </button>
      </form>
    );
  };

  return (
    <div className='checkout-form'>
      <div className='sr-payment-form'>
        <div className='sr-form-row' />
        {succeeded ? renderSuccess() : renderForm()}
      </div>
    </div>
  );
}
