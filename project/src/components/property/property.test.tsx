import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
import {Route, Router} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import Property from './property';
import {Provider} from 'react-redux';
import {makeFakeOffer, makeFakeOfferComments, makeFakeOfferNearBy, makeFakeOffers} from '../../utils/mock';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const storeAuth = mockStore({
  DATA: {
    offers: makeFakeOffers(),
    offer: makeFakeOffer(),
    nearBy: makeFakeOfferNearBy(),
    comments: makeFakeOfferComments(),
    isDataLoaded: true,
  },
  BOOK: {
    currentCity: 'Paris',
    selectedSort: 'Popular',
    selectedOfferId: null,
    listOptions: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
  },
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
    userData: {
      avatarUrl: '',
      email: '',
      id: 0,
      isPro: false,
      name: '',
    },
  },
});

const storeNoAuth = mockStore({
  DATA: {
    offers: makeFakeOffers(),
    offer: makeFakeOffer(),
    nearBy: makeFakeOfferNearBy(),
    comments: makeFakeOfferComments(),
    isDataLoaded: true,
  },
  BOOK: {
    currentCity: 'Paris',
    selectedSort: 'Popular',
    selectedOfferId: null,
    listOptions: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userData: {
      avatarUrl: '',
      email: '',
      id: 0,
      isPro: false,
      name: '',
    },
  },
});

describe('Component: Property', ()=>{

  beforeEach(() => {
    history.push(AppRoute.Room);
  });

  it('should render correctly when user is Authorized', () => {

    render(
      <Provider store={storeAuth}>
        <Router history={history}>
          <Route exact path={AppRoute.Room}>
            <Property />
          </Route>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
  });

  it('should render correctly when user is not Authorized', () => {

    render(
      <Provider store={storeNoAuth}>
        <Router history={history}>
          <Route exact path={AppRoute.Room}>
            <Property />
          </Route>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign out/i)).not.toBeInTheDocument();
  });
});
