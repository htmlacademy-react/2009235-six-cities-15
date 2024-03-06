type StarsRatingProps = {
  rating: number;
  classNamePrefix: 'place-card' | 'reviews' | 'offer';
}

function StarsRating({rating, classNamePrefix}: StarsRatingProps): JSX.Element {
  const width = `${Math.round(rating) * 20}%`;

  return (
    <div className={`${classNamePrefix}__rating rating`}>
      <div className={`${classNamePrefix}__stars rating__stars`}>
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>

      {
        classNamePrefix === 'offer' && (
          <span className="offer__rating-value rating__value">{rating}</span>
        )
      }
    </div>
  );
}

export default StarsRating;
