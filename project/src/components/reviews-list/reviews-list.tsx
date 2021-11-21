import ReviewsItem from '../reviews-item/reviews-item';
import {Comments, Comment} from '../../types/offers';
import {compareCommentDate} from '../../utils/common';

type ReviewListProps = {
  comments: Comments,
}

function ReviewsList({comments}: ReviewListProps):JSX.Element {
  const commentsSorted = [...comments].sort(compareCommentDate);
  const commentsFirst = commentsSorted.length <= 10 ? [...commentsSorted] : [...comments.slice(0, 10)];

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length ? comments.length : ''}</span></h2>
      {
        comments.length
          ?
          <ul className="reviews__list">
            {
              commentsFirst.map((comment: Comment) => (
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
