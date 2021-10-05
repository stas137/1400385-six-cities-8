import {Route, RouteProps, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element,
  authorizationStatus: AuthorizationStatus,
};

function PrivateRoute({exact, path, render, authorizationStatus}: PrivateRouteProps): JSX.Element {
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={AppRoute.SignIn} />
      )}
    >
    </Route>
  );
}

export default PrivateRoute;
