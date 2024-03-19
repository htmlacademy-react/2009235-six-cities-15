import { Helmet } from 'react-helmet-async';
import OfferCardList from '../../components/main-screen/offer-card-list/offer-card-list';
import LocationsTadsList from '../../components/main-screen/locations-tabs-list/locations-tabs-list';
import Map from '../../components/common/map/map';
import OffersSortingForm from '../../components/main-screen/offers-sorting-form/offers-sorting-form';
import OffersEmpty from '../../components/main-screen/offers-empty/offers-empty';
import classNames from 'classnames';
import { useAppSelector } from '../../hooks/redux';

function MainScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const activeCityName = useAppSelector((state) => state.activeCityName);

  const offersByCity = offers.filter((offer) => offer.city.name === activeCityName);
  const isOffersEmpty = offersByCity.length === 0;
  const cityPoints = offersByCity.map((offer) => ({
    ...offer.location,
    id: offer.id
  }));

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className={classNames('page__main', 'page__main--index', {'page__main--index-empty': isOffersEmpty})}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTadsList/>
        <div className="cities">
          {
            isOffersEmpty ? <OffersEmpty cityName={activeCityName}/> : (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${offersByCity.length}  places to stay in  ${activeCityName}`}</b>
                  <OffersSortingForm/>
                  <div className="cities__places-list places__list tabs__content">
                    <OfferCardList offers={offersByCity}/>
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map
                    city={offersByCity[0].city.location}
                    classNamePrefix='cities'
                    points={cityPoints}
                  />
                </div>
              </div>
            )
          }
        </div>
      </main>
    </>
  );
}

export default MainScreen;
