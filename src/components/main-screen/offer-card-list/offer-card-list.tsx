//import { useState } from 'react';
import { Offers } from '../../../types/offers';
import OfferCard from '../../common/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offers;
  onCardHover: (id: string | null) => void;
}

function OfferCardList({offers, onCardHover}: OfferCardListProps) {
  return (
    offers.map((offer) => (
      <OfferCard
        offer={offer}
        classNamePrefix='cities'
        onCardHover={onCardHover}
        key={offer.id}
      />
    ))
  );
}

export default OfferCardList;

/*
type OfferCardListProps = {
  offers: Offers;
}

function OfferCardList({offers}: OfferCardListProps) {
  const [hoverCardId, setHoverCard] = useState<string | null>(null);

  const handleHoverCard = (id:string|null) => setHoverCard(id);

  return (
    offers.map((offer) => <OfferCard offer={offer} classNamePrefix='cities' onCardHover={handleHoverCard} key={offer.id} />)
  );
}
*/
