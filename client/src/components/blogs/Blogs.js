
import React, { Component } from 'react';

class Blogs extends Component {
    render() {
        return (
            <section className="pt-40 pb-100">

                <div className="container">

                    <div className="section-title">
                        <h2><span><span>Travel</span> Articles</span></h2>
                    </div>

                    <div className="post-grid-wrapper-01">

                        <div className="row equal-height cols-1 cols-sm-2 cols-md-3 gap-10 gap-md-20 mb-40">

                            <div className="col-12 col-md-4">

                                <article className="post-grid-01">

                                    <div className="image">
                                        <img src="images/image-regular/07.jpg" alt="images" />
                                    </div>
                                    <div className="content">
                                        <span className="post-date text-muted">Mar 15, 2017</span>
                                        <h4>Raising say express had chiefly detract</h4>
                                        <a href="index.html#" className="h6">Read this <i className="elegent-icon-arrow_right"></i></a>
                                    </div>

                                </article>

                            </div>

                            <div className="col">

                                <article className="post-grid-01">

                                    <div className="image">
                                        <img src="images/image-regular/08.jpg" alt="images" />
                                    </div>
                                    <div className="content">
                                        <span className="post-date text-muted">Mar 15, 2017</span>
                                        <h4>Cordially convinced incommode existence</h4>
                                        <a href="index.html#" className="h6">Read this <i className="elegent-icon-arrow_right"></i></a>
                                    </div>

                                </article>

                            </div>

                            <div className="col">

                                <article className="post-grid-01">

                                    <div className="image">
                                        <img src="images/image-regular/09.jpg" alt="images" />
                                    </div>
                                    <div className="content">
                                        <span className="post-date text-muted">Mar 15, 2017</span>
                                        <h4>Improving age our her cordially intention</h4>
                                        <a href="index.html#" className="h6">Read this <i className="elegent-icon-arrow_right"></i></a>
                                    </div>

                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Blogs

