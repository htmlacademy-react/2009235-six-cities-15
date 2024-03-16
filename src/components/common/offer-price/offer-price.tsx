type OfferPriceProps = {
  price: number;
  classNamePrefix: 'place-card' | 'offer';
}

function OfferPrice({price, classNamePrefix}: OfferPriceProps): JSX.Element {
  return (
    <div className={`${classNamePrefix}__price`}>
      <b className={`${classNamePrefix}__price-value`}>€{price}</b>
      <span className={`${classNamePrefix}__price-text`}>/&nbsp;night</span>
    </div>
  );
}

export default OfferPrice;
