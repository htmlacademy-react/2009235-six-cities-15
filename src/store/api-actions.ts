import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer, Offers } from '../types/offers';
import { APIRoute } from '../const';
import { UserAuthData, UserData } from '../types/auth';
import { saveToken } from '../services/token';
import { NewReview, Review, Reviews } from '../types/reviews';
import { State } from '../types/state';
import { displayFetchError } from '../utils/display-fetch-error/display-fetch-error';

type ThunkApiConfig = {
  extra: AxiosInstance;
  state: State;
};

/*===== OFFER(S) =====*/
export const fetchOffersAction = createAsyncThunk<Offers, undefined, ThunkApiConfig>(
  'data/fetchOffersAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

type fetchOfferActionData = {
  currentOffer: Offer;
  reviews: Reviews;
  nearPlaces: Offers;
}

export const fetchOfferAction = createAsyncThunk<fetchOfferActionData, string, ThunkApiConfig>(
  'data/fetchOfferAction',
  async (offerId, {extra: api}) => {
    const {data:currentOffer} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    const {data:reviews} = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    const {data:nearPlaces} = await api.get<Offers>(`${APIRoute.Offers}/${offerId}/nearby`);
    return {currentOffer, reviews, nearPlaces};
  },
);


export const fetchReviewUserAction = createAsyncThunk<Review, NewReview, ThunkApiConfig>(
  'data/fetchReviewUserAction',
  async (newReview, {extra: api, getState}) => {
    try {
      const state = getState();
      const offerId = state.currentOffer?.id;
      const {data} = await api.post<Review>(`${APIRoute.Reviews}/${offerId}`, newReview);
      return data;
    } catch (err) {
      displayFetchError(err);
      throw err;
    }
  },
);

/*===== LOGIN =====*/
export const fetchLoginUserAction = createAsyncThunk<UserData, UserAuthData, ThunkApiConfig>(
  'data/fetchLoginUserAction',
  async (userAuthData, {extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, userAuthData);
      saveToken(data.token);
      return data;
    } catch (err) {
      displayFetchError(err);
      throw err;
    }
  },
);

export const fetchUserAction = createAsyncThunk<UserData, undefined, ThunkApiConfig>(
  'data/fetchUserAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);
