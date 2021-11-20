import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SortOptions from './sort-options';
import {makeFakeListOptions} from '../../utils/mock';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const history = createMemoryHistory();
const mockListOptions = makeFakeListOptions();
const mockStore = configureMockStore();

const store = mockStore({
  BOOK: {
    selectedSort: 'Popular',
  },
});

describe('Component: SortOptions', () => {
  it ('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <SortOptions listOptions={mockListOptions} />
        </Router>
      </Provider>);

    expect(screen.getByTestId('sort-options')).toBeInTheDocument();
  });

});
