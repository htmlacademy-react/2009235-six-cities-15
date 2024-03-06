import { reviews } from '../../../mocks/reviews';
import OfferReviewForm from '../offer-review-form/offer-review-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';


function OfferReviews(): JSX.Element {
  return (
    <section className="offer__reviews reviews">
      <OfferReviewsList reviews={reviews}/>
      <OfferReviewForm />
    </section>
  );
}

export default OfferReviews;
