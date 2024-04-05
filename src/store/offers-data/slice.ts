import { createSlice } from '@reduxjs/toolkit';
import { Nullable } from '../../types/common';
import { Offer, Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import { fetchFavoritesOfferStatusAction, fetchFavoritesOffersAction, fetchOfferAction, fetchOffersAction, fetchReviewUserAction } from '../api-actions';

type PageStatus = 'idle' | 'fetching' | 'succeeded' | 'failed';

type OffersState = {
  offers: Offers;
  currentOffer: Nullable<Offer>;
  reviews: Reviews;
  nearPlaces: Offers;
  favoritesOffers: Offers;
  pageStatus: PageStatus;
  offerPageStatus: PageStatus;
  favoritesOffersPageStatus: PageStatus;
};

const initialState:OffersState = {
  offers: [],
  currentOffer: null,
  reviews: [],
  nearPlaces: [],
  favoritesOffers: [],
  pageStatus: 'idle',
  offerPageStatus: 'idle',
  favoritesOffersPageStatus: 'idle',
};

export const offersData = createSlice({
  name: 'offersData',
  initialState,
  reducers: {
    resetPageStatus: (state) => {
      state.pageStatus = 'idle';
    },
    resetOfferPageStatus: (state) => {
      state.pageStatus = 'idle';
    },
    resetCurrentOffer: (state) => {
      state.currentOffer = null;
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
      .addCase(fetchOffersAction.rejected, (state) => {
        state.pageStatus = 'failed';
      })

    //Offer
      .addCase(fetchOfferAction.pending, (state) => {
        state.offerPageStatus = 'fetching';
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload.currentOffer;
        state.reviews = action.payload.reviews;
        state.nearPlaces = action.payload.nearPlaces;
        state.offerPageStatus = 'succeeded';
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.offerPageStatus = 'failed';
      })

      .addCase(fetchReviewUserAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })

    //FavoriteOffers
      .addCase(fetchFavoritesOffersAction.pending, (state) => {
        state.favoritesOffersPageStatus = 'fetching';
      })
      .addCase(fetchFavoritesOffersAction.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
        state.favoritesOffersPageStatus = 'succeeded';
      })
      .addCase(fetchFavoritesOffersAction.rejected, (state) => {
        state.favoritesOffersPageStatus = 'failed';
      })

      .addCase(fetchFavoritesOfferStatusAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;

        const offerIndex = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
        if (offerIndex > -1) {
          state.offers[offerIndex] = updatedOffer;
        }

        const nearPlacesIndex = state.nearPlaces.findIndex((offer) => offer.id === updatedOffer.id);
        if (nearPlacesIndex > -1) {
          state.nearPlaces[nearPlacesIndex] = updatedOffer;
        }

        if (updatedOffer.isFavorite) {
          state.favoritesOffers.push(updatedOffer);
        } else {
          state.favoritesOffers = state.favoritesOffers.filter((offer) => offer.id !== updatedOffer.id);
        }

        if (state.currentOffer !== null) {
          if (state.currentOffer.id === updatedOffer.id) {
            state.currentOffer.isFavorite = updatedOffer.isFavorite;
          }
        }
      });
  },
});

export const offersDataActions = offersData.actions;
