import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CitiesList from './cities-list';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeOffers} from '../../utils/mock';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  BOOK: {
    currentCity: 'Paris',
  },
  DATA: {
    offers: makeFakeOffers(),
  },
});

describe('Component: CitiesList', () => {
  it ('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CitiesList />
        </Router>
      </Provider>);

    expect(screen.getByTestId('cities-list')).toBeInTheDocument();
  });

});
