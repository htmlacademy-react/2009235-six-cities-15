//import { useState } from 'react';
import { Offers } from '../../../types/offers';
import OfferCard from '../../common/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offers;
}

function OfferCardList({offers}: OfferCardListProps) {
  return (
    offers.map((offer) => (
      <OfferCard
        offer={offer}
        classNamePrefix='cities'
        key={offer.id}
      />
    ))
  );
}

export default OfferCardList;
