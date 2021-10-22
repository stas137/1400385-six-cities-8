import ReviewsItem from '../reviews-item/reviews-item';
import {Offer} from '../../types/offers';

type ReviewsListProps = {
  offer: Offer,
}

function ReviewsList({offer}: ReviewsListProps):JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.comments.length}</span></h2>
      <ul className="reviews__list">
        <ReviewsItem
          offer={offer}
        />
      </ul>
    </>
  );
}

export default ReviewsList;
