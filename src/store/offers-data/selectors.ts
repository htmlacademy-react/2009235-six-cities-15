import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { getActiveCityName } from '../app-data/selectors';

const MAX_NEAR_PLACES_COUNT: number = 3;

type OffersDataState = Pick<State, 'offersData'>

export const getOffers = (state:OffersDataState) => state.offersData.offers;
export const getCurrentOffer = (state:OffersDataState) => state.offersData.currentOffer;
export const getReviews = (state:OffersDataState) => state.offersData.reviews;
export const getFavoritesOffers = (state:OffersDataState) => state.offersData.favoritesOffers;
export const getPageStatus = (state:OffersDataState) => state.offersData.pageStatus;
export const getOfferPageStatus = (state:OffersDataState) => state.offersData.offerPageStatus;
export const getFavoritesOffersPageStatus = (state:OffersDataState) => state.offersData.favoritesOffersPageStatus;

export const getOffersByCity = createSelector(
  getOffers,
  getActiveCityName,
  (offers, activeCityName) => offers.filter((offer) => offer.city.name === activeCityName as string)
);

export const getIsFavoritesOffersEmpty = createSelector(getFavoritesOffers, (favoritesOffers) => favoritesOffers.length === 0);

export const getNearPlaces = createSelector(
  (state:OffersDataState) => state.offersData.nearPlaces,
  (nearPlaces) => nearPlaces.slice(0, MAX_NEAR_PLACES_COUNT)
);
