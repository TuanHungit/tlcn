import react from 'react';

export default (props) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div class='slick-item'>
      <div class='testimonial-grid-01'>
        <div class='content'>
          <p class='saying'>{props.review.review}</p>
        </div>

        <div class='man clearfix'>
          <div class='image'>
            <img
              src='images/image-man/01.jpg'
              alt='images'
              class='img-circle'
            />
          </div>

          <div class='texting'>
            <h5>{props.review.user.name}</h5>
            <p class='text-muted testimonial-cite'>
              Travel on{' '}
              {new Date(props.review.createdAt).toLocaleDateString(
                undefined,
                options
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
