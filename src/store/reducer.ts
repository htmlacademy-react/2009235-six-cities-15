import { createReducer } from '@reduxjs/toolkit';
import { setActiveCityAction, setHoverOfferIdAction} from './action';
import { CityName } from '../types/offers';

type AppState = {
  activeCityName: CityName;
  hoverOfferId: string | null;
};

const initialState:AppState = {
  activeCityName: 'Paris',
  hoverOfferId: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCityAction, (state, action) => {
      state.activeCityName = action.payload;
    })
    .addCase(setHoverOfferIdAction, (state, action) => {
      state.hoverOfferId = action.payload;
    });
});
