import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class FooterComponent extends Component {
    render() {
        return (
            <footer class="footer-wrapper light scrollspy-footer">
                <div class="main-footer">

                    <div class="container">

                        <div class="row gap-50">

                            <div class="col-12 col-lg-5">

                                <div class="footer-logo">
                                    <img src="images/logo.png" alt="images" />
                                </div>

                                <p class="mt-20">Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. Forbade concern do private be. Offending residence but men engrossed shy.</p>

                                <a href="index.html#" class="text-capitalize font14 h6 line-1 mb-0 font500 mt-30">read more <i class="elegent-icon-arrow_right font18 inline-block-middle"></i></a>

                            </div>

                            <div class="col-12 col-lg-7">
                                <div class="col-inner">
                                    <div class="row shrink-auto-sm gap-30">

                                        <div class="col-6 col-shrink">

                                            <div class="col-inner">
                                                <h5 class="footer-title">Tour</h5>
                                                <ul class="footer-menu-list set-width">
                                                    <li><a href="index.html#">Bắc</a></li>
                                                    <li><a href="index.html#">Trung</a></li>
                                                    <li><a href="index.html#">Nam</a></li>
                                                    <li><a href="index.html#">Quốc Tế</a></li>
                                                    <li><a href="index.html#">Partners</a></li>
                                                    <li><a href="index.html#">Privacy notice</a></li>


                                                </ul>
                                            </div>

                                        </div>

                                        <div class="col-6 col-shrink">

                                            <div class="col-inner">
                                                <h5 class="footer-title">Customer Service</h5>
                                                <ul class="footer-menu-list set-width">
                                                    <li><a href="index.html#">Payment</a></li>
                                                    <li><a href="index.html#">Feedback</a></li>
                                                    <li><a href="index.html#">Contact us</a></li>
                                                    <li><a href="index.html#">Our Service</a></li>
                                                    <li><a href="index.html#">FAQ</a></li>
                                                    <li><a href="index.html#">Site map</a></li>
                                                </ul>
                                            </div>

                                        </div>

                                        <div class="col-12 col-auto">

                                            <div class="col-inner">
                                                <h5 class="footer-title">Newsletter &amp; Social</h5>
                                                <p class="font12">Savings her pleased are several started females met. Short her not among being any.</p>
                                                <form class="footer-newsletter mt-20">
                                                    <div class="input-group">
                                                        <input type="email" class="form-control" placeholder="Email address" />
                                                        <div class="input-group-append">
                                                            <button class="btn btn-primary" type="button"><i class="far fa-envelope"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div class="footer-socials mt-20">
                                                    <a href="index.html#"><i class="fab fa-facebook-square"></i></a>
                                                    <a href="index.html#"><i class="fab fa-twitter-square"></i></a>
                                                    <a href="index.html#"><i class="fab fa-google-plus-square"></i></a>
                                                    <a href="index.html#"><i class="fab fa-pinterest-square"></i></a>
                                                    <a href="index.html#"><i class="fab fa-flickr"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="bottom-footer">

                    <div class="container">

                        <div class="row shrink-auto-md gap-10 gap-40-lg">

                            <div class="col-auto">
                                <div class="col-inner">
                                    <ul class="footer-menu-list-02">
                                        <li><a href="index.html#">Cookies</a></li>
                                        <li><a href="index.html#">Policies</a></li>
                                        <li><a href="index.html#">Terms</a></li>
                                        <li><a href="index.html#">Blogs</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-shrink">
                                <div class="col-inner">
                                    <p class="footer-copy-right"> &#169; 2020 – 2021 <span class="text-primary">MyCompany Ltd.,</span> All Rights Reserved.</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                {/* 
            // <footer className="footer  pt-2 mt-10">
            //     <div style={{ color: 'white' }} className="row">
            //         <div className="col col-4">
            //             <h5>Về chúng tôi</h5>
            //             <p></p>
            //             <p>Tuấn Hùng - Ngọc Tuyền</p>
            //         </div>
            //         <div className="col col-3">
            //             <h5>Du lịch</h5>
            //             <p><a>Bắc</a> - <a>Trung</a> - <a>Nam</a></p>
            //             <a>Quốc tế</a>
            //         </div>
            //         <div className="col col-lg-2">
            //             <h5>Theo dõi</h5>
            //             <a className=" text-primary btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>
            //             <a className=" text-danger btn-floating btn-lg btn-ins" type="button" role="button"><i class="fab fa-instagram"></i></a>
            //         </div>
            //         <div className="col col-2">
            //             <h5>Địa chỉ</h5>
            //         </div>

            //     </div>
            //     <span className="text-muted">All Right Reserved 2020 @NT_TH</span>
            // </footer>
			 */}
            </footer>)
    }
}
export default FooterComponent