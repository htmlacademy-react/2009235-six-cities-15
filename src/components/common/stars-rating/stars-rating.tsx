type StarsRatingProps = {
  rating: number;
  ratingClassName ?: string;
}

function StarsRating({rating, ratingClassName = 'place-card'}: StarsRatingProps): JSX.Element {
  const width = `${Math.round(rating) * 20}%`;

  return (
    <div className={`${ratingClassName}__rating rating`}>
      <div className={`${ratingClassName}__stars rating__stars`}>
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>

      {
        ratingClassName === 'offer' && (
          <span className="offer__rating-value rating__value">{rating}</span>
        )
      }
    </div>
  );
}

export default StarsRating;
