import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
//import AuthenticationService from './AuthenticationService.js'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isOpen: true,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose(this);
        this.toggle = this.toggle(this);
    }
    handleShow() {
        this.setState({
            show: true,
            isOpen: true,
        });
    }
    handleOpen = () => {
        this.setState({ isOpen: true });
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    };
    toggle = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        let obj = {
            dangnhap: 'Đăng nhập',
            link: 'dangky',
            dangky: 'Đăng ký',
        };
        if (this.props.token != null) {
            obj.dangnhap = localStorage.getItem('fullname');
            obj.dangky = 'Đăng xuất';
        }
        return (
            <header id='header-waypoint-sticky'
                class='header-main header-mobile-menu with-absolute-navbar' >
                <div class='header-outer clearfix'>
                    <div class='header-inner'>
                        <div class='row shrink-auto-lg gap-0 align-items-center'>
                            <div class='col-5 col-shrink'>
                                <div class='col-inner'>
                                    <div class='main-logo'>
                                        <a href='index.html'>
                                            <img src='images/logo.png' alt='images' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class='col-7 col-shrink order-last-lg'>
                                <div class='col-inner'>
                                    <ul class='nav-mini-right'>
                                        <li class='d-none d-sm-block'>
                                            <a
                                                href='/register'
                                                data-toggle='modal'
                                                data-target='#loginFormTabInModal'
                                                data-backdrop='static'
                                                data-keyboard='false'>
                                                <span class='icon-font'>
                                                    <i class='icon-user-follow'></i>
                                                </span>{' '}
                                                Register
                                            </a>
                                        </li>
                                        <li class='d-none d-sm-block'>
                                            <a
                                                href="/login"
                                                data-toggle='modal'
                                                data-target='#loginFormTabInModal'
                                                data-backdrop='static'
                                                data-keyboard='false'>
                                                <span class='icon-font'>
                                                    <i class='icon-login'></i>
                                                </span>{' '}
                                                Login
                                            </a>
                                        </li>
                                        <li class='d-block d-sm-none'>
                                            <a
                                                href='tour-detail-02.html#loginFormTabInModal-register'
                                                data-toggle='modal'
                                                data-target='#loginFormTabInModal'
                                                data-backdrop='static'
                                                data-keyboard='false' >
                                                Login / Register
                                             </a>
                                        </li>
                                        <li>
                                            <button
                                                class='btn btn-toggle collapsed'
                                                data-toggle='collapse'
                                                data-target='#mobileMenu'
                                            ></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class='col-12 col-auto'>
                                <div class='navbar-wrapper'>
                                    <div class='navbar navbar-expand-lg'>
                                        <div id='mobileMenu' class='collapse navbar-collapse'>
                                            <nav class='main-nav-menu main-menu-nav navbar-arrow'>
                                                <ul class='main-nav'>
                                                    <li>
                                                        <a href='index.html'>Home</a>
                                                    </li>
                                                    <li>
                                                        <a href='http://crenoveative.com/envato/gijalan/result-grid.html'>
                                                            Tour Package
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href='tour-result-list.html'>
                                                                    Result - List
                                                                 </a>
                                                            </li>
                                                            <li>
                                                                <a href='tour-detail.html'>Detail 01</a>
                                                            </li>

                                                            <li>
                                                                <a href='destinations-01.html'>
                                                                    Destinations 01
                                                                 </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href='javascript:void(0)'>Blog</a>
                                                        <ul>
                                                            <li>
                                                                <a href='blog-01.html'> Blog - Grid Full 01</a>
                                                            </li>
                                                            <li>
                                                                <a href='blog-02.html'> Blog - Grid Full 02</a>
                                                            </li>
                                                            <li>
                                                                <a href='blog-03.html'> Blog - Long Full 01</a>
                                                            </li>
                                                            <li>
                                                                <a href='blog-04.html'> Blog - Long Full 02</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href='javascript:void(0)'>Pages</a>
                                                        <ul>
                                                            <li>
                                                                <a href='about-us.html'>About Us</a>
                                                            </li>
                                                            <li>
                                                                <a href='service.html'>Service</a>
                                                            </li>
                                                            <li>
                                                                <a href='service-single.html'>Service Single</a>
                                                            </li>
                                                            <li>
                                                                <a href='faq.html'>FAQ</a>
                                                            </li>
                                                            <li>
                                                                <a href='privacy-and-term.html'>
                                                                    Privacy and Term
                                                                  </a>
                                                            </li>
                                                            <li>
                                                                <a href='error-404.html'>Error 404</a>
                                                            </li>
                                                            <li>
                                                                <a href='dashboard.html'>Dashboard</a>
                                                            </li>
                                                            <li>
                                                                <a href='javascript:void(0)'>Shortcode</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href='shortcode-typography.html'>
                                                                            Typography
                                                                       </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='shortcode-element.html'>Element</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='shortcode-layout-fullwidth.html'>
                                                                            Layout Fullwidth
                                    </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='shortcode-layout-left-sidebar.html'>
                                                                            Layout Left Sidebar
                                    </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href='shortcode-layout-right-sidebar.html'>
                                                                            Layout Right Sidebar
                                    </a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href='contact-us.html'>Contact us</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );

        //   <Navbar className=" mb-5 navbar-expand-md navbar-dark bg-dark">
        //         <Navbar.Brand className="brand pl-5 text-white " ><a href="/">Web du lịch</a></Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="mr-auto">
        //                 <Nav.Link href="/">Trang chủ</Nav.Link>
        //                 <NavDropdown onMouseMove={this.handleShow}
        //                     onMouseLeave={this.handleClose}
        //                     isOpen={this.state.isOpen}
        //                     toggle={this.toggle}
        //                     className="dropdown" title="Tour" id="basic-nav-dropdown">
        //                     <NavDropdown.Item ><Link to="/">Bắc</Link></NavDropdown.Item>
        //                     <NavDropdown.Item ><Link to="/">Trung</Link></NavDropdown.Item>
        //                     <NavDropdown.Item  ><Link to="/">Nam</Link></NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item  ><Link to="/">Quốc tế</Link></NavDropdown.Item>
        //                 </NavDropdown>
        //                 <Nav.Link href="/blog">Blog</Nav.Link>
        //             </Nav>
        //             <Nav className="justify-content-end">
        //                 <Nav.Link >
        //                     <Link to="/login" className="nav-link" >{obj.dangnhap}</Link>
        //                 </Nav.Link>
        //                 <Nav.Link >
        //                     <Link to="/register" className="nav-link" >{obj.dangky}</Link>
        //                 </Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Navbar>
    }
}
export default HeaderComponent;
