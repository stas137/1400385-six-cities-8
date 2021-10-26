import {Offer} from '../../types/offers';

type ReviewsItemProps = {
  offer: Offer,
}

function ReviewsItem({offer}: ReviewsItemProps):JSX.Element {

  return (
    <div></div>
    /*{
      offer?.comments ? offer.comments.map((comment: Comment) => (
        <li className="reviews__item" key={comment.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
            </div>
            <span className="reviews__user-name">
              {comment.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${(comment.rating / 5) * 100}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {comment.comment}
            </p>
            <time className="reviews__time" dateTime={String(comment.date)}>{`${getMonthName(comment.date.getMonth())} ${comment.date.getFullYear()}`}</time>
          </div>
        </li>
        )) : ''
      }*/
  );
}

export default ReviewsItem;
