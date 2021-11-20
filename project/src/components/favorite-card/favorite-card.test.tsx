import {render, screen} from '@testing-library/react';
import {makeFakeOffer} from '../../utils/mock';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FavoriteCard from './favorite-card';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const history = createMemoryHistory();
const mockOffer = makeFakeOffer();
const mockStore = configureMockStore();

describe('Component: FavoriteCard', () => {
  it ('should render correctly', () => {
    render(
      <Provider store={mockStore()}>
        <Router history={history}>
          <FavoriteCard offer={mockOffer} />
        </Router>
      </Provider>);

    expect(screen.getByText(/€/i)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
  });

});
