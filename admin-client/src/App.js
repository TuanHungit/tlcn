import React from 'react';
import { simpleRestClient, fetchUtils, Admin, Resource } from 'admin-on-rest';

import { TourList } from './components/tours/tourList';
import { TourCreate } from './components/tours/tourCreate';
import Dashboard from './components/dashboard';

import './';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  //options.headers.set('x-access-token', localStorage.getItem('token'));
  return fetchUtils.fetchJson(url, options);
};
const restClient = simpleRestClient('http://localhost:3002/api', httpClient);
function App() {
  return (
    <Admin title='Travel Admin' restClient={restClient} dashboard={Dashboard}>
      <Resource name='tours' list={TourList} create={TourCreate} />
    </Admin>
  );
}

export default App;
