import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {Router as BrowserRouter} from 'react-router-dom';
import browserHistory from './browser-history';
import {rootReducer} from './store/root-reducer';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './utils/const';
import {ThunkAppDispatch} from './types/action';
import {checkAuthAction, fetchOfferIdActionURL, fetchOffersAction} from './store/api-actions';
import {redirect} from './store/middleware/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());

const path = browserHistory.location.pathname.split('/');
if ((path.length === 3) && (path[1] === 'offer')) {
  (store.dispatch as ThunkAppDispatch)(fetchOfferIdActionURL(Number(path[2])));
}

(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
