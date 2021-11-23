import Logo from '../logo/logo';
import {useRef, FormEvent} from 'react';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {loginAction} from '../../store/api-actions';
import {ThunkAppDispatch} from '../../types/action';
import {AuthData} from '../../types/auth-data';
import {AppRoute} from '../../utils/const';
import {changeCity} from '../../store/action';
import {State} from '../../types/state';
import {getOffers} from '../../store/offers-data/selectors';
import {getRandomInteger} from '../../utils/common';

const mapStateToProps = (state: State) => ({
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmit(authData: AuthData) {
    dispatch(loginAction(authData));
  },
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Login(props: PropsFromRedux):JSX.Element {
  const {offers, onSubmit, onChangeCity} = props;
  const offerCities = offers.map((offer) => offer.city.name);
  const uniqCities = [...new Set(offerCities)];
  const randomIndex = getRandomInteger(0, uniqCities.length-1);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  pattern="^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$"
                  data-testid="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  pattern="(?=.*[A-Za-z])(?=.*\d).+"
                  data-testid="password"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main} onClick={() => onChangeCity(uniqCities[randomIndex])}>
                <span>{uniqCities[randomIndex]}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {Login};
export default connector(Login);
