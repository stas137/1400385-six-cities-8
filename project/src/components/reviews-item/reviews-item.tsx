import {Comment} from '../../types/offers';
import {getMonthName} from '../../utils/common';

type ReviewsItemProps = {
  comment: Comment,
}

function ReviewsItem({comment}: ReviewsItemProps):JSX.Element {

  return (
    <li className="reviews__item">
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
            <span className="visually-hidden" data-testid="rating">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment.comment}
        </p>
        <time className="reviews__time" dateTime={String(comment.date)}>{`${getMonthName(new Date(comment.date).getMonth())} ${new Date(comment.date).getFullYear()}`}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
