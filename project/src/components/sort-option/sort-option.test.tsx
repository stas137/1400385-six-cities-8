import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import SortOption from './sort-option';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const store = mockStore({
  BOOK: {
    selectedSort: 'Popular',
  },
});

describe('Component: SortOption', () => {
  it ('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <SortOption nameOption={'Popular'} indexOption={0}/>
        </Router>
      </Provider>);

    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

});
