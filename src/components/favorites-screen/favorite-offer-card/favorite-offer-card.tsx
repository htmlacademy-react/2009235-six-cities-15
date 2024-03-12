import { Link } from 'react-router-dom';
import { Offer } from '../../../types/offers';
import StarsRating from '../../common/stars-rating/stars-rating';
import { AppRoute } from '../../../const';
import PremiumLabel from '../../common/premium-label/premium-label';
import OfferPrice from '../../common/offer-price/offer-price';
import BookmarkButton from '../../common/bookmark-button/bookmark-button';

type FavoriteOfferCardProps = {
  offer: Offer;
}

function FavoriteOfferCard({offer}: FavoriteOfferCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type, id, isFavorite} = offer;
  const offerURL = AppRoute.Offer.replace(':id', id);

  return (
    <article className="favorites__card place-card">
      <PremiumLabel isPremium={isPremium} classNamePrefix='place-card'/>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerURL}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt={title} />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <OfferPrice price={price} classNamePrefix='place-card'/>
          <BookmarkButton isFavorite={isFavorite}/>
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

export default FavoriteOfferCard;
