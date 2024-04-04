import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offer, Offers } from '../types/offers';
import { APIRoute, AppRoute } from '../const';
import { UserAuthData, UserData } from '../types/auth';
import { dropToken, saveToken } from '../services/token';
import { NewReview, Review, Reviews } from '../types/reviews';
import { State } from '../types/state';
import { displayFetchError } from '../utils/display-fetch-error/display-fetch-error';
import { toast } from 'react-toastify';
import { redirectToRoute } from './actions';

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

/*------*/
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
      const offerId = state.offersData.currentOffer?.id;
      const {data} = await api.post<Review>(`${APIRoute.Reviews}/${offerId}`, newReview);
      return data;
    } catch (err) {
      displayFetchError(err);
      throw err;
    }
  },
);

/*===== FAVORITE =====*/
export const fetchFavoritesOffersAction = createAsyncThunk<Offers, undefined, ThunkApiConfig>(
  'data/fetchFavoritesOffersAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.FavoritesOffers);
    return data;
  },
);


export const fetchFavoritesOfferStatusAction = createAsyncThunk<Offer, Offer, ThunkApiConfig>(
  'data/fetchFavoritesOfferAction',
  async (offer, {extra: api}) => {
    const isFavoriteOffer = offer.isFavorite ? 0 : 1;
    const offerId = offer.id;
    const {data} = await api.post<Offer>(`${APIRoute.FavoritesOffers}/${offerId}/${isFavoriteOffer}`);
    return data;
  },
);


/*===== LOG(IN/OUT) =====*/
export const fetchLoginUserAction = createAsyncThunk<UserData, UserAuthData, ThunkApiConfig>(
  'data/fetchLoginUserAction',
  async (userAuthData, {extra: api, dispatch}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, userAuthData);
      dispatch(fetchFavoritesOffersAction());
      dispatch(fetchOffersAction());
      saveToken(data.token);
      toast.success('You are logged in');
      return data;
    } catch (err) {
      displayFetchError(err);
      throw err;
    }
  },
);

export const fetchUserAction = createAsyncThunk<UserData, undefined, ThunkApiConfig>(
  'data/fetchUserAction',
  async (_arg, {extra: api, dispatch}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    dispatch(fetchFavoritesOffersAction());
    return data;
  },
);

export const fetchLogoutUserAction = createAsyncThunk<void, undefined, ThunkApiConfig>(
  'data/fetchLogoutUserAction',
  async (_, {extra: api, dispatch}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(fetchOffersAction());
    dispatch(redirectToRoute(AppRoute.Main));
    toast.info('You are logged out');
  },
);
