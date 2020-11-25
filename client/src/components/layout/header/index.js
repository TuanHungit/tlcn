import React, { useEffect } from "react";
import "./index.css";

import Navigation from "./Navigation/Navigation";
import { Link, NavLink } from "react-router-dom";
import Profile from "../../../containers/Dashboard/Dashboard";
export default (props) => {
  return (
    <header
      id="header-waypoint-sticky"
      className="header-main header-mobile-menu with-absolute-navbar"
    >
      <div className="header-outer clearfix">
        <div className="header-inner">
          <div className="row shrink-auto-lg gap-0 align-items-center">
            <div className="col-5 col-shrink">
              <div className="col-inner">
                <div className="main-logo">
                  <a href="index.html">
                    <img src="images/logo.png" alt="images" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-7 col-shrink order-last-lg">
              <div className="col-inner">
                <Navigation
                  isAuthencated={props.isAuthencated}
                  user={props.user}
                />
                <Profile
                  isAuthencated={props.isAuthencated}
                  user={props.user}
                />
              </div>
            </div>

            <div className="col-12 col-auto">
              <div className="navbar-wrapper">
                <div className="navbar navbar-expand-lg">
                  <div id="mobileMenu" className="collapse navbar-collapse">
                    <nav className="main-nav-menu main-menu-nav navbar-arrow">
                      <ul className="main-nav">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <NavLink to="/tour">Tour Package</NavLink>
                          <ul>
                            <li>
                              <a href="tour-result-list.html">Result - List</a>
                            </li>
                            <li>
                              <a href="tour-detail.html">Detail 01</a>
                            </li>
                            <li>
                              <a href="tour-detail-empty-booking.html">
                                Detail - empty booking
                              </a>
                            </li>
                            <li>
                              <a href="tour-payment.html">Payment</a>
                            </li>
                            <li>
                              <a href="tour-conformation.html">Conformation</a>
                            </li>

                            <li>
                              <a href="destinations-02.html">Destinations 02</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Blog</a>
                          <ul>
                            <li>
                              <a href="blog-01.html"> Blog - Grid Full 01</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Pages</a>
                          <ul>
                            <li>
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li>
                              <a href="service.html">Service</a>
                            </li>
                            <li>
                              <a href="service-single.html">Service Single</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="privacy-and-term.html">
                                Privacy and Term
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact-us.html">Contact us</a>
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
};
