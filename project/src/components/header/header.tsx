import Logo from '../logo/logo';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import {UserData} from '../../types/auth-data';
import {SyntheticEvent} from 'react';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus,
  userData: UserData,
  onClickHandler: (e: SyntheticEvent<HTMLElement>) => void,
};

function Header(props: HeaderProps):JSX.Element {
  const {authorizationStatus, userData, onClickHandler} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {
                  authorizationStatus === AuthorizationStatus.Auth
                    ? (
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">{userData.email}</span>
                      </Link>
                    )
                    : (
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SignIn}>
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      </Link>
                    )
                }
              </li>
              <li className="header__nav-item">
                {
                  authorizationStatus === AuthorizationStatus.Auth
                    ? (
                      <Link className="header__nav-link" to={AppRoute.SignIn} onClick={onClickHandler}>
                        <span className="header__signout">Sign out</span>
                      </Link>
                    )
                    : (
                      <Link className="header__nav-link" to={AppRoute.SignIn}>
                        <span className="header__signin">Sign in</span>
                      </Link>
                    )
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
