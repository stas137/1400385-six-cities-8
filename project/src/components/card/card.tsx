import {Link} from 'react-router-dom';
import {Offer} from '../../types/offers';
import {Type} from '../../const';
import {Actions} from '../../types/action';
import {leaveMouse, enterMouse} from '../../store/action';
import {State} from '../../types/state';
import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';

type CardProps = {
  offer: Offer,
  type: Type,
};

const mapStateToProps = ({selectedOfferId}: State) => ({
  selectedOfferId,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onMouseEnter(selectedOfferId: string) {
    dispatch(enterMouse(selectedOfferId));
  },

  onMouseLeave() {
    dispatch(leaveMouse());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = CardProps & PropsFromRedux;

function Card({onMouseEnter, onMouseLeave, offer, type}: ConnectedComponentProps):JSX.Element {

  return (
    <article className={type === Type.Main ? 'cities__place-card place-card' : 'near-places__card place-card'} onMouseEnter={() => onMouseEnter(offer.id)} onMouseLeave={() => onMouseLeave()}>
      {type === Type.Main && offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : ''}
      <div className={type === Type.Main ? 'cities__image-wrapper place-card__image-wrapper' : 'near-places__image-wrapper place-card__image-wrapper'}>
        <a href="/#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place icon" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          {offer.isFavorite ?
            <button className="place-card__bookmark-button button place-card__bookmark-button--active" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button> :
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>}

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(offer.rate / 5) * 100}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.propertyType}</p>
      </div>
    </article>
  );
}

export {Card};
export default connector(Card);
