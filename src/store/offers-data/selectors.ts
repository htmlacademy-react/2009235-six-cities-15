import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';
import { getActiveCityName } from '../app-data/selectors';
import { CityName } from '../../const';

type OffersDataState = Pick<State, 'offersData'>

export const getOffers = (state:OffersDataState) => state.offersData.offers;
export const getPageStatus = (state:OffersDataState) => state.offersData.pageStatus;
export const getCurrentOffer = (state:OffersDataState) => state.offersData.currentOffer;
export const getNearPlaces = (state:OffersDataState) => state.offersData.nearPlaces;
export const getReviews = (state:OffersDataState) => state.offersData.reviews;

export const getOffersByCity = createSelector(
  getOffers,
  getActiveCityName,
  (offers, activeCityName) => offers.filter((offer) => offer.city.name as CityName === activeCityName)
);

