import { useAppSelector } from '../../../hooks/redux';
import { useAuth } from '../../../hooks/use-auth';
import { getReviews } from '../../../store/offers-data/selectors';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';

const MAX_REVIEWS_COUNT: number = 10;

function OfferReviews(): JSX.Element {
  const {isAuth} = useAuth();
  const reviews = useAppSelector(getReviews).slice(-MAX_REVIEWS_COUNT);

  return (
    <section className="offer__reviews reviews">
      <ReviewsList reviews={reviews}/>
      {
        isAuth && <ReviewForm />
      }
    </section>
  );
}

export default OfferReviews;
