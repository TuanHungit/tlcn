import Container from './containers';
import BookingSuccess from './components/booking/bookingSuccess/bookingSuccess';
import Form from './components/form/form';
export default [
  { path: '/', name: 'Home', component: Container.LandingPage, exact: true },
  {
    path: '/tour/:slug',
    name: 'Tour Detail',
    component: Container.TourDetail,
    exact: true,
  },
  {
    path: '/tour/:slug/booking',
    name: 'Booking',
    component: Container.Booking,
    exact: true,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Container.SignOut,
    exact: true,
  },
  {
    path: '/register',
    name: 'SignUp',
    component: Container.SignUp,
    exact: true,
  },
  {
    path: '/blogs/:slug',
    name: 'Single Blog',
    component: Container.SingleBlog,
  },
  {
    path: '/blogs-editor',
    name: 'Home',
    component: Container.BlogEditor,
    exact: true,
  },
  { path: '/blogs', name: 'Blog', component: Container.BlogGrid, exact: true },
  {
    path: '/promotions',
    name: 'Promotions',
    component: Container.Promotion,
    exact: true,
  },
  {
    path: '/promotions/:slug',
    name: 'Promotions',
    component: Container.PromotionDetail,
    exact: true,
  },
  {
    path: '/destination/:slug',
    name: 'Destinatin',
    component: Container.TourResultGrid,
    exact: true,
  },
  {
    path: '/tour/:slug/booking/success',
    name: 'Booking',
    component: BookingSuccess,
    exact: true,
  },
  { path: '/survey', name: 'Survey', component: Form, exact: true },
  {
    path: '/search',
    name: 'Search',
    component: Container.TourResultGrid,
    exact: true,
  },
];
