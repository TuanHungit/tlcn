import React, { Component } from 'react'
import Background from '../../img/01.jpg';

var sectionStyle = {
    backgroundImage: `url(${Background})`

};
class Search extends Component {
    render() {
        return (
            <div className="hero-banner hero-banner-01 overlay-light opacity-2 overlay-relative overlay-gradient gradient-white alt-option-03" style={sectionStyle} >
                <div className="overlay-holder bottom">
                </div>
                <div className="hero-inner">
                    <div className="container">
                        <h1>Go <span className="font200">tour <span className="block">with <span className="font700">US</span></span></span></h1>
                        <p className="font-lg spacing-1">Visit Europe, America, Asia, Africa or beyond!</p>
                        <div className="search-form-main">
                            <form>
                                <div className="from-inner">
                                    <div className="row shrink-auto-sm gap-1">
                                        <div className="col-12 col-auto">
                                            <div className="col-inner">
                                                <div className="row cols-1 cols-sm-3 gap-1">
                                                    <div className="col">
                                                        <div className="col-inner">
                                                            <div className="form-group">
                                                                <label>Tour Type</label>
                                                                <select className="chosen-the-basic form-control form-control-sm" placeholder="Select one" tabindex="2">
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
                                                    <div className="col">
                                                        <div className="col-inner">
                                                            <div className="form-group">
                                                                <label>Destination</label>
                                                                <select className="chosen-the-basic form-control form-control-sm" placeholder="Select two" tabindex="2">
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

                                                    <div className="col">
                                                        <div className="col-inner">
                                                            <div className="form-group">
                                                                <label>When</label>
                                                                <input type="text" className="form-control form-readonly-control air-datepicker" placeholder="Pick a month" data-min-view="months" data-view="months" data-date-format="MM yyyy" data-language="en" data-auto-close="true" readonly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-shrink">
                                            <div className="col-inner">
                                                <a href="index.html#" className="btn btn-primary btn-block"><i className="ion-android-search"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search