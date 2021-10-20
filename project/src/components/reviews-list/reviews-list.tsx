import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  countReviews: number,
}

function ReviewsList({countReviews}: ReviewsListProps):JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{countReviews}</span></h2>
      <ul className="reviews__list">
        <ReviewsItem />
      </ul>
    </>
  );
}

export default ReviewsList;
