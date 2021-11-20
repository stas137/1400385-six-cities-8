import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import City from './city';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: CardList', () => {
  it ('should render correctly', () => {
    render(
      <Provider store={mockStore()}>
        <Router history={history}>
          <City cityOffer={'Paris'} currentCity={'Paris'} />
        </Router>
      </Provider>);

    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });

});
