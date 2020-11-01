import React, { Component, useState } from 'react';
import Destinations from '../../components/destinations/Destinations';
import Comment from '../../components/comments/Comment'
import Blogs from '../../components/blogs/Blogs'
import Background from '../../img/01.jpg';
import BestTour from '../../components/bestTour/BestTour';
var sectionStyle = {
    backgroundImage: `url(${Background})`

};
class LandingPage extends Component {


    // this.handleSelect = this.handleSelect.bind(this);

    // handleSelect = (selectedIndex,e) => {
    //     setIndex(selectedIndex);
    // };
    render() {
        return (
            <div class="main-wrapper scrollspy-container">

                <div class="hero-banner hero-banner-01 overlay-light opacity-2 overlay-relative overlay-gradient gradient-white alt-option-03" style={sectionStyle} >
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
                        <BestTour />
                    </div>
                </section>
                <Comment />
                <Blogs />
            </div>


        )
    }

}
export default LandingPage 