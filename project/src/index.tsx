import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const countCard = 5;

ReactDOM.render(
  <React.StrictMode>
    <App
      countCard={countCard}
    />
  </React.StrictMode>,
  document.getElementById('root'));
