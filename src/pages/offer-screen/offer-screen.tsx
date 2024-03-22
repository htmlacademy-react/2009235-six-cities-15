import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { offers } from '../../mocks/offers';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import StarsRating from '../../components/common/stars-rating/stars-rating';
import OfferReviews from '../../components/offer-screen/offer-reviews/offer-reviews';
import OfferNearPlacesList from '../../components/offer-screen/offer-near-places-list/offer-near-places-list';
import OfferPrice from '../../components/common/offer-price/offer-price';
import PremiumLabel from '../../components/common/premium-label/premium-label';
import UserInfo from '../../components/common/user-info/user-info';
import Map from '../../components/common/map/map';
import BookmarkButton from '../../components/common/bookmark-button/bookmark-button';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const currentOffer = offers.find((offer) => offer.id === id);

  const nearPlaces = offers.filter((offer) => offer.id !== id);
  const nearPlacesLocations = nearPlaces.map((offer) => ({
    ...offer.location,
    id: offer.id
  }));

  if (!currentOffer) {
    return (<PageNotFoundScreen/>);
  }

  const {title, isPremium, images, rating, type, bedrooms, maxAdults, price, goods, host, description, city, isFavorite} = currentOffer;
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
              <PremiumLabel isPremium={isPremium} classNamePrefix='offer' />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <BookmarkButton isFavorite={isFavorite} classNamePrefix='offer' variant='big'/>
              </div>
              <StarsRating rating={rating} classNamePrefix='offer' variant='full'/>
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
              <OfferPrice price={price} classNamePrefix='offer'/>
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
                <UserInfo user={host} variant='full' />
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <OfferReviews/>
            </div>
          </div>
          <Map
            city={city.location}
            classNamePrefix='offer'
            points={nearPlacesLocations}
          />
        </section>
        <div className="container">
          <OfferNearPlacesList offers={nearPlaces} />
        </div>
      </main>
    </>
  );
}

export default OfferScreen;
