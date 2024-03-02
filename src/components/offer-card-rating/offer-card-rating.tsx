type OfferCardRatingProps = {
  rating: number;
}

function OfferCardRating({rating}: OfferCardRatingProps): JSX.Element {
  const width = `${Math.round(rating) * 20}%`;

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width}} />
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}

export default OfferCardRating;
