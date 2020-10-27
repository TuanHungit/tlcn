import React, { Component, useState } from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './boostrap.css';

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  index:  useState(0),
      //  setIndex: useState(0),
      country: [
        {
          id: 1,
          name: 'Viet Nam',
          image:
            'https://www.topcv.vn/v3/images/seo/du-lich/nganh-du-lich-lam-nhung-cong-viec-gi-fb.png',
        },
        {
          id: 2,
          name: 'Sa Pa',
          image:
            'https://www.topcv.vn/v3/images/seo/du-lich/nganh-du-lich-lam-nhung-cong-viec-gi-fb.png',
        },
        {
          id: 3,
          name: 'Ha Noi',
          image:
            'https://www.topcv.vn/v3/images/seo/du-lich/nganh-du-lich-lam-nhung-cong-viec-gi-fb.png',
        },
        {
          id: 4,
          name: 'Ha Noi',
          image:
            'https://www.topcv.vn/v3/images/seo/du-lich/nganh-du-lich-lam-nhung-cong-viec-gi-fb.png',
        },
      ],
    };
    // this.handleSelect = this.handleSelect.bind(this);
  }
  // handleSelect = (selectedIndex,e) => {
  //     setIndex(selectedIndex);
  // };
  render() {
    return (
      <div>
        <Carousel className='row' activeIndex={this.state.index}>
          <Carousel.Item>
            <img
              className='img-fluid d-block'
              width='100%'
              height='50%'
              src='https://designer.com.vn/wp-content/uploads/2017/10/dich-vu-thiet-ke-banner-du-lich-chuyen-nghiep-tai-ha-noi2.jpg'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='img-fluid  d-block'
              width='100%'
              height='50%'
              src='https://atoztravel.vn/wp-content/uploads/2016/04/tour-dulich-e1461550370575.jpg'
              alt='Second slide'
            />
          </Carousel.Item>
        </Carousel>
        <Container className='text-center ml-5 px-5 mx-5 mb-5'>
          {/* <Carousel className="row" activeIndex={index} onSelect={this.handleSelect}> */}
          <Row className='pt-5 '>
            <Col className='col-md-12 text-center '>
              <h2>
                <u className='text-default'>Why choose</u>{' '}
              </h2>
            </Col>
            <blockquote>
              <p className='text-center'>
                {' '}
                We've been pioneering unique journeys in Asia for more than two
                decades. Across each of the ten countries we operate in, we've
                developed in-depth tours that go far beyond the surface to
                reveal the heart of each destination. Along with our team of
                local and in-destination travel experts and time-tested
                logistics, we combine encyclopedic knowledge of the region with
                a progressive vision to make us one of Asia's most trusted and
                exciting DMCs.
              </p>
            </blockquote>
          </Row>
          <Row className='mb-3'>
            <Col className='col-md-12 text-center '>
              <button type='button' class='btn btn-outline-success'>
                {' '}
                Discover More
              </button>
            </Col>
          </Row>
          <div className='bg-light'>
            <h3>
              <u>OUR ASIA</u>
            </h3>
            <p className='text-center'>
              Home to some of the world's most colourful cultures and exotic
              destinations, Asia is a veritable feast for the senses. Delve into
              our country selection to uncover a range of exhilarating,
              inspiring journeys.
            </p>
            <Row>
              {this.state.country.map((c) => (
                <Col key={c.id} className='el-wrapper col-md-4 pb-4'>
                  <Card height='200px' className='country'>
                    <Card.Img
                      className=' img img-thumbnail'
                      src={c.image}
                      alt='#'
                    />
                    <figure>{c.name}</figure>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Banner;
