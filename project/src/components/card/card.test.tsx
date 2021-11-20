import {render, screen} from '@testing-library/react';
import {makeFakeOffer} from '../../utils/mock';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Card from './card';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Type} from '../../utils/const';

const history = createMemoryHistory();
const mockOffer = makeFakeOffer();
const mockStore = configureMockStore();

describe('Component: Card', () => {
  it ('should render correctly', () => {
    render(
      <Provider store={mockStore()}>
        <Router history={history}>
          <Card offer={mockOffer} type={Type.Main} key={mockOffer.id} />
        </Router>
      </Provider>);

    expect(screen.getAllByText(/€/i).length).not.toBe(true);
  });

});
