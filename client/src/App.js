import './App.css';
import TourDetail from './components/tourDetail';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import LoginModal from './containers/auth/signin/signin';
import LandingPage from './containers/landingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Singup from './containers/auth/signup/signup';
function App() {
  return (
    <div className='with-waypoint-sticky header-bg-white'>
      <div className='body-inner'>
        <Router>
          <Header />

          <Switch>
            <Route exact path='/' component={LandingPage}></Route>

            <Route path='/register' component={Singup}></Route>
          </Switch>
          {/* <TourDetail /> */}

          <Footer />
          <LoginModal />
        </Router>


      </div>
    </div>
  );
}
export default App;

// export default withRouter(App);
