import Logo from '../logo/logo';
import FormComment from '../form-comment/form-comment';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import {Offers} from '../../types/offers';
import CardsList from '../cards-list/cards-list';
import {AppRoute, AuthorizationStatus, Type} from '../../const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

type PropertyProps = {
  currentCityOffers: Offers,
};

const mapStateToProps = ({offer, nearBy, comments, authorizationStatus, userData}: State) => ({
  offer,
  nearBy,
  comments,
  authorizationStatus,
  userData,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PropertyProps;

function Property({currentCityOffers, offer, nearBy, comments, authorizationStatus, userData}: ConnectedComponentProps):JSX.Element {
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
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {
                      <span className="header__user-name user__name">{userData.email}</span>
                    }
                  </a>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.SignIn}>
                    {
                      authorizationStatus === AuthorizationStatus.Auth
                        ? <span className="header__signout">Sign out</span>
                        : <span className="header__signin">Sign in</span>
                    }
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.images.map((imageUrl) => (
                  <div className="property__image-wrapper" key={imageUrl}>
                    <img className="property__image" src={imageUrl} alt="Carousel studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer.isPremium
                  ? <div className="property__mark"><span>Premium</span></div>
                  : ''
              }

              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${(offer.rating / 5) * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    offer.goods.map((good) => <li className="property__inside-item" key={good}>{good}</li>)
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.isPro
                      ? <span className="property__user-status">Pro</span>
                      : ''
                  }

                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList
                  comments={comments}
                />
                {
                  authorizationStatus === AuthorizationStatus.Auth
                    ? <FormComment offerId={offer.id} />
                    : ''
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              currentCityOffers={currentCityOffers}
              selectedOfferId={null}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList
                currentCityOffers={nearBy}
                type={Type.Property}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export {Property};
export default connector(Property);
