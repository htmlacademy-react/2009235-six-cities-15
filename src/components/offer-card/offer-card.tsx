import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offers';
import OfferRating from '../offer-rating/offer-rating';

type OfferCardProps = {
  offer: Offer;
}

function OfferCard({offer}: OfferCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type, id} = offer;
  const offerURL = generatePath(AppRoute.Offer, {id});

  return (
    <article className="cities__card place-card">
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerURL}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <OfferRating rating={rating} />
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
