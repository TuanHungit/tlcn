import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
//import AuthenticationService from './AuthenticationService.js'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isOpen: true

        }
        this.handleShow = this.handleShow.bind(this)
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose= this.handleClose(this);
        this.toggle= this.toggle(this);

    }
    handleShow() {
        this.setState({
            show: true,
            isOpen: true
        })
    }
    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }
    toggle = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        let obj = {
            dangnhap: "Đăng nhập",
            link: "dangky",
            dangky: "Đăng ký"
        }
        if (this.props.token != null) {
            obj.dangnhap = localStorage.getItem('fullname');
            obj.dangky = "Đăng xuất"
        }
        return (
            <Navbar className=" mb-5 navbar-expand-md navbar-dark bg-dark">
                <Navbar.Brand className="brand pl-5 text-white " ><a href="/">Web du lịch</a></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Trang chủ</Nav.Link>
                        <NavDropdown onMouseMove={this.handleShow}
                            onMouseLeave={this.handleClose}
                            isOpen={this.state.isOpen}
                            toggle={this.toggle}
                            className="dropdown" title="Tour" id="basic-nav-dropdown">
                            <NavDropdown.Item ><Link to="/">Bắc</Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to="/">Trung</Link></NavDropdown.Item>
                            <NavDropdown.Item  ><Link to="/">Nam</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item  ><Link to="/">Quốc tế</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link >
                            <Link to="/login" className="nav-link" >{obj.dangnhap}</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/register" className="nav-link" >{obj.dangky}</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
        //<div className=" mb-5 navbar navbar-expand-md navbar-dark bg-dark">
        //     <a className="pl-5 text-white ">Web du lịch</a>
        //     <ul className="navbar-nav mr-auto">
        //         <li className="nav-item ">
        //             <Link className="nav-link" to="/">Trang chủ</Link>
        //         </li>
        //         <li className="nav-item active ">
        //             <NavDropdown onMouseMove={this.handleOpen}
        //                 onMouseLeave={this.handleClose}
        //                 isOpen={true}
        //                 toggle={this.toggle}
        //                 className="dropdown" title="Tour" id="basic-nav-dropdown">
        //                 <NavDropdown.Item  ><Link to="/">Bắc</Link></NavDropdown.Item>
        //                 <NavDropdown.Item ><Link to="/">Trung</Link></NavDropdown.Item>
        //                 <NavDropdown.Item ><Link to="/">Nam</Link></NavDropdown.Item>
        //                 <NavDropdown.Divider />
        //                 <NavDropdown.Item ><Link to="/">Quốc tế</Link></NavDropdown.Item>
        //             </NavDropdown>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/blog" className="nav-link" >Blog</Link>
        //         </li>
        //     </ul>
        //     <ul className="navbar-nav navbar-collapse justify-content-end">
        //         <li className="nav-item">
        //             <Link to="/login" className="nav-link" >{obj.dangnhap}</Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link to="/register" className="nav-link" >{obj.dangky}</Link>
        //         </li>
        //     </ul>
        // </div>
    }
}
export default HeaderComponent
