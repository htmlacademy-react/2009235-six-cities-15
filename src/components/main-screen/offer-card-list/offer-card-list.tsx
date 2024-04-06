import { useOffersSort } from '../../../hooks/use-offers-sort';
import { Offers } from '../../../types/offers';
import OfferCard from '../../common/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offers;
}

function OfferCardList({offers}: OfferCardListProps) {
  const sortedOffers = useOffersSort(offers);

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortedOffers.map((offer) => (
        <OfferCard
          offer={offer}
          classNamePrefix='cities'
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default OfferCardList;
