import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { offers } from '../../mocks/offers';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import StarsRating from '../../components/common/stars-rating/stars-rating';
import OfferReviews from '../../components/offer-screen/offer-reviews/offer-reviews';
import OfferNearPlacesList from '../../components/offer-screen/offer-near-places-list/offer-near-places-list';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const currentOffer = offers.find((offer) => offer.id === id);
  const nearPlaces = offers.filter((offer) => offer.id !== id);

  if (!currentOffer) {
    return (<PageNotFoundScreen/>);
  }

  const {title, isPremium, images, rating, type, bedrooms, maxAdults, price, goods, host, description} = currentOffer;
  return (
    <>
      <Helmet>
        <title>6 cities: {title}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                images.slice(0,6).map((image) => (
                  <div className="offer__image-wrapper" key={image}>
                    <img className="offer__image" src={image} alt="Photo studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <StarsRating rating={rating} classNamePrefix='offer' />
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    goods.map((good) => (
                      <li className="offer__inside-item" key={good}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`${host.isPro ?? 'offer__avatar-wrapper--pro'} offer__avatar-wrapper user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  <span className="offer__user-status">{host.isPro ?? 'Pro'}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <OfferReviews/>
            </div>
          </div>
          <section className="offer__map map" />
        </section>
        <div className="container">
          <OfferNearPlacesList offers={nearPlaces} />
        </div>
      </main>
    </>
  );
}

export default OfferScreen;
