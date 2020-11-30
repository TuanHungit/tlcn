import React, { Component } from 'react';
import Blog from './blog/blog';
class Blogs extends Component {
  render() {
    return (
      <section className='pt-100'>
        <div className='container'>
          <div className='section-title'>
            <h2>
              <span>
                <span>Blog</span> du lịch
              </span>
            </h2>
          </div>

          <div className='post-grid-wrapper-01'>
            <div className='row equal-height cols-1 cols-sm-2 cols-md-3 gap-10 gap-md-20'>
              {Object.values(this.props.blogList).map((el) => (
                <Blog blog={el} key={el.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Blogs;
