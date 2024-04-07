import { Reviews } from '../../../types/reviews';
import OfferReview from '../review/review';

type OfferReviewsListProps = {
  reviews: Reviews;
  maxCount?: number;
}

function ReviewsList({reviews, maxCount = 0}: OfferReviewsListProps): JSX.Element {
  const sortedMoreLaterReviews = reviews.toSorted((a, b) => Date.parse(b.date) - Date.parse(a.date));
  const displayedReviews = maxCount > 0 ? sortedMoreLaterReviews.slice(0, maxCount) : reviews;

  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          displayedReviews.map((review) => (<OfferReview review={review} key={review.id}/>))
        }
      </ul>
    </>
  );
}

export default ReviewsList;
