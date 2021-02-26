import React from 'react';
import './pageTitle.css';

export default ({ src, title, name }) => {
  return (
    <div className='page-title' style={{ backgroundImage: `url(${src})` }}>
      {name ? <h2 className='page-title__name'>{name}</h2> : null}
      {title ? <h2 className='page-title__title'>{title}</h2> : null}
    </div>
  );
};
