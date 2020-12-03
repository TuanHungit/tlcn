import React from 'react';
import { Link } from 'react-router-dom';

import ToDateForView from '../../../../common/convertDateForView';

export default (props) => {
  return (
    <div class='col'>
      <article class='post-grid-01'>
        <div class='image'>
          <img src='/images/image-post/07.jpg' alt='/images' />
        </div>
        <div class='content'>
          <span class='post-date text-muted'>
            {ToDateForView(props.blog.createdAt)}
          </span>
          <h4>{props.blog.title}</h4>
          <Link to={`/blogs/${props.blog.slug}`} class='h6'>
            Read this <i class='elegent-icon-arrow_right'></i>
          </Link>
        </div>
      </article>
    </div>
  );
};
