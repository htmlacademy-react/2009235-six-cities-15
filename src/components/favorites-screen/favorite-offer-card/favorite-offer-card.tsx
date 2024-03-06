import { Link } from 'react-router-dom';
import { Offer } from '../../../types/offers';
import StarsRating from '../../common/stars-rating/stars-rating';
import { AppRoute } from '../../../const';

type FavoriteOfferCardProps = {
  offer: Offer;
}

function FavoriteOfferCard({offer}: FavoriteOfferCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type, id} = offer;
  const offerURL = AppRoute.Offer.replace(':id', id);

  return (
    <article className="favorites__card place-card">
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerURL}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt={title} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <StarsRating rating={rating} />
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteOfferCard;
