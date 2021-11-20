import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Favorites from './favorites';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {AuthorizationStatus} from '../../utils/const';
import {makeFakeOffers, makeFakeUser} from '../../utils/mock';

const history = createMemoryHistory();
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
});

describe('Component: Favorites', () => {
  it ('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Favorites />
        </Router>
      </Provider>);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(screen.getByText(store.getState().USER.userData.email)).toBeInTheDocument();
  });

});
