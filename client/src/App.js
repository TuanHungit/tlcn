import './App.css';
import TourDetail from './components/tourDetail';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import LoginModal from './containers/auth/signin/signin';
import LandingPage from './containers/landingPage/LandingPage';
function App() {
  return (
    <div className='with-waypoint-sticky header-bg-white'>
      <div className='body-inner'>
        <Header />
        <LandingPage />
        {/* <TourDetail /> */}
        <Footer />
        <LoginModal />
      </div>
    </div>
  );
}

export default App;
