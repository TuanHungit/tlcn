import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Spinner } from 'react-bootstrap';
import './stripe.css';
import axios from '../../../../common/axios-order';
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
export default function CheckoutForm() {
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Step 2: Create PaymentIntent over Stripe API
    createPaymentIntent({
      amount: 39000000,
      currency: 'VND',
    })
      .then((clientSecret) => {
        setClientSecret(clientSecret);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setProcessing(true);

    // Step 3: Use clientSecret from PaymentIntent and the CardElement
    // to confirm payment with stripe.confirmCardPayment()

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
  };

  const renderSuccess = () => {
    return (
      <div className='sr-field-success message'>
        <h1>Your test payment succeeded</h1>
        <p>View PaymentIntent response:</p>
        <pre className='sr-callout'>
          <code>{JSON.stringify(metadata, null, 2)}</code>
        </pre>
      </div>
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
                style={{ height: '38px' }}
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
          disabled={processing || !stripe}
        >
          {processing ? (
            <div>
              <Spinner
                as='span'
                animation='border'
                size='sm'
                role='status'
                aria-hidden='true'
              />
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
