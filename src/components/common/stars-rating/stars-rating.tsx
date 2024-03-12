type StarsRatingProps = {
  rating: number;
  classNamePrefix: 'place-card' | 'reviews' | 'offer';
  variant?: 'full' | 'card';
}

function StarsRating({rating, classNamePrefix, variant = 'card'}: StarsRatingProps): JSX.Element {
  const width = `${Math.round(rating) * 20}%`;

  return (
    <div className={`${classNamePrefix}__rating rating`}>
      <div className={`${classNamePrefix}__stars rating__stars`}>
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>

      {
        variant === 'full' && (
          <span className={`${classNamePrefix}r__rating-value rating__value`}>{rating}</span>
        )
      }
    </div>
  );
}

export default StarsRating;
