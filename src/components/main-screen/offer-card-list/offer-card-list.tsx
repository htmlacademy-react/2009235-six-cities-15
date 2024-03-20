//import { useState } from 'react';
import { useOffersSort } from '../../../hooks/use-offers-sort';
import { Offers } from '../../../types/offers';
import OfferCard from '../../common/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offers;
}

function OfferCardList({offers}: OfferCardListProps) {
  const sortedOffers = useOffersSort(offers);

  return (
    sortedOffers.map((offer) => (
      <OfferCard
        offer={offer}
        classNamePrefix='cities'
        key={offer.id}
      />
    ))
  );
}

export default OfferCardList;
