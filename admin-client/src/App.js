import React from 'react';
import { fetchUtils, Admin, Resource } from 'admin-on-rest';
import simpleRestProvider from 'ra-data-simple-rest';
import { TourList } from './components/tours/tourList';
import { TourCreate } from './components/tours/tourCreate';
import Dashboard from './components/dashboard';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  //options.headers.set('x-access-token', localStorage.getItem('token'));
  return fetchUtils.fetchJson(url, options);
};
const restClient = simpleRestProvider('http://localhost:3002/api', httpClient);
function App() {
  return (
    <Admin title='Travel Admin' dataProvider={restClient} dashboard={Dashboard}>
      <Resource name='tours' list={TourList} create={TourCreate} />
    </Admin>
  );
}

export default App;
