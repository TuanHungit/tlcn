import React from 'react';

export default (props) => {
  const option = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div className='col'>
      <article className='post-grid-01'>
        <div className='image'>
          <img src='images/image-regular/07.jpg' alt='images' />
        </div>
        <div className='content'>
          <span className='post-date text-muted'>
            {new Date(props.blog.createdAt).toLocaleDateString(
              undefined,
              option
            )}
          </span>
          <h4>{props.blog.title}</h4>
          <a href='index.html#' className='h6'>
            Nhấn để xem <i className='elegent-icon-arrow_right'></i>
          </a>
        </div>
      </article>
    </div>
  );
};
