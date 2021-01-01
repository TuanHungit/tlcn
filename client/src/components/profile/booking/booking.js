import React, { useState, useEffect, useRef } from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import ConvertDateToView from '../../../common/convertDateForView';
import ConvertPriceToView from '../../../common/convertPriceForView';
import { Link } from 'react-router-dom';
import './booking.css';
export default (props) => {
  const [tourName, setTourName] = useState();
  const [bookingId, setBookingId] = useState(0);
  const [policy, setPolicy] = useState();
  const [checked, setChecked] = useState(false);
  const [updated, setUpdated] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (props.bookingList === null) {
      props.onFetchBookingFromUser();
    }
    return;
  }, [props.bookingList]);
  useEffect(() => {
    if (updated) {
      props.onFetchBookingFromUser();
      setUpdated(false);
    }
  }, [updated]);
  const getValueStatus = (status) => {
    switch (status) {
      case 'cancel':
        return 'Đã hủy';
      case 'waiting':
        return 'Đang chờ';
      default:
        return 'Đã xong';
    }
  };
  let bookingList = <Spinner />;
  if (props.bookingList) {
    bookingList = (
      <div class='content-wrapper'>
        <div class='form-draft-payment'>
          <h3 class='heading-title'>
            <span>
              Trang <span class='font200'> quản lý booking</span>
            </span>
          </h3>

          <div class='clear'></div>
          <table class=' table-responsive table-sm  table-striped table-hover table-bordered'>
            <thead>
              <tr>
                <th scope='col'>STT</th>
                <th scope='col'>Tour</th>
                <th scope='col'>Ngày khởi hành</th>
                <th scope='col'>Số người</th>
                <th scope='col'>Tổng tiền</th>
                <th scope='col'>Tình trạng</th>
                <th scope='col'>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(props.bookingList).map((el, key) => (
                <tr>
                  <th scope='row'>{key + 1}</th>
                  <td>
                    <Link to={`/tour/${el.tour.slug}`}>{el.tour.name}</Link>{' '}
                  </td>
                  <td>{ConvertDateToView(el.startDate)}</td>
                  <td>{el.numOfPersonAdults}</td>
                  <td>{ConvertPriceToView(el.total)}</td>
                  <td>{getValueStatus(el.status)}</td>
                  <td>
                    <a
                      data-toggle='modal'
                      data-target='#cancelTourModal'
                      data-backdrop='static'
                      data-keyboard='false'
                      onClick={(e) => {
                        setTourName(el.tour.name);
                        setBookingId(el.id);
                        setPolicy(el.tour.policy);
                        setChecked(false);
                      }}
                    >
                      <i class='fas fa-backspace'></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            class='modal fade  form-login-modal'
            id='cancelTourModal'
            tabindex='-1'
            role='dialog'
            aria-labelledby='cancelTourModal'
            aria-hidden='true'
          >
            <div class='modal-dialog' role='document'>
              <div class='modal-content'>
                <div class='modal-header'>
                  <h5 class='modal-title' id='cancelTourModal'>
                    Xác nhận hủy tour {tourName}
                  </h5>
                  <button
                    type='button'
                    class='close'
                    data-dismiss='modal'
                    aria-label='Close'
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div class='modal-body'>
                  <h4>Vui lòng đọc kỹ chính sách Tour trước khi hủy</h4>
                  <div className='policy'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: policy,
                      }}
                    />
                  </div>

                  <div class='custom-control custom-checkbox pt-2'>
                    <input
                      id='formDraftPayment02-terms'
                      name='formDraftPayment02-terms'
                      type='checkbox'
                      defaultChecked={checked}
                      class='custom-control-input'
                      value='paymentsCreditCard'
                      onChange={(e) => setChecked(!checked)}
                      required
                    />
                    <label
                      class='custom-control-label'
                      for='formDraftPayment02-terms'
                    >
                      Tôi đã đọc và đồng ý với <a>Điều khoản và Quy định</a>
                    </label>
                  </div>
                </div>
                <div class='modal-footer'>
                  <button
                    type='button'
                    className={`btn btn-primary ${!checked ? 'disabled' : ''}`}
                    onClick={(e) => {
                      props.onUpdateBooking(bookingId, { status: 'cancel' });
                      setUpdated((state) => !state);
                      buttonRef.current.click();
                    }}
                  >
                    Hủy tour
                  </button>
                  <button
                    type='button'
                    class='btn btn-secondary'
                    data-dismiss='modal'
                    ref={buttonRef}
                  >
                    Bỏ qua
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>{bookingList}</div>;
};
