import './App.css';
import TourDetail from './components/tourDetail';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import LoginModal from './containers/auth/signin/signin';
import LandingPage from './containers/LandingPage/LandingPage';
import { Route, Switch, withRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/tour' component={TourDetail} />
      </Switch>
      {/* <TourDetail /> */}
      <Footer />
      <LoginModal />
    </div>
  );
}

export default withRouter(App);
