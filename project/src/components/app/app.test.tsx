import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus, AppRoute} from '../../utils/const';
import App from './app';
import {makeFakeOffers, makeFakeUser} from '../../utils/mock';

const mockStore = configureMockStore();

const store = mockStore({
  USER: {
    authorizationStatus: AuthorizationStatus.Auth,
    userData: makeFakeUser(),
  },
  DATA: {
    offers: makeFakeOffers(),
    isDataLoaded: true,
  },
  BOOK: {
    currentCity: 'Paris',
    selectedSort: 'Popular',
    selectedOfferId: null,
    listOptions: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
  },
});

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.Main);
    render(fakeApp);
    expect(screen.getByText(new RegExp('places to stay in Paris', 'i'))).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    history.push(AppRoute.SignIn);
    render(fakeApp);

    expect(screen.getAllByText(/Sign in/i).length).toBe(2);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigate to "/favorites"', () => {
    history.push(AppRoute.Favorites);
    render(fakeApp);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push(AppRoute.NotFound);
    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную страницу')).toBeInTheDocument();
  });
});
