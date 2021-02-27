import React, { useState, useEffect } from 'react';
import './lazyLoadImage.css';

import LoadingImage from '../../img/loadingImage.gif';

export default function LazyImage({ src, alt, size }) {
  const [imageSrc, setImageSrc] = useState(LoadingImage);
  const [imageRef, setImageRef] = useState();

  const onLoad = (event) => {
    event.target.classList.add('loaded');
  };

  const onError = (event) => {
    event.target.classList.add('has-error');
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.5,
            rootMargin: '0px',
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);
  return (
    <img
      className='lazy-load-img'
      ref={setImageRef}
      src={imageSrc}
      size={size}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
    />
  );
}
