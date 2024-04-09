import { memo } from 'react';
import { Review } from '../../../types/reviews';
import { formatDate } from '../../../utils/format-date/format-date';
import StarsRating from '../../common/stars-rating/stars-rating';
import UserInfo from '../../common/user-info/user-info';

type ReviewProps = {
  review: Review;
}

const OfferReview = memo(
  ({review}: ReviewProps): JSX.Element => {
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
  }
);

OfferReview.displayName = 'OfferReview';

export default OfferReview;
