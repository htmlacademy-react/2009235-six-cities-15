import { useAuth } from '../../../hooks/use-auth';
import OfferReviewForm from '../offer-review-form/offer-review-form';
import OfferReviewsList from '../offer-reviews-list/offer-reviews-list';


function OfferReviews(): JSX.Element {
  const {isAuth} = useAuth();

  return (
    <section className="offer__reviews reviews">
      <OfferReviewsList />
      {
        isAuth && <OfferReviewForm />
      }
    </section>
  );
}

export default OfferReviews;
