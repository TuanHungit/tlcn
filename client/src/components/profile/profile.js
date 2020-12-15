import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    if (elem.target.files[0].size > 716800) {
      alert('File is too big!');
      elem.target.value = '';
    }
  };
  console.log(preview);
  return (
    <div
      class='main-wrapper scrollspy-container'
      style={{ backgroundColor: '#f3f3f3' }}
    >
      <section class='page-wrapper page-detail'>
        <div class='page-title border-bottom mb-0 border-bottom-0'>
          <div class='container'>
            <div class='row gap-15 align-items-center'>
              <div class='col-12 col-md-7'>
                <nav aria-label='breadcrumb'>
                  <ol class='breadcrumb'>
                    <li class='breadcrumb-item'>
                      <a href='dashboard.html#'>
                        <i class='fas fa-home'></i>
                      </a>
                    </li>
                    <li class='breadcrumb-item active' aria-current='page'>
                      Trang thông tin cá nhân
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div class='container pt-30' style={{ backgroundColor: '#fff' }}>
          <div class='row gap-20 gap-lg-40'>
            <div class='col-12 col-lg-3'>
              <aside class='sticky-kit sidebar-wrapper'>
                <div class='bashboard-nav-box'>
                  <div class='box-heading'>
                    <h3 class='h6 text-white text-uppercase'>
                      Bạn đã đăng nhập với tài khoản:
                    </h3>
                  </div>
                  <div class='box-content'>
                    <div class='dashboard-avatar mb-10'>
                      <div class='image'>
                        <img src={props.photo} alt='Image' />
                      </div>

                      <div class='content'>
                        <h6>{name}</h6>
                      </div>
                    </div>

                    <nav class='menu-vertical-01 mt-20'>
                      <ul>
                        <li>
                          <a href='dashboard.html#'>Trang thông tin cá nhân</a>
                        </li>
                        <li>
                          <a href='dashboard.html#'>Quản lý booking</a>
                        </li>
                        <li>
                          <a href='dashboard.html#'>Danh sách Tour yêu thích</a>
                        </li>
                        <li>
                          <Link to='/logout'>Đăng xuất</Link>
                        </li>
                      </ul>
                    </nav>

                    <p class='font-sm mt-20'>
                      Lần đăng nhập cuối cùng của bạn:{' '}
                      <span class='text-primary font700'>4 giờ trước</span>
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            <div class='col-12 col-lg-9'>
              <div class='content-wrapper'>
                <div class='form-draft-payment'>
                  <h3 class='heading-title'>
                    <span>
                      Trang <span class='font200'> thông tin cá nhân</span>
                    </span>
                  </h3>

                  <div class='clear'></div>

                  <form>
                    <div class='row gap-30'>
                      <div class='col-6 col-sm-5 col-md-4 col-lg-4 order-lg-last'>
                        {/* <div class='avatar-upload'>
                          <img
                            class='profile-pic d-block'
                            src={props.photo}
                            alt='avatar'
                          />
                          <div class='upload-button text-secondary line-1'>
                            <div>
                              <i class='fas fa-upload text-primary'></i>

                              <input
                                type='file'
                                class=' font10 text-uppercase font700 mt-10 text-primary'
                              />
                            </div>
                          </div>
                          <input
                            class='file-upload'
                            type='file'
                            accept='image/*'
                          />
                          <div class='labeling'>
                            <i class='fas fa-upload'></i> Thay đổi avatar
                          </div>
                        </div> */}
                        <Avatar
                          width={'100%'}
                          height={200}
                          onCrop={onCrop}
                          onClose={onClose}
                          onImageLoad={onCrop}
                          onBeforeFileLoad={onBeforeFileLoad}
                          src={avatar}
                        />
                        {preview !== null ? (
                          <div>
                            <p className=' font12 text-uppercase font700 mt-10 text-primary'>
                              Xem trước
                            </p>

                            <img
                              src={preview}
                              alt='Xem trước'
                              style={{ width: '90%' }}
                            />
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
                                />
                              </div>
                            </div>
                          </div>

                          <div class='mb-30'></div>

                          <div class='row gap-10 mt-15 justify-content-center justify-content-md-start'>
                            <div class='col-auto'>
                              <a href='dashboard.html#' class='btn btn-primary'>
                                Cập nhật
                              </a>
                            </div>
                            <div class='col-auto'>
                              <a
                                href='dashboard.html#'
                                class='btn btn-secondary'
                              >
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* </form><a id="back-to-top" href="dashboard.html#" class="back-to-top" role="button" title="Click to return to top" data-toggle="tooltip" data-placement="left"><i class="elegent-icon-arrow_carrot-up"></i></a> */
/* <!-- JS -->
	<script type="text/javascript" src="js/jquery-2.2.4.min.js"></script>
	<script type="text/javascript" src="js/plugins.js"></script>
	<script type="text/javascript" src="js/custom-core.js"></script>
	<script>

		var readURL = function(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();

				reader.onload = function (e) {
					$('.profile-pic').attr('src', e.target.result);
				}
		
				reader.readAsDataURL(input.files[0]);
			}
		}
	   
		$(".file-upload").on('change', function(){
			readURL(this);
		});
		
		$(".upload-button").on('click', function() {
		   $(".file-upload").click();
		});

	</script> */
