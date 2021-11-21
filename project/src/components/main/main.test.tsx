import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Main from './main';
import {Provider} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../utils/const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  DATA: {
    offers: [],
    offer: {
      bedrooms: 0,
      city: {
        location: {
          latitude: 0,
          longitude: 0,
          zoom: 0,
        },
        name: '',
      },
      description: '',
      goods: [],
      host: {
        avatarUrl: '',
        id: 0,
        isPro: false,
        name: '',
      },
      id: 0,
      images: [],
      isFavorite: false,
      isPremium: false,
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
      maxAdults: 0,
      previewImage: '',
      price: 0,
      rating: 0,
      title: '',
      type: '',
    },
    nearBy: [],
    comments: [],
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

describe('Component: Main', () => {
  it('should render correctly "Main"', () => {

    history.push(AppRoute.Main);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.Main}>
            <Main />
          </Route>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
