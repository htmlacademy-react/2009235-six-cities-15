import { Helmet } from 'react-helmet-async';
import { Offers } from '../../types/offers';
import OfferCardList from '../../components/main-screen/offer-card-list/offer-card-list';
import LocationsTadsList from '../../components/main-screen/locations-tabs-list/locations-tabs-list';
import Map from '../../components/main-screen/map/map';
import { useState } from 'react';
import OffersSortingForm from '../../components/main-screen/offers-sorting-form/offers-sorting-form';

type MainScreenProps = {
  offers: Offers;
}

function MainScreen({offers}: MainScreenProps): JSX.Element {
  const [hoverCardId, setHoverCard] = useState<string | null>(null);
  const handleHoverCard = (id:string|null) => setHoverCard(id);
  const currentOffer = offers.find((offer) => offer.id === hoverCardId ? offer : null);// eslint-disable-line

  const defaultActiveCity = offers[0].city.name;
  const [activeCity, setActiveLink] = useState<string>(defaultActiveCity);
  const handleLinkClick = (cityTitle:string) => setActiveLink(cityTitle);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <>
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <LocationsTadsList activeCity={activeCity} onLinkClick={handleLinkClick}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${filteredOffers.length}  places to stay in  ${activeCity}`}</b>
              <OffersSortingForm/>
              <div className="cities__places-list places__list tabs__content">
                <OfferCardList offers={filteredOffers} onCardHover={handleHoverCard}/>
              </div>
            </section>
            <div className="cities__right-section">
              <Map/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainScreen;
