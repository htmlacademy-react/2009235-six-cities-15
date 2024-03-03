type OfferRatingProps = {
  rating: number;
  className ?: string;
}

function OfferRating({rating, className = 'place-card'}: OfferRatingProps): JSX.Element {
  const width = `${Math.round(rating) * 20}%`;

  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>

      {
        className === 'offer' && (
          <span className="offer__rating-value rating__value">{rating}</span>
        )
      }
    </div>
  );
}

export default OfferRating;
