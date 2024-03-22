import { useAppSelector } from '../../../hooks/redux';
import OfferCard from '../../common/offer-card/offer-card';


function FavoriteOfferCardList(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favoritesOffers = offers.filter(({ isFavorite }) => isFavorite);
  const citiesNames = [...new Set(offers.map((offer) => offer.city.name))];

  return (
    <ul className="favorites__list">
      {
        citiesNames.map((cityName) => {
          const favoritesOffersByCity = favoritesOffers.filter((offer) => offer.city.name === cityName);

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
                  favoritesOffersByCity.map((offer) => <OfferCard offer={offer} key={offer.id} classNamePrefix='favorites' variant='horizontal'/>)
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
