import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Avatar from 'react-avatar-edit';
export default (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState();
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [avatar, setAvatar] = useState(props.photo);
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    setName(props.user.name);
    setEmail(props.user.email);
    setAddress(props.profile.address);
    setDateOfBirth(new Date(props.profile.dateOfBirth));
    setPhoneNumber(props.profile.phoneNumber);
    setFacebookUrl(props.profile.facebookUrl);
    setTwitterUrl(props.profile.twitterUrl);
  }, []);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };
  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 80000) {
      alert('Kích thước ảnh quá lớn!');
      elem.target.value = '';
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      dateOfBirth,
      address,
      phoneNumber,
      facebookUrl,
      twitterUrl,
      photo: preview,
    };
    props.onUpdateProfile(data);
  };
  return (
    <div class='content-wrapper'>
      <div class='form-draft-payment'>
        <h3 class='heading-title'>
          <span>
            Trang <span class='font200'> thông tin cá nhân</span>
          </span>
        </h3>

        <div class='clear'></div>

        <form onSubmit={onSubmitHandler}>
          <div class='row gap-30'>
            <div class='col-6 col-sm-5 col-md-4 col-lg-4 order-lg-last'>
              <Avatar
                width={'100%'}
                height={200}
                onCrop={onCrop}
                onClose={onClose}
                onImageLoad={onCrop}
                onBeforeFileLoad={onBeforeFileLoad}
                src={avatar}
                label='Chọn hình ảnh tốt đa 70KB'
              />
              {preview !== null ? (
                <div>
                  <p className=' font12 text-uppercase font700 mt-10 text-primary'>
                    Xem trước
                  </p>
                  <div className='d-flex  justify-content-center'>
                    <img
                      src={preview}
                      alt='Xem trước'
                      style={{ width: '70%' }}
                    />
                  </div>
                </div>
              ) : null}
            </div>

            <div class='col-12 col-md-12 col-lg-8'>
              <div class='col-inner'>
                <div class='row gap-20'>
                  <div class='col-12 col-sm-6'>
                    <div class='form-group mb-0'>
                      <label>Họ và tên</label>
                      <input
                        disabled
                        type='text'
                        class='form-control'
                        value={name}
                        required
                      />
                    </div>
                  </div>
                  <div class='col-12 col-sm-6'>
                    <div class='form-group mb-0 chosen-bg-light'>
                      <label>Ngày sinh</label>
                      <DatePicker
                        selected={dateOfBirth}
                        onChange={(date) => {
                          setDateOfBirth(date);
                        }}
                        isClearable
                        className='form-control w-100'
                        placeholderText='Vui lòng chọn ngày sinh!'
                        required
                      />
                    </div>
                  </div>

                  <div class='col-12 col-sm-6'>
                    <div class='form-group mb-0'>
                      <label>Địa chỉ Email</label>
                      <input
                        type='email'
                        disabled
                        class='form-control'
                        placeholder='myemail@gmail.com'
                        value={email}
                        required
                      />
                    </div>
                  </div>

                  <div class='col-12 col-sm-6'>
                    <div class='form-group  mb-0 chosen-bg-light'>
                      <label>Địa chỉ</label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='Địa chỉ của bạn'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div class='col-12 col-sm-6'>
                    <div class='form-group mb-0'>
                      <label>Số điện thoại</label>
                      <input
                        type='text'
                        class='form-control'
                        value={phoneNumber}
                        placeholder='+66-85-221-5489'
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <hr class='mt-40 mb-40' />

                <h5 class='text-uppercase'>Thông tin mạng xã hội</h5>

                <div class='row gap-20'>
                  <div class='col-12 col-sm-8'>
                    <div class='form-group mb-0'>
                      <label>
                        <i class='fab fa-facebook mr-5'></i> Facebook
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='https://www.facebook.com/plus/user'
                        value={facebookUrl}
                        onChange={(e) => setFacebookUrl(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class='col-12 col-sm-8'>
                    <div class='form-group mb-0'>
                      <label>
                        <i class='fab fa-twitter mr-5'></i> Twitter
                      </label>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='https://www.twitter.com/plus/user'
                        value={twitterUrl}
                        onChange={(e) => setTwitterUrl(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div class='mb-30'></div>

                <div class='row gap-10 mt-15 justify-content-center justify-content-md-start'>
                  <div class='col-auto'>
                    <button class='btn btn-primary' type='submit'>
                      Cập nhật
                    </button>
                  </div>
                  <div class='col-auto'>
                    <a href='dashboard.html#' class='btn btn-secondary'>
                      Bỏ qua
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
