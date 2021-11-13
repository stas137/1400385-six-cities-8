import Logo from '../logo/logo';
import FavoriteList from '../favorite-list/favorite-list';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {AppRoute} from '../../const';
import {SyntheticEvent} from 'react';
import {Link} from 'react-router-dom';
import {ThunkAppDispatch} from '../../types/action';
import {logoutAction} from '../../store/api-actions';

const mapStateToProps = ({DATA, USER}: State) => ({
  offers: DATA.offers,
  userData: USER.userData,
});

const mapDispatchToPros = (dispatch: ThunkAppDispatch) => ({
  onClickLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToPros);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Favorites({offers, userData, onClickLogout}: PropsFromRedux):JSX.Element {
  const offerCities = offers.map((offer) => offer.city.name);
  const uniqCities = [...new Set(offerCities)];

  const onClickHandler = (e: SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    onClickLogout();
  };

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {
                      <span className="header__user-name user__name">{userData.email}</span>
                    }

                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.SignIn} onClick={onClickHandler}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                uniqCities.map((city) => (
                  <FavoriteList
                    key={city}
                    city={city}
                    offers={offers}
                  />
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export {Favorites};
export default connector(Favorites);
