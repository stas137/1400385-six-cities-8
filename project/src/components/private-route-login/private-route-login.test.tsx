import {render, screen} from '@testing-library/react';
import {Router, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import PrivateRouteLogin from './private-route-login';
import {Provider} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../utils/const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: PrivateRouteLogin', () => {
  it('should render component for public route, when user not authorized', () => {

    history.push(AppRoute.SignIn);

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.Main}><h1>Private Route</h1></Route>
          <PrivateRouteLogin
            exact
            path={AppRoute.SignIn}
            render={() => (<h1>Public Route</h1>)}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {

    history.push(AppRoute.SignIn);

    const store = mockStore({
      USER: {
        authorizationStatus: AuthorizationStatus.Auth,
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Route exact path={AppRoute.Main}><h1>Private Route</h1></Route>
          <PrivateRouteLogin
            exact
            path={AppRoute.SignIn}
            render={() => (<h1>Public Route</h1>)}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
