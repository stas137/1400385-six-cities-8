import ReviewsItem from '../reviews-item/reviews-item';
import {Comments, Comment} from '../../types/offers';

type ReviewListProps = {
  comments: Comments,
}

function ReviewsList({comments}: ReviewListProps):JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length ? comments.length : ''}</span></h2>
      {
        comments.length
          ?
          <ul className="reviews__list">
            {
              comments.map((comment: Comment) => (
                <ReviewsItem
                  key={comment.id}
                  comment={comment}
                />))
            }
          </ul>
          : ''
      }
    </>
  );
}

export default ReviewsList;
