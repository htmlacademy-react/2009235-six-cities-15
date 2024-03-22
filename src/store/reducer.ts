import { createReducer } from '@reduxjs/toolkit';
import { setActiveCityAction, setHoverOfferIdAction, fetchOffersAction, setSortOptionAction } from './action';
import { Offers } from '../types/offers';
import { CityName, SortOptions } from '../const';
import { offers } from '../mocks/offers';

type AppState = {
  activeCityName: CityName;
  hoverOfferId: string | null;
  offers: Offers;
  activeSortOption: SortOptions;
};

const initialState:AppState = {
  activeCityName: CityName.Paris,
  hoverOfferId: null,
  offers,
  activeSortOption: SortOptions.POPULAR,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCityAction, (state, action) => {
      state.activeCityName = action.payload;
    })
    .addCase(setHoverOfferIdAction, (state, action) => {
      state.hoverOfferId = action.payload;
    })
    .addCase(fetchOffersAction, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOptionAction, (state, action) => {
      state.activeSortOption = action.payload;
    });
});
