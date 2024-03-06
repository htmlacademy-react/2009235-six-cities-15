import { useState } from 'react';
import { Offers } from '../../../types/offers';
import OfferCard from '../../common/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offers;
}

function OfferCardList({offers}: OfferCardListProps) {
  const [hoverCardId, setHoverCard] = useState<string | null>(null);

  const handleHoverCard = (id:string|null) => setHoverCard(id);

  return (
    offers.map((offer) => <OfferCard offer={offer} onCardHover={handleHoverCard} key={offer.id} />)
  );
}

export default OfferCardList;
