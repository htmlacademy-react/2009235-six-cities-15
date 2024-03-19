import { createReducer } from '@reduxjs/toolkit';
import { setActiveCityAction, setHoverOfferIdAction, fetchOffers } from './action';
import { Offers } from '../types/offers';
import { CityName } from '../const';
import { offers } from '../mocks/offers';

type AppState = {
  activeCityName: CityName;
  hoverOfferId: string | null;
  offers: Offers;
};

const initialState:AppState = {
  activeCityName: CityName.Paris,
  hoverOfferId: null,
  offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCityAction, (state, action) => {
      state.activeCityName = action.payload;
    })
    .addCase(setHoverOfferIdAction, (state, action) => {
      state.hoverOfferId = action.payload;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    });
});
