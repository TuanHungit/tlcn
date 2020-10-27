import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            setShow: false,
            email: " ",
            password: " ",
            token: null,
            user: []
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({
            show: false
        })
    };
    handleClick = (event) => {
        event.prevenDefault();
        axios.post('login', { email: this.state.email, password: this.state.password })
            .then(res => {
                this.data = res.data
                localStorage.setItem('token', this.data.token)
                localStorage.setItem('username', this.data.user.fullname)
                this.setState({ token: this.data.token });
                this.setState({ user: this.data.user.email });
            })
            .catch(err => {
                alert("Vui lòng kiểm tra lại thông tin đăng nhập");
            })
        if (this.data.token != null) {
            return <Redirect to="/" />
        }
    };
    render() {
        const direct = localStorage.getItem('token') ? <Redirect to="/" /> : null;
        return (
            <div>
                {direct}
                <Modal show={this.state.show} onHide={this.handleClose}  >
                    <div className=" tab-content">
                        <div role="tabpanel" className="tab-pane active" id="loginFormTabInModal-login">
                            <div className="form-login">
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        <h3>Welcome Back to SiteName</h3>
                                        <p>Sign in to your account to continue using SiteName</p>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form onSubmit={this.handleClick} >
                                        <div className="d-flex flex-column flex-lg-row align-items-stretch">
                                            <div className=" row flex-md-grow-1 bg-primary-light">
                                                <div className=" col-7 form-inner">
                                                    <div className=" form-group">
                                                        <label className="float-left" >Email address/username</label>
                                                        <input type="email" name="username" validate required onChange={event => this.setState({ email: event.target.value })} className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="float-left">Password</label>
                                                        <input type="password" name="password" validate required onChange={event => this.setState({ password: event.target.value })}
                                                            className="form-control" />
                                                    </div>
                                                    <div className=" row d-flex flex-column flex-md-row mt-25">
                                                        <div className=" col-auto ml-0 ml-md-15 mt-15 mt-md-0">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="loginFormTabInModal-rememberMe" />
                                                                <label className="custom-control-label" for="loginFormTabInModal-rememberMe">Remember me</label>
                                                            </div>
                                                        </div>
                                                        <div className=" col-auto flex-shrink-0">
                                                            <button type="submit" className="btn btn-primary btn-wide">Sign-in</button>
                                                        </div>
                                                        <Link to="/" className=" text-center tab-external-link block mt-25 font600">Forgot password?</Link>
                                                    </div>
                                                </div>
                                                <div className="col-5 form-login-socials">
                                                    <div className="login-socials-inner">
                                                        <h5 className="mb-20">Or sign-up with your socials</h5>
                                                        <button className="btn btn-login-with btn-primary  btn-block"><i className="fab fa-facebook-f"></i> facebook</button>
                                                        <button className="btn btn-login-with btn-danger btn-google btn-block"><i className="fab fa-google-plus"></i> google</button>
                                                        <button className="btn btn-login-with btn-info btn-twitter btn-block"><i className="fab fa-twitter"></i> twitter</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <p>Not a member yet?<Link to="/register"  className=" text-center tab-external-link font600">
                                        Sign up</Link> for free
                                    </p>
                                </Modal.Footer>
                            </div>
                        </div>
                    </div>

                </Modal>
            </div>
        );
    }
}
export default Login