import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { Offer } from '../../../types/offers';
import StarsRating from '../stars-rating/stars-rating';

type OfferCardProps = {
  offer: Offer;
  classNamePrefix: 'cities' | 'near-places';
  onCardHover?: (id: string | null) => void;
}

function OfferCard({offer, classNamePrefix, onCardHover}: OfferCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type, id} = offer;
  const offerURL = generatePath(AppRoute.Offer, {id});

  const handleOnMouseEnter = () => onCardHover ? onCardHover(id) : undefined;
  const handleOnMouseLeave = () => onCardHover ? onCardHover(null) : undefined;

  return (
    <article
      className={`${classNamePrefix}__card place-card`}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}>
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
        <StarsRating rating={rating} classNamePrefix='place-card'/>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
