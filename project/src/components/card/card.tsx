import {Offer} from '../../types/offers';
import {Bookmark, Type} from '../../utils/const';
import {ThunkAppDispatch} from '../../types/action';
import {setActiveCard} from '../../store/action';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {fetchOfferIdAction, fetchOfferIdBookmarkAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type CardProps = {
  offer: Offer,
  type: Type,
};

const mapStateToProps = (state: State) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onMouseAction(selectedOfferId: number | null) {
    dispatch(setActiveCard(selectedOfferId));
  },
  onClickOffer(offerId: number) {
    dispatch(fetchOfferIdAction(offerId));
  },
  onClickBookmark(offerId: number, status: Bookmark) {
    dispatch(fetchOfferIdBookmarkAction(offerId, status));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = CardProps & PropsFromRedux;

function Card({onMouseAction, onClickOffer, onClickBookmark, authorizationStatus, offer, type}: ConnectedComponentProps):JSX.Element {

  return (
    <article className={type === Type.Main ? 'cities__place-card place-card' : 'near-places__card place-card'} onMouseEnter={() => onMouseAction(offer.id)} onMouseLeave={() => onMouseAction(null)}>
      {type === Type.Main && offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : ''}
      <div className={type === Type.Main ? 'cities__image-wrapper place-card__image-wrapper' : 'near-places__image-wrapper place-card__image-wrapper'}>
        <span style={{cursor: 'pointer'}} onClick={() => onClickOffer(offer.id)}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place icon" />
        </span>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          {offer.isFavorite ?
            <button className="place-card__bookmark-button button place-card__bookmark-button--active" type="button" onClick={() => onClickBookmark(offer.id, Bookmark.Delete)}>
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button> :
            <button className="place-card__bookmark-button button" type="button" onClick={() => onClickBookmark(offer.id, Bookmark.Add)}>
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>}

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(offer.rating / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <span style={{cursor: 'pointer'}} onClick={() => onClickOffer(offer.id)}>
            {offer.title}
          </span>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export {Card};
export default connector(Card);
