import { createSlice } from '@reduxjs/toolkit';
import { Nullable } from '../../types/common';
import { Offer, Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { fetchOfferAction, fetchOffersAction, fetchReviewUserAction } from '../api-actions';

type OffersState = {
  offers: Offers;
  currentOffer: Nullable<Offer>;
  reviews: Reviews;
  nearPlaces: Offers;
  pageStatus: 'idle' | 'fetching' | 'succeeded' | 'failed';
};

const initialState:OffersState = {
  offers: [],
  currentOffer: null,
  reviews: [],
  nearPlaces: [],
  pageStatus: 'idle',
};

export const offersData = createSlice({
  name: 'offersData',
  initialState,
  reducers: {
    resetPageStatus: (state) => {
      state.pageStatus = 'idle';
    },
  },
  extraReducers(builder) {
    builder
    //Offers
      .addCase(fetchOffersAction.pending, (state) => {
        state.pageStatus = 'fetching';
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.pageStatus = 'succeeded';
      })

    //Offer
      .addCase(fetchOfferAction.pending, (state) => {
        state.pageStatus = 'fetching';
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.pageStatus = 'failed';
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload.currentOffer;
        state.reviews = action.payload.reviews;
        state.nearPlaces = action.payload.nearPlaces;
        state.pageStatus = 'succeeded';
      })
      .addCase(fetchReviewUserAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  },
});

export const offersDataActions = offersData.actions;
