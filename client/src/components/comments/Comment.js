import React, { Component } from 'react'
import Background from '../../img/01.jpg';
var sectionStyle = {
    backgroundImage: `url(${Background})`
    // "url(" + { Background } + ")"
};
class Comment extends Component {

    render() {

        return (
            <div class="bg-white-gradient-top-bottom pt-0 mt-40">
                <div class="bg-gradient-top"></div>
                <div class="bg-gradient-bottom"></div>

                <div class="bg-image pv-100 overlay-relative" style={sectionStyle}>

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

        )
    }
}
export default Comment

