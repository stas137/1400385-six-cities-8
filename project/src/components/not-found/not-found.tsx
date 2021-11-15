import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

function NotFound():JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">404. Page not found</h1>
            <p className="favorites__title"><Link to="/">Вернуться на главную страницу</Link></p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
