import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './containers/layout/layout';
import './App.css';

function App() {
  return <Layout />;
}

export default withRouter(App);
