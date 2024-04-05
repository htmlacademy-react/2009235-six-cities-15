import { Reviews } from '../../../types/reviews';
import OfferReview from '../review/review';

type OfferReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: OfferReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => (<OfferReview review={review} key={review.id}/>))
        }
      </ul>
    </>
  );
}

export default ReviewsList;
