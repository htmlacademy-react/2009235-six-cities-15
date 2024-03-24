import { createReducer } from '@reduxjs/toolkit';
import { setActiveCityAction, setHoverOfferIdAction, setSortOptionAction, requireAuthorizationAction } from './action';
import { Offers } from '../types/offers';
import { AuthorizationStatus, CityName, SortOptions } from '../const';
import { fetchLoginUserAction as fetchLoginUserAction, fetchOffersAction, fetchUserAction } from './api-actions';
import { UserData } from '../types/auth';
//import { offers } from '../mocks/offers';

type AppState = {
  activeCityName: CityName;
  hoverOfferId: string | null;
  activeSortOption: SortOptions;
  offers: Offers;
  pageStatus: 'idle' | 'fetching' | 'succeeded' | 'failed';
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
};

const initialState:AppState = {
  activeCityName: CityName.Paris,
  hoverOfferId: null,
  activeSortOption: SortOptions.POPULAR,
  offers: [],
  pageStatus: 'idle',
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCityAction, (state, action) => {
      state.activeCityName = action.payload;
    })
    .addCase(setHoverOfferIdAction, (state, action) => {
      state.hoverOfferId = action.payload;
    })
    .addCase(setSortOptionAction, (state, action) => {
      state.activeSortOption = action.payload;
    })

    //API
    //Offers
    .addCase(fetchOffersAction.pending, (state) => {
      state.pageStatus = 'fetching';
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.pageStatus = 'succeeded';
    })

    //Login
    .addCase(requireAuthorizationAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(fetchLoginUserAction.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(fetchUserAction.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    });
});
