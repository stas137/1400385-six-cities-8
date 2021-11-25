import FormComment from '../form-comment/form-comment';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import CardsList from '../cards-list/cards-list';
import {AuthorizationStatus, Bookmark, Type} from '../../utils/const';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import Header from '../header/header';
import {ThunkAppDispatch} from '../../types/action';
import {fetchOfferIdBookmarkAction, logoutAction} from '../../store/api-actions';
import {SyntheticEvent} from 'react';
import {getSelectedOfferId} from '../../store/book-process/selectors';
import {getComments, getNearBy, getOffer} from '../../store/offers-data/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/user-process/selectors';
import {upperCaseFirst} from '../../utils/common';


const mapStateToProps = (state: State) => ({
  offer: getOffer(state),
  nearBy: getNearBy(state),
  comments: getComments(state),
  selectedOfferId: getSelectedOfferId(state),
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickLogout() {
    dispatch(logoutAction());
  },
  onClickBookmark(offerId: number, status: Bookmark) {
    dispatch(fetchOfferIdBookmarkAction(offerId, status, null));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Property(props: PropsFromRedux):JSX.Element {

  const {offer, nearBy, comments, selectedOfferId, authorizationStatus, userData, onClickLogout, onClickBookmark} = props;
  const offerImages = offer.images.slice(0, 6);

  const handlerLinkClick = (e: SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    onClickLogout();
  };

  return (
    <div className="page">
      <Header
        authorizationStatus={authorizationStatus}
        userData={userData}
        onLinkClick={handlerLinkClick}
      />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offerImages.map((imageUrl) => (
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

                <button
                  className={offer.isFavorite ? 'property__bookmark-button button property__bookmark-button--active' : 'property__bookmark-button button'}
                  type="button" onClick={() => onClickBookmark(offer.id, offer.isFavorite ? Bookmark.Delete : Bookmark.Add)}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${(Math.round(offer.rating) / 5) * 100}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {upperCaseFirst(offer.type)}
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
              currentCityOffers={[...nearBy, offer]}
              selectedOfferId={selectedOfferId}
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
                offerCurrentId={offer.id}
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
