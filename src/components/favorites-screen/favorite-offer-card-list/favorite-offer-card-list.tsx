import { Offers } from '../../../types/offers';
import OfferCard from '../../common/offer-card/offer-card';

type FavoriteOfferCardListProps = {
  offers: Offers;
}

function FavoriteOfferCardList({offers}: FavoriteOfferCardListProps): JSX.Element {
  const citiesNames = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <ul className="favorites__list">
      {
        citiesNames.map((cityName) => {
          const favoritesOffers = offers.filter((offer) => offer.city.name === cityName);

          return (
            <li className="favorites__locations-items" key={cityName}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{cityName}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  favoritesOffers.map((offer) => <OfferCard offer={offer} key={offer.id} classNamePrefix='favorites' variant='horizontal'/>)
                }
              </div>
            </li>
          );
        })
      }
    </ul>
  );
}

export default FavoriteOfferCardList;
