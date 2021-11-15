import {Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../utils/const';
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import NotFound from '../not-found/not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {isCheckedAuth} from '../../utils/common';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

const mapStateToProps = (state: State) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: state.DATA.isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({authorizationStatus, isDataLoaded}: PropsFromRedux):JSX.Element {

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Switch>
      <Route exact path={AppRoute.Main}>
        <Main />
      </Route>
      <Route exact path={AppRoute.SignIn}>
        <Login />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.Favorites}
        render={() => <Favorites />}
      >
      </PrivateRoute>
      <Route exact path={AppRoute.Room}>
        <Property />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export {App};
export default connector (App);
