import {Offer} from '../../types/offers';
import {Bookmark} from '../../utils/const';
import {ThunkAppDispatch} from '../../types/action';
import {connect, ConnectedProps} from 'react-redux';
import {fetchOfferIdAction, fetchOfferIdBookmarkAction} from '../../store/api-actions';
import {upperCaseFirst} from '../../utils/common';

type FavoriteCardProps = {
  offer: Offer,
};

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onClickBookmark(offerId: number, status: Bookmark) {
    dispatch(fetchOfferIdBookmarkAction(offerId, status, null));
  },
  onClickOffer(offerId: number) {
    dispatch(fetchOfferIdAction(offerId));
  },
});

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

type ConnectedComponentProps = PropsFromRedux & FavoriteCardProps;

function FavoriteCard({offer, onClickBookmark, onClickOffer}: ConnectedComponentProps):JSX.Element {
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <span style={{cursor: 'pointer'}} onClick={() => onClickOffer(offer.id)}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place icon" />
        </span>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={() => onClickBookmark(offer.id, Bookmark.Delete)}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
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

export {FavoriteCard};
export default connector(FavoriteCard);
