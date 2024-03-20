//import { useState } from 'react';
import { useAppSelector } from '../../../hooks/redux';
import { Offers } from '../../../types/offers';
import { sortByOption } from '../../../utils/sort/sort';
import OfferCard from '../../common/offer-card/offer-card';

type OfferCardListProps = {
  offers: Offers;
}

function OfferCardList({offers}: OfferCardListProps) {
  const activeSortOption = useAppSelector((state) => state.activeSortOption);
  const sortedOffers = sortByOption(activeSortOption, offers);

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
