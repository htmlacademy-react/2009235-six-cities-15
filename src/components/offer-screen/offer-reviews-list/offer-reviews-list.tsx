import { Reviews } from '../../../types/reviews';
import { formatDate } from '../../../utils/format-date/format-date';
import StarsRating from '../../common/stars-rating/stars-rating';

type OfferReviewsListProps = {
  reviews: Reviews;
}

function OfferReviewsList({reviews}: OfferReviewsListProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => {
            const {id, user, rating, comment, date} = review;
            const commentDate = formatDate(date);

            return (
              <li className="reviews__item" key={id}>
                <div className="reviews__user user">
                  <div className={`${user.isPro ?? 'reviews__avatar-wrapper--pro'} reviews__avatar-wrapper user__avatar-wrapper`}>
                    <img className="reviews__avatar user__avatar" src={user.avatarUrl} width={54} height={54} alt={`${user.name}\`s avatar `} />
                  </div>
                  <span className="reviews__user-name">
                    {user.name}
                  </span>
                </div>
                <div className="reviews__info">
                  <StarsRating rating={rating} classNamePrefix='reviews'/>
                  <p className="reviews__text">
                    {comment}
                  </p>
                  <time className="reviews__time" dateTime={date}>{commentDate}</time>
                </div>
              </li>
            );
          })
        }
      </ul>
    </>
  );
}

export default OfferReviewsList;
