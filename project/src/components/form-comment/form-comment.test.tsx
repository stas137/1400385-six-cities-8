import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import FormComment from './form-comment';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    isDisabledForm: false,
  },
});

describe('Component: FormComment', () => {
  it ('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <FormComment offerId={1} />
        </Router>
      </Provider>);

    expect(screen.getByText(/Your review/i)).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

});
