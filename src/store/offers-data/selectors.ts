import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { getActiveCityName } from '../app-data/selectors';
import { CityName } from '../../const';

type OffersDataState = Pick<State, 'offersData'>

export const getOffers = (state:OffersDataState) => state.offersData.offers;
export const getCurrentOffer = (state:OffersDataState) => state.offersData.currentOffer;
export const getNearPlaces = (state:OffersDataState) => state.offersData.nearPlaces;
export const getReviews = (state:OffersDataState) => state.offersData.reviews;
export const getFavoritesOffers = (state:OffersDataState) => state.offersData.favoritesOffers;
export const getPageStatus = (state:OffersDataState) => state.offersData.pageStatus;
export const getOfferPageStatus = (state:OffersDataState) => state.offersData.offerPageStatus;

export const getOffersByCity = createSelector(
  getOffers,
  getActiveCityName,
  (offers, activeCityName) => offers.filter((offer) => offer.city.name as CityName === activeCityName)
);

export const getIsFavoritesOffers = createSelector(getFavoritesOffers, (favoritesOffers) => favoritesOffers.length > 0);
