import React, { Component } from 'react'
import axios from "axios";
import { Link, Redirect } from 'react-router-dom'

import { Modal } from 'react-bootstrap'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            setShow: false,
            fullname:null,
            username: null,
            email: null,
            password: null,
            state: false
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose() {
        this.setState({
            show: false
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            alert("Mật khẩu không khớp!");
        }
        else {
            axios.post('register', this.state)
                .then(res => {
                    localStorage.setItem('state', res.data.state)
                })
                .catch(err => {
                    alert("Email đã được đăng ký!")
                })
        }
    };
    render() {
        const state = localStorage.getItem('state') ? <Redirect to="/login" /> : false;
        return (
            <div>
                {state}
                <Modal show={this.state.show} onHide={this.handleClose}  >
                    <div className=" tab-content">
                        <div role="tabpanel" className="tab-pane active" id="loginFormTabInModal-register">
                            <div className="form-login">
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        <h4>Join SiteName for Free</h4>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form onSubmit={this.handleSubmit} >
                                        <div className="d-flex flex-column flex-lg-row align-items-stretch">
                                            <div className=" row flex-md-grow-1 bg-primary-light">
                                                <div className="col-7 form-inner">
                                                    <div className="form-group">
                                                        <label>Full name</label>
                                                        <input type="text" name="fullname" onChange={event => this.setState({ username: event.target.value })}
                                                            className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Email adress</label>
                                                        <input type="email" name="username" onChange={event => this.setState({ email: event.target.value })}
                                                            className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input type="password" name="password" onChange={event => this.setState({ password: event.target.value })}
                                                            className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Confirm password</label>
                                                        <input type="password" name="confirmPassword" onChange={event => this.setState({ confirmPassword: event.target.value })}
                                                            className="form-control" />
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
                                        <div className="d-flex flex-column flex-md-row mt-30 mt-lg-10">
                                            <div className="flex-shrink-0">
                                                <button type="submit" className="btn btn-primary btn-wide mt-5">Sign-up</button>
                                            </div>
                                            <div className="pt-1 ml-0 ml-md-15 mt-15 mt-md-0">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="loginFormTabInModal-acceptTerm" />
                                                    <label className="custom-control-label line-145" for="loginFormTabInModal-acceptTerm">By clicking this, you are agree to to our <a href="dashboard.html#">terms of use</a> and <a href="dashboard.html#">privacy policy</a> including the use of cookies</label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <p>Already a member? <Link to="/login" className="tab-external-link font600">Sign in</Link></p>
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