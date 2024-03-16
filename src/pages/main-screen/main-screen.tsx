import { Helmet } from 'react-helmet-async';
import { Offers } from '../../types/offers';
import OfferCardList from '../../components/main-screen/offer-card-list/offer-card-list';
import LocationsTadsList from '../../components/main-screen/locations-tabs-list/locations-tabs-list';
import Map from '../../components/common/map/map';
import { useState } from 'react';
import OffersSortingForm from '../../components/main-screen/offers-sorting-form/offers-sorting-form';
import OffersEmpty from '../../components/main-screen/offers-empty/offers-empty';
import classNames from 'classnames';

type MainScreenProps = {
  offers: Offers;
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const [hoverCardId, setHoverCard] = useState<string | null>(null);
  const handleHoverCard = (id:string|null) => setHoverCard(id);
  //const currentOfferLocation = offers.find((offer) => offer.id === hoverCardId ? offer.city.location : null)?.location;

  const defaultActiveCity = offers[0].city.name;
  const [activeCityTitle, setActiveLink] = useState<string>(defaultActiveCity);
  const handleLinkClick = (cityTitle:string) => setActiveLink(cityTitle);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCityTitle);
  const isOffersEmpty = filteredOffers.length === 0;
  const filteredOffersLocations = filteredOffers.map((offer) => ({
    ...offer.location,
    id: offer.id
  }));
  //consol
  //console.log(activeCityLocation); <-- из-за двух состояний элемент перерисовывается дважды

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className={classNames('page__main', 'page__main--index', {'page__main--index-empty': isOffersEmpty})}>
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTadsList activeCity={activeCityTitle} onLinkClick={handleLinkClick}/>
        <div className="cities">
          {
            isOffersEmpty ? <OffersEmpty/> : (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${filteredOffers.length}  places to stay in  ${activeCityTitle}`}</b>
                  <OffersSortingForm/>
                  <div className="cities__places-list places__list tabs__content">
                    <OfferCardList offers={filteredOffers} onCardHover={handleHoverCard}/>
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map
                    city={filteredOffers[0].city.location}
                    classNamePrefix='cities'
                    points={filteredOffersLocations}
                    selectedPointId={hoverCardId}
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
