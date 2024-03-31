import { Reviews } from '../../../types/reviews';
import { formatDate } from '../../../utils/format-date/format-date';
import StarsRating from '../../common/stars-rating/stars-rating';
import UserInfo from '../../common/user-info/user-info';

type OfferReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: OfferReviewsListProps): JSX.Element {
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
                <UserInfo user={user} variant='review'/>
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

export default ReviewsList;
