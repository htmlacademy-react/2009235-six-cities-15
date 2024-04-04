import { Offers } from '../../../types/offers';
import OfferCard from '../../common/offer-card/offer-card';

type OfferNearPlacesListProps = {
  offers: Offers;
}

function OfferNearPlacesList({offers}:OfferNearPlacesListProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offers.map((offer) => (
            <OfferCard offer={offer} key={offer.id} classNamePrefix='near-places'/>
          ))
        }
      </div>
    </section>
  );
}

export default OfferNearPlacesList;
