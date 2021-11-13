import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorities';
import Property from '../property/property';
import NotFound from '../not-found/not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {isCheckedAuth} from '../../common';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getCurrentCity} from '../../store/book-process/selectors';
import {getOffers} from '../../store/offers-data/selectors';

const mapStateToProps = (state: State) => ({
  currentCity: getCurrentCity(state),
  offers: getOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: state.DATA.isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({currentCity, offers, authorizationStatus, isDataLoaded}: PropsFromRedux):JSX.Element {
  const currentCityOffers = offers.filter((offer) => offer.city.name === currentCity);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
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
          <Property
            currentCityOffers={currentCityOffers}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector (App);
