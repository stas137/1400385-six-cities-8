import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

ReactDOM.render(
  <React.StrictMode>
    <App
      city={'Amsterdam'}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
