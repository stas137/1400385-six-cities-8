import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';

const Setting = {
  countCard: 5,
};


ReactDOM.render(
  <React.StrictMode>
    <App
      countCard={Setting.countCard}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
