import {Offer} from '../../types/offers';
import {Bookmark, Type} from '../../utils/const';
import {ThunkAppDispatch} from '../../types/action';
import {setActiveCard} from '../../store/action';
import {connect, ConnectedProps} from 'react-redux';
import {fetchOfferIdAction, fetchOfferIdBookmarkAction} from '../../store/api-actions';
import {upperCaseFirst} from '../../utils/common';

type CardProps = {
  offer: Offer,
  type: Type,
  offerCurrentId: number | null,
};

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onMouseAction(selectedOfferId: number | null) {
    dispatch(setActiveCard(selectedOfferId));
  },
  onClickOffer(offerId: number) {
    dispatch(fetchOfferIdAction(offerId));
  },
  onClickBookmark(offerId: number, status: Bookmark, offerCurrentId: number | null) {
    dispatch(fetchOfferIdBookmarkAction(offerId, status, offerCurrentId));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = CardProps & PropsFromRedux;

function Card({onMouseAction, onClickOffer, onClickBookmark, offer, type, offerCurrentId}: ConnectedComponentProps):JSX.Element {

  return (
    <article className={type === Type.Main ? 'cities__place-card place-card' : 'near-places__card place-card'}
      onMouseEnter={() => type === Type.Main ? onMouseAction(offer.id) : ''}
      onMouseLeave={() => type === Type.Main ? onMouseAction(null) : ''}
    >
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

          <button
            className={offer.isFavorite ? 'place-card__bookmark-button button place-card__bookmark-button--active' : 'place-card__bookmark-button button'}
            type="button" onClick={() => onClickBookmark(offer.id, offer.isFavorite ? Bookmark.Delete : Bookmark.Add, offerCurrentId)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(Math.round(offer.rating) / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <span style={{cursor: 'pointer'}} onClick={() => onClickOffer(offer.id)}>
            {offer.title}
          </span>
        </h2>
        <p className="place-card__type">{upperCaseFirst(offer.type)}</p>
      </div>
    </article>
  );
}

export {Card};
export default connector(Card);
