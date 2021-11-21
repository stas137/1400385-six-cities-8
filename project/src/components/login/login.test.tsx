import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Login from './login';
import {Provider} from 'react-redux';
import {AppRoute} from '../../utils/const';
import {makeFakeOffers} from '../../utils/mock';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({
  DATA: {
    offers: makeFakeOffers(),
  },
});

describe('Component: Login', () => {
  it('should render correctly "Login" when user navigate to "login" url', () => {

    history.push(AppRoute.SignIn);

    render(
      <Provider store={store}>
        <Router history={history}>
          <Login />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByText(/Sign in/i).length).toBe(2);

    userEvent.type(screen.getByTestId('email'), 'keks@mail.ru');
    userEvent.type(screen.getByTestId('password'), 'password');

    expect(screen.getByDisplayValue(/keks@mail.ru/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/password/i)).toBeInTheDocument();
  });
});
