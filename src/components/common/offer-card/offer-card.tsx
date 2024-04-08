import { Link, generatePath } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { Offer } from '../../../types/offers';
import StarsRating from '../stars-rating/stars-rating';
import OfferPrice from '../offer-price/offer-price';
import PremiumLabel from '../premium-label/premium-label';
import BookmarkButton from '../bookmark-button/bookmark-button';
import classNames from 'classnames';
import { useAppDispatch } from '../../../hooks/redux';
import { appDataActions } from '../../../store/app-data/slise';
import { Nullable } from '../../../types/common';
import { fetchFavoritesOfferStatusAction } from '../../../store/api-actions';
import { memo } from 'react';

const variantConfig = {
  vertical: {
    width: 260,
    height: 200
  },
  horizontal: {
    width: 150,
    height: 110
  }
};

type OfferCardProps = {
  offer: Offer;
  classNamePrefix: 'cities' | 'favorites' |'near-places';
  variant?: 'vertical' | 'horizontal';
}

function OfferCard({offer, classNamePrefix, variant = 'vertical'}: OfferCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type, id, isFavorite} = offer;
  const offerURL = generatePath(AppRoute.Offer, {id});
  const {width, height} = variantConfig[variant];
  const isHoverEnabled = classNamePrefix === 'cities';

  const dispatch = useAppDispatch();
  const handleHoverId = (offerId: Nullable<string>) => isHoverEnabled ? dispatch(appDataActions.setHoverOfferIdAction(offerId)) : undefined;
  const handleOnMouseEnter = () => handleHoverId(id);
  const handleOnMouseLeave = () => handleHoverId(null);
  const handleBookmarkButtonClick = () => {
    dispatch(fetchFavoritesOfferStatusAction(offer));
  };

  return (
    <article
      className={`${classNamePrefix}__card place-card`}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <PremiumLabel isPremium={isPremium} classNamePrefix='place-card'/>
      <div className={`${classNamePrefix}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerURL}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt={title} />
        </Link>
      </div>
      <div className={classNames('place-card__info', {'place-card__info': variant === 'horizontal'})}>
        <div className="place-card__price-wrapper">
          <OfferPrice price={price} classNamePrefix='place-card'/>
          <BookmarkButton isFavorite={isFavorite} onButtonClick={handleBookmarkButtonClick}/>
        </div>
        <StarsRating rating={rating} classNamePrefix='place-card'/>
        <h2 className="place-card__name">
          <Link to={offerURL}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default memo(OfferCard);
