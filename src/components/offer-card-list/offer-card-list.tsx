import { Offers } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OfferCardListProps = {
  offers: Offers;
}

function OfferCardList({offers}: OfferCardListProps) {
  return (
    offers.map((offer) => <OfferCard offer={offer} key={offer.id} />)
  );
}

export default OfferCardList;
