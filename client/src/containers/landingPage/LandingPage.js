import React, { Component, useState } from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './boostrap.css';
import './01.jpg';
import Destinations from '../../components/destinations/Destinations';
class Banner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //  index:  useState(0),
            //  setIndex: useState(0),
            country: [
                {
                    id: 1,
                    name: "Vịnh Hạ Long",
                    image: "https://www.topcv.vn/v3/images/seo/du-lich/nganh-du-lich-lam-nhung-cong-viec-gi-fb.png"
                },
                {
                    id: 2,
                    name: "Sa Pa",
                    image: "https://www.topcv.vn/v3/images/seo/du-lich/nganh-du-lich-lam-nhung-cong-viec-gi-fb.png"
                },
                {
                    id: 3,
                    name: "Hà Nội",
                    image: "https://www.topcv.vn/v3/images/seo/du-lich/nganh-du-lich-lam-nhung-cong-viec-gi-fb.png"
                },
                {
                    id: 4,
                    name: "Đà Lạt",
                    image: "https://www.topcv.vn/v3/images/seo/du-lich/nganh-du-lich-lam-nhung-cong-viec-gi-fb.png"
                },
            ]
        };
        // this.handleSelect = this.handleSelect.bind(this);
    }
    // handleSelect = (selectedIndex,e) => {
    //     setIndex(selectedIndex);
    // };
    render() {
        return (
            <div class="main-wrapper scrollspy-container">

                <div class="hero-banner hero-banner-01 overlay-light opacity-2 overlay-relative overlay-gradient gradient-white alt-option-03" style={{ backgroundImage: " url(" + "01.jpg" + ")" }} >
                    <div class="overlay-holder bottom"></div>
                    <div class="hero-inner">
                        <div class="container">
                            <h1>Go <span class="font200">tour <span class="block">with <span class="font700">US</span></span></span></h1>
                            <p class="font-lg spacing-1">Visit Europe, America, Asia, Africa or beyond!</p>
                            <div class="search-form-main">
                                <form>
                                    <div class="from-inner">
                                        <div class="row shrink-auto-sm gap-1">
                                            <div class="col-12 col-auto">
                                                <div class="col-inner">
                                                    <div class="row cols-1 cols-sm-3 gap-1">
                                                        <div class="col">
                                                            <div class="col-inner">
                                                                <div class="form-group">
                                                                    <label>Tour Type</label>
                                                                    <select class="chosen-the-basic form-control form-control-sm" placeholder="Select one" tabindex="2">
                                                                        <option></option>
                                                                        <option>All</option>
                                                                        <option>Adventure</option>
                                                                        <option>City tour</option>
                                                                        <option>Honeymoon</option>
                                                                        <option>Cultural</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col">
                                                            <div class="col-inner">
                                                                <div class="form-group">
                                                                    <label>Destination</label>
                                                                    <select class="chosen-the-basic form-control form-control-sm" placeholder="Select two" tabindex="2">
                                                                        <option></option>
                                                                        <option>All</option>
                                                                        <option>Asia</option>
                                                                        <option>Europe</option>
                                                                        <option>Africa</option>
                                                                        <option>America</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="col">
                                                            <div class="col-inner">
                                                                <div class="form-group">
                                                                    <label>When</label>
                                                                    <input type="text" class="form-control form-readonly-control air-datepicker" placeholder="Pick a month" data-min-view="months" data-view="months" data-date-format="MM yyyy" data-language="en" data-auto-close="true" readonly />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-shrink">
                                                <div class="col-inner">
                                                    <a href="index.html#" class="btn btn-primary btn-block"><i class="ion-android-search"></i></a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="pb-0">
                    <div class="container">
                        <div class="row cols-1 cols-lg-3 gap-20 gap-lg-40">
                            <div class="col">
                                <div class="featured-icon-horizontal-01 clearfix">
                                    <div class="icon-font">
                                        <i class=" text-danger elegent-icon-gift_alt text-primary"></i>
                                    </div>
                                    <div class="content">
                                        <h6>We ﬁnd better deals</h6>
                                        <p class="text-muted">Considered an invitation do introduced sufficient understood instrument it. </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="featured-icon-horizontal-01 clearfix">
                                    <div class="icon-font">
                                        <i class="text-danger elegent-icon-wallet text-primary"></i>
                                    </div>
                                    <div class="content">
                                        <h6>Best price guaranteed</h6>
                                        <p class="text-muted">Discovery sweetness principle discourse shameless bed one excellent.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="featured-icon-horizontal-01 clearfix">
                                    <div class="icon-font">
                                        <i class="text-danger elegent-icon-heart_alt text-primary"></i>
                                    </div>
                                    <div class="content">
                                        <h6>Travellers love us</h6>
                                        <p class="text-muted">Sentiments of surrounded friendship dispatched connection john shed hope.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="clear mb-100"></div>
                        <Destinations />


                        <div class="section-title">
                            <h2><span><span>Best</span> Tour Packages</span></h2>
                        </div>

                        <div class="row equal-height cols-1 cols-sm-2 cols-lg-3 gap-20 mb-30">

                            <div class="col">

                                <figure class="tour-grid-item-01">

                                    <a href="index.html#">

                                        <div class="image">
                                            <img src="images/image-tour/01.jpg" alt="images" />
                                        </div>

                                        <figcaption class="content">
                                            <h5>Rome to Naples and Amalfi Coast Adventure</h5>
                                            <ul class="item-meta">
                                                <li>
                                                    <i class="elegent-icon-pin_alt text-warning"></i> Italy
											</li>
                                                <li>
                                                    <div class="rating-item rating-sm rating-inline clearfix">
                                                        <div class="rating-icons">
                                                            <input type="hidden" class="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions="2" data-readonly value="4.5" />
                                                        </div>
                                                        <p class="rating-text font600 text-muted font-12 letter-spacing-1">26 reviews</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul class="item-meta mt-15">
                                                <li><span class="font700 h6">3 days &amp; 2 night</span></li>
                                                <li>
                                                    Start: <span class="font600 h6 line-1 mv-0"> Rome</span> - End: <span class="font600 h6 line-1 mv-0"> Naoples</span>
                                                </li>
                                            </ul>
                                            <p class="mt-3">Price from <span class="h6 line-1 text-primary font16">$125.99</span> <span class="text-muted mr-5"></span></p>
                                        </figcaption>

                                    </a>

                                </figure>

                            </div>

                            <div class="col">

                                <figure class="tour-grid-item-01">

                                    <a href="index.html#">

                                        <div class="image">
                                            <img src="images/image-tour/02.jpg" alt="images" />
                                        </div>

                                        <figcaption class="content">
                                            <h5>Everest Base Camp Trek through 3 High Passes</h5>
                                            <ul class="item-meta">
                                                <li>
                                                    <i class="elegent-icon-pin_alt text-warning"></i> Nepal
											</li>
                                                <li>
                                                    <div class="rating-item rating-sm rating-inline clearfix">
                                                        <div class="rating-icons">
                                                            <input type="hidden" class="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions="2" data-readonly value="4.5" />
                                                        </div>
                                                        <p class="rating-text font600 text-muted font-12 letter-spacing-1">53 reviews</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul class="item-meta mt-15">
                                                <li><span class="font700 h6">22 days</span></li>
                                                <li>
                                                    Start/End: <span class="font600 h6 line-1 mv-0"> Kathmandu</span>
                                                </li>
                                            </ul>
                                            <p class="mt-3">Price from <span class="h6 line-1 text-primary font16">$125.99</span> <span class="text-muted mr-5"></span></p>
                                        </figcaption>

                                    </a>

                                </figure>

                            </div>

                            <div class="col">

                                <figure class="tour-grid-item-01">

                                    <a href="index.html#">

                                        <div class="image">
                                            <img src="images/image-tour/03.jpg" alt="images" />
                                        </div>

                                        <figcaption class="content">
                                            <h5>10 Days From the South to the North of Vietnam</h5>
                                            <ul class="item-meta">
                                                <li>
                                                    <i class="elegent-icon-pin_alt text-warning"></i> Vietnam
											</li>
                                                <li>
                                                    <div class="rating-item rating-sm rating-inline clearfix">
                                                        <div class="rating-icons">
                                                            <input type="hidden" class="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions="2" data-readonly value="4.5" />
                                                        </div>
                                                        <p class="rating-text font600 text-muted font-12 letter-spacing-2">44 reviews</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul class="item-meta mt-15">
                                                <li><span class="font700 h6">10 days &amp; 9 night</span></li>
                                                <li>
                                                    Start: <span class="font600 h6 line-1 mv-0"> Hochiminh</span> - End: <span class="font600 h6 line-1 mv-0"> Hanoi</span>
                                                </li>
                                            </ul>
                                            <p class="mt-3">Price from <span class="h6 line-1 text-primary font16">$125.99</span> <span class="text-muted mr-5"></span></p>
                                        </figcaption>

                                    </a>

                                </figure>

                            </div>
                        </div>
                    </div>
                </section>
                <div class="bg-white-gradient-top-bottom pt-0 mt-40">
                    <div class="bg-gradient-top"></div>
                    <div class="bg-gradient-bottom"></div>

                    <div class="bg-image pv-100 overlay-relative" style={{ backgroundImage: " url(" + "01.jpg" + ")" }}>

                        <div class="overlay-holder overlay-white opacity-8"></div>

                        <div class="container">

                            <div class="testimonial-grid-slick-carousel testimonial-grid-wrapper">

                                <div class="testimonial-grid-arrow">
                                    <ul>
                                        <li class="testimonial-grid-prev"><button><span>previuos</span></button></li>
                                        <li class="testimonial-grid-next"><button><span>next</span></button></li>
                                    </ul>
                                </div>

                                <div class="slick-carousel-wrapper gap-50">

                                    <div class="slick-carousel-outer">

                                        <div class="slick-carousel-inner">

                                            <div class="slick-testimonial-grid-arrows">

                                                <div class="slick-item">

                                                    <div class="testimonial-grid-01">

                                                        <div class="content">

                                                            <p class="saying">Real sold my in call. Invitation on an advantages collecting. But event old above shy bed noisy. Had sister see wooded favour income has. Stuff rapid since hence.</p>

                                                        </div>

                                                        <div class="man clearfix">

                                                            <div class="image">
                                                                <img src="images/image-man/01.jpg" alt="images" class="img-circle" />
                                                            </div>

                                                            <div class="texting">
                                                                <h5>Ange Ermolova</h5>
                                                                <p class="text-muted testimonial-cite">Travel on July 2016</p>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                                <div class="slick-item">

                                                    <div class="testimonial-grid-01">

                                                        <div class="content">

                                                            <p class="saying">Greatly hearted has who believe. Sir margaret drawings repeated recurred exercise laughing may you. Cheerful but whatever ladyship disposed yet judgment.</p>

                                                        </div>

                                                        <div class="man clearfix">

                                                            <div class="image">
                                                                <img src="images/image-man/02.jpg" alt="images" class="img-circle" />
                                                            </div>

                                                            <div class="texting">
                                                                <h5>Christine Gateau</h5>
                                                                <p class="text-muted testimonial-cite">Travel on November 2016</p>
                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>

                                                <div class="slick-item">

                                                    <div class="testimonial-grid-01">

                                                        <div class="content">

                                                            <p class="saying">Ask especially collecting terminated may son expression. Extremely eagerness principle estimable cannot going laughing may you about water defer.</p>

                                                        </div>

                                                        <div class="man clearfix">

                                                            <div class="image">
                                                                <img src="images/image-man/03.jpg" alt="images" class="img-circle" />
                                                            </div>

                                                            <div class="texting">
                                                                <h5>Suttira Ketkaew</h5>
                                                                <p class="text-muted testimonial-cite">Travel on January 2017</p>
                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>
                                                <div class="slick-item">

                                                    <div class="testimonial-grid-01">

                                                        <div class="content">

                                                            <p class="saying">Real sold my in call. Invitation on an advantages collecting. But event old above shy bed noisy. Had sister see wooded favour income has. Stuff rapid since hence.</p>

                                                        </div>

                                                        <div class="man clearfix">

                                                            <div class="image">
                                                                <img src="images/image-man/01.jpg" alt="images" class="img-circle" />
                                                            </div>

                                                            <div class="texting">
                                                                <h5>Ange Ermolova</h5>
                                                                <p class="text-muted testimonial-cite">Travel on July 2016</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="overlay-relative overlay-gradient gradient-white set-height-01">
                        <div class="overlay-holder bottom"></div>
                    </div>

                </div>

                <section class="pt-40 pb-100">

                    <div class="container">

                        <div class="section-title">
                            <h2><span><span>Travel</span> Articles</span></h2>
                        </div>

                        <div class="post-grid-wrapper-01">

                            <div class="row equal-height cols-1 cols-sm-2 cols-md-3 gap-10 gap-md-20 mb-40">

                                <div class="col-12 col-md-4">

                                    <article class="post-grid-01">

                                        <div class="image">
                                            <img src="images/image-regular/07.jpg" alt="images" />
                                        </div>
                                        <div class="content">
                                            <span class="post-date text-muted">Mar 15, 2017</span>
                                            <h4>Raising say express had chiefly detract</h4>
                                            <a href="index.html#" class="h6">Read this <i class="elegent-icon-arrow_right"></i></a>
                                        </div>

                                    </article>

                                </div>

                                <div class="col">

                                    <article class="post-grid-01">

                                        <div class="image">
                                            <img src="images/image-regular/08.jpg" alt="images" />
                                        </div>
                                        <div class="content">
                                            <span class="post-date text-muted">Mar 15, 2017</span>
                                            <h4>Cordially convinced incommode existence</h4>
                                            <a href="index.html#" class="h6">Read this <i class="elegent-icon-arrow_right"></i></a>
                                        </div>

                                    </article>

                                </div>

                                <div class="col">

                                    <article class="post-grid-01">

                                        <div class="image">
                                            <img src="images/image-regular/09.jpg" alt="images" />
                                        </div>
                                        <div class="content">
                                            <span class="post-date text-muted">Mar 15, 2017</span>
                                            <h4>Improving age our her cordially intention</h4>
                                            <a href="index.html#" class="h6">Read this <i class="elegent-icon-arrow_right"></i></a>
                                        </div>

                                    </article>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            </div>


        )
    }

}
export default Lan 