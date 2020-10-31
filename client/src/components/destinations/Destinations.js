import React, { Component } from 'react';

class Destinations extends Component {
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
    render() {
        return (
            <div class="section-title">
                <h2><span><span>Top</span> Destinations</span></h2>
                <div class="row cols-1 cols-sm-2 cols-lg-4 gap-2 mb-20">
                    {this.state.country.map(c =>
                        <div key={c.id} class="col">

                            <figure class="destination-grid-item-01">
                                <a href="index.html#">
                                    <div class="image">
                                        <img className=" img img-thumbnail" src={c.image} alt="image" />
                                    </div>
                                    <figcaption class="content">
                                        <h5>{c.name}</h5>

                                    </figcaption>
                                </a>
                            </figure>

                        </div>
                    )}
                </div>
            </div>)
    }
}
export default Destinations
