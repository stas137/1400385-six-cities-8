import {render, screen} from '@testing-library/react';
import {makeFakeOffers} from '../../utils/mock';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import CardsList from './cards-list';
import {Type} from '../../utils/const';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const history = createMemoryHistory();
const mockOffers = makeFakeOffers();
const mockStore = configureMockStore();

describe('Component: CardList', () => {
  it ('should render correctly', () => {
    render(
      <Provider store={mockStore()}>
        <Router history={history}>
          <CardsList currentCityOffers={mockOffers} type={Type.Main} />
        </Router>
      </Provider>);

    expect(screen.getAllByText(/night/i).length).not.toBe(true);
  });

});
