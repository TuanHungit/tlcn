import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'

class LoginComponent extends Component {
    render() 
    {
        return (
            <div className="modal fade modal-with-tabs form-login-modal" id="loginFormTabInModal" aria-labelledby="modalWIthTabsLabel" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content shadow-lg">
                        <nav className="d-none">
                            <ul className="nav external-link-navs clearfix">
                                <li><a className="active" data-toggle="tab" href="dashboard.html#loginFormTabInModal-login">Sign-in</a></li>
                                <li><a data-toggle="tab" href="dashboard.html#loginFormTabInModal-register">Register </a></li>
                                <li><a data-toggle="tab" href="dashboard.html#loginFormTabInModal-forgot-pass">Forgot Password </a></li>
                            </ul>
                        </nav>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="loginFormTabInModal-login">
                                <div className="form-login">
                                    <div className="form-header">
                                        <h4>Welcome Back to SiteName</h4>
                                        <p>Sign in to your account to continue using SiteName</p>
                                    </div>
                                    <div className="form-body">
                                        <form method="post" action="dashboard.html#">
                                            <div className="d-flex flex-column flex-lg-row align-items-stretch">
                                                <div className="flex-md-grow-1 bg-primary-light">
                                                    <div className="form-inner">
                                                        <div className="form-group">
                                                            <label>Email adress/username</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Password</label>
                                                            <input type="password" className="form-control" />
                                                        </div>
                                                        <div className="d-flex flex-column flex-md-row mt-25">
                                                            <div className="flex-shrink-0">
                                                                <a href="dashboard.html#" className="btn btn-primary btn-wide">Sign-in</a>
                                                            </div>
                                                            <div className="ml-0 ml-md-15 mt-15 mt-md-0">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="loginFormTabInModal-rememberMe"/>
                                                                    <label className="custom-control-label" for="loginFormTabInModal-rememberMe">Remember me</label>
											                    </div>
                                                            </div>
                                                            <a href="dashboard.html#loginFormTabInModal-forgot-pass" className="tab-external-link block mt-25 font600">Forgot password?</a>
                                                        </div>
                                                    </div>
                                                    <div className="form-login-socials">
                                                        <div className="login-socials-inner">
                                                            <h5 className="mb-20">Or sign-up with your socials</h5>
                                                            <button className="btn btn-login-with btn-facebook btn-block"><i className="fab fa-facebook"></i> facebook</button>
                                                            <button className="btn btn-login-with btn-google btn-block"><i className="fab fa-google"></i> google</button>
                                                            <button className="btn btn-login-with btn-twitter btn-block"><i className="fab fa-twitter"></i> google</button>
                                                        </div>
                                                    </div>
                                                </div>
							                </div>
								        </form>				
							        </div>
                                    <div className="form-footer">
                                        <p>Not a member yet? <a href="dashboard.html#loginFormTabInModal-register" className="tab-external-link font600">Sign up</a> for free</p>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade in" id="loginFormTabInModal-register">
                                    <div className="form-login">
                                        <div className="form-header">
                                            <h4>Join SiteName for Free</h4>
                                            <p>Access thousands of online classes in design, business, and more!</p>
                                        </div>
                                        <div className="form-body">
                                            <form method="post" action="dashboard.html#">
                                                <div className="d-flex flex-column flex-lg-row align-items-stretch">
                                                    <div className="flex-grow-1 bg-primary-light">
                                                        <div className="form-inner">
                                                            <div className="form-group">
                                                                <label>Full name</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Email adress</label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                            <div className="row cols-2 gap-10">
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label>Password</label>
                                                                        <input type="password" className="form-control" />
                                                                    </div>
                                                                </div>
                                                                <div className="col">
                                                                    <div className="form-group">
                                                                        <label>Confirm password</label>
                                                                        <input type="password" className="form-control" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-login-socials">
                                                        <div className="login-socials-inner">
                                                            <h5 className="mb-20">Or sign-in with your socials</h5>
                                                            <button className="btn btn-login-with btn-facebook btn-block"><i className="fab fa-facebook"></i> facebook</button>
                                                            <button className="btn btn-login-with btn-google btn-block"><i className="fab fa-google"></i> google</button>
                                                            <button className="btn btn-login-with btn-twitter btn-block"><i className="fab fa-twitter"></i> google</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column flex-md-row mt-30 mt-lg-10">
                                                    <div className="flex-shrink-0">
                                                        <a href="dashboard.html#" className="btn btn-primary btn-wide mt-5">Sign-up</a>
                                                    </div>
                                                    <div className="pt-1 ml-0 ml-md-15 mt-15 mt-md-0">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="loginFormTabInModal-acceptTerm"/>
                                                            <label className="custom-control-label line-145" for="loginFormTabInModal-acceptTerm">By clicking this, you are agree to to our <a href="dashboard.html#">terms of use</a> and <a href="dashboard.html#">privacy policy</a> including the use of cookies</label>
							                        	</div>
                                                    </div>
                                                </div>	
			            					</form>							
				            			</div>
                                        <div className="form-footer">
                                            <p>Already a member? <a href="dashboard.html#loginFormTabInModal-login" className="tab-external-link font600">Sign in</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade in" id="loginFormTabInModal-forgot-pass">
                                    <div className="form-login">
                                        <div className="form-header">
                                            <h4>Lost your password?</h4>
                                            <p>Please provide your detail.</p>
                                        </div>
                                        <div className="form-body">
                                            <form method="post" action="dashboard.html#">
                                                <p className="line-145">We'll send password reset instructions to the email address associated with your account.</p>
                                                <div className="row">
                                                    <div className="col-12 col-md-10 col-lg-8">
                                                        <div className="form-group">
                                                            <input type="password" className="form-control" placeholder="password" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary mt-5">Retreive password</button>
                                            </form>
                                        </div>

                                        <div className="form-footer">
                                            <p>Back to <a href="dashboard.html#loginFormTabInModal-login" className="tab-external-link font600">Sign in</a> or <a href="dashboard.html#loginFormTabInModal-register" className="tab-external-link font600">Sign up</a></p>
                                        </div>

                                    </div>
                                </div>
                                </div>

                                {/* <div className="text-center pb-20">
                                    <button type="button" className="close" data-dismiss="modal" aria-labelledby="Close">
                                        <span aria-hidden="true"><i className="far fa-times-circle"></i></span>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>              
             )
        }
}
export default LoginComponent;