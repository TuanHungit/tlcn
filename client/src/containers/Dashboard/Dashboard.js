import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import * as actionCreator from "../../store/actions/profile";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
class Profile extends Component {
  componentDidMount = () => {
    this.props.getAuthProfile()
  }
  render() {
    const status = this.props.loadding ? <Spinner /> : null;
    const errors = this.props.error ? <p>{this.props.error}</p> : null;
    return (
      <div class="main-wrapper scrollspy-container">
        {!this.props.isAuthencated ? (
          <div></div>
        ) : (
          <section class="page-wrapper page-detail">
            <div class="page-title border-bottom pt-25 mb-0 border-bottom-0">
              <div class="container">
                <div class="row gap-15 align-items-center">
                  <div class="col-12 col-md-7">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                          <a href="dashboard.html#">
                            <i class="fas fa-home"></i>
                          </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                          Dashboard
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div class="container pt-30">
              <div class="row gap-20 gap-lg-40">
                <div class="col-12 col-lg-3">
                  <aside class="sticky-kit sidebar-wrapper">
                    <div class="bashboard-nav-box">
                      <div class="box-heading">
                        <h3 class="h6 text-white text-uppercase">
                          You're logged-in as:
                        </h3>
                      </div>
                      <div class="box-content">
                        <div class="dashboard-avatar mb-10">
                          <div class="image">
                            <img src="images/image-man/01.jpg" alt="Image" />
                          </div>
                          <div class="content">
                            <h6>{this.props.user}</h6>
                            <p class="mb-15">Thailand</p>
                          </div>
                        </div>

                        <nav class="menu-vertical-01 mt-20">
                          <ul>
                            <li class="active">
                              <a href="dashboard.html#">Dashboard</a>
                            </li>
                            <li>
                              <a href="dashboard.html#">My profile</a>
                            </li>
                            <li>
                              <a href="dashboard.html#">My booking</a>
                            </li>
                            <li>
                              <a href="dashboard.html#">My Wishlist</a>
                            </li>
                            <li>
                              <Link to="/logout">Logout</Link>
                            </li>
                          </ul>
                        </nav>
                        <p class="font-sm mt-20">
                          Your last logged-in:{" "}
                          <span class="text-primary font700">4 hours ago</span>
                        </p>
                      </div>
                    </div>
                  </aside>
                </div>

                <div class="col-12 col-lg-9">
                  <div class="content-wrapper">
                    <div class="form-draft-payment">
                      <h3 class="heading-title">
                        <span>
                          My <span class="font200"> profile</span>
                        </span>
                      </h3>

                      <div class="clear"></div>

                      <form>
                        <div class="row gap-30">
                      
                          <div class="col-6 col-sm-5 col-md-4 col-lg-4 order-lg-last">
                            <div class="avatar-upload">
                              <img
                                class="profile-pic d-block"
                                src="images/image-man/01.jpg"
                                alt="avatar"
                              />
                              <div class="upload-button text-secondary line-1">
                                <div>
                                  <i class="fas fa-upload text-primary"></i>
                                  <span class="d-block font12 text-uppercase font700 mt-10 text-primary">
                                    Maximum file size:
                                    <br />
                                    250 mb
                                  </span>
                                </div>
                              </div>
                              <input
                                class="file-upload"
                                type="file"
                                accept="image/*"
                              />
                              <div class="labeling">
                                <i class="fas fa-upload"></i> Change avatar
                              </div>
                            </div>
                          </div>
                          
                          <div class="col-12 col-md-12 col-lg-8">
                          {/* {this.props.user.map(c => */}
                            <div class="col-inner">
                              <div class="row gap-20">
                             
                                <div class="col-12 col-sm-6">
                                  
                                  <div class="form-group mb-0">
                                    <label>User name</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      // value="Christine"
                                      value ={this.props.user}
                                    /> 
                                  </div>
                                </div>

                                <div class="col-12 col-sm-6">
                                  <div class="form-group mb-0 chosen-bg-light">
                                    <label>Born</label>
                                    <div class="row gap-5">
                                      <div class="col-4">
                                        <select
                                          data-placeholder="day"
                                          class="chosen-the-basic form-control"
                                          tabindex="2"
                                        >
                                          <option></option>
                                          <option value="1">01</option>
                                          <option value="2" selected>
                                            02
                                          </option>
                                          <option value="3">03</option>
                                        </select>
                                      </div>
                                      <div class="col-4">
                                        <select
                                          data-placeholder="month"
                                          class="chosen-the-basic form-control"
                                          tabindex="2"
                                        >
                                          <option></option>
                                          <option value="1">Jan</option>
                                          <option value="2" selected>
                                            Feb
                                          </option>
                                          <option value="3">Mar</option>
                                        </select>
                                      </div>
                                      <div class="col-4">
                                        <select
                                          data-placeholder="year"
                                          class="chosen-the-basic form-control"
                                          tabindex="2"
                                        >
                                          <option></option>
                                          <option value="1">1985</option>
                                          <option value="2" selected>
                                            1986
                                          </option>
                                          <option value="3">1987</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
  
                                <div class="col-12 col-sm-6">
                                  <div class="form-group mb-0">
                                    <label>Email</label>
                                    <input
                                      type="email"
                                      class="form-control"
                                      value="myemail@gmail.com"
                                      value ={this.props.user}
                                    />
                                  </div>
                                </div>

                                <div class="col-12 col-sm-12">
                                  <div class="form-group mb-0">
                                    <label>Street 1</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="254"
                                    />
                                    <input
                                      type="text"
                                      class="form-control mt-5"
                                    />
                                  </div>
                                </div>

                                <div class="col-12 col-sm-6">
                                  <div class="form-group mb-0">
                                    <label>City/town</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="Somewhere "
                                    />
                                  </div>
                                </div>

                                <div class="col-12 col-sm-6">
                                  <div class="form-group mb-0">
                                    <label>Province/State</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="Paris"
                                    />
                                  </div>
                                </div>

                                <div class="col-12 col-sm-6">
                                  <div class="form-group mb-0">
                                    <label>Zip Code</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="35214"
                                    />
                                  </div>
                                </div>

                                <div class="col-12 col-sm-6">
                                  <div class="form-group  mb-0 chosen-bg-light">
                                    <label>Country</label>
                                    <select
                                      data-placeholder="country"
                                      class="chosen-the-basic form-control"
                                      tabindex="2"
                                    >
                                      <option></option>
                                      <option value="1">Thailand</option>
                                      <option value="2" selected>
                                        France
                                      </option>
                                      <option value="3">China</option>
                                      <option value="4">Malaysia </option>
                                      <option value="5">Italy</option>
                                    </select>
                                  </div>
                                </div>

                                <div class="col-12 col-sm-6">
                                  <div class="form-group mb-0">
                                    <label>Phone Number</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="+66-85-221-5489"
                                    />
                                  </div>
                                </div>
                              
                              </div>
                            
                              <hr class="mt-40 mb-40" />

                              <h5 class="text-uppercase">Social medias</h5>

                              <div class="row gap-20">
                                <div class="col-12 col-sm-8">
                                  <div class="form-group mb-0">
                                    <label>
                                      <i class="fab fa-facebook mr-5"></i>{" "}
                                      Facebook
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="https://www.facebook.com/user"
                                    />
                                  </div>
                                </div>
                                <div class="col-12 col-sm-8">
                                  <div class="form-group mb-0">
                                    <label>
                                      <i class="fab fa-twitter mr-5"></i>{" "}
                                      Twitter
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="https://www.twitter.com/user"
                                    />
                                  </div>
                                </div>
                                <div class="col-12 col-sm-8">
                                  <div class="form-group mb-0">
                                    <label>
                                      <i class="fab fa-google-plus mr-5"></i>{" "}
                                      Google+
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value="https://www.google.com/plus/user"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="mb-30"></div>

                              <div class="row gap-10 mt-15 justify-content-center justify-content-md-start">
                                <div class="col-auto">
                                  <a
                                    href="dashboard.html#"
                                    class="btn btn-primary"
                                  >
                                    Save
                                  </a>
                                </div>
                                <div class="col-auto">
                                  <a
                                    href="dashboard.html#"
                                    class="btn btn-secondary"
                                  >
                                    Cancel
                                  </a>
                                </div>
                              </div>
                            </div>
                          {/* )} */}
                          </div>                      
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadding: state.auth.loadding,
    error: state.auth.error,
    // username:state.auth.username,
    // email:state.auth.email,
    // user: state.user,
    profile: state.profile,
    isAuthencated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => ({
  getAuthProfile: () => dispatch(actionCreator.getAuthProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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
