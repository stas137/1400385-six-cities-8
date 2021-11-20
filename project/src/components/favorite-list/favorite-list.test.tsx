import {render, screen} from '@testing-library/react';
import {makeFakeOffers} from '../../utils/mock';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FavoriteList from './favorite-list';

const history = createMemoryHistory();
const mockOffers = makeFakeOffers();

describe('Component: FavoriteList', () => {
  it ('should render correctly', () => {
    render(
      <Router history={history}>
        <FavoriteList offers={mockOffers} city={'Paris'} />
      </Router>);

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });

});
