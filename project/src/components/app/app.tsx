import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import {Offers} from '../../types/offers';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorities';
import Property from '../property/property';
import NotFound from '../not-found/not-found';

type AppProps = {
  countCard: number,
  offers: Offers,
};

function App({countCard, offers}: AppProps):JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main
            countCard={countCard}
            offers={offers}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room} component={Property}/>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
