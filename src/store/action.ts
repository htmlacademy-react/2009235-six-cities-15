import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { CityName } from '../const';

export const setActiveCityAction = createAction<CityName>('setCity');
export const setHoverOfferIdAction = createAction<string | null>('setHoverOfferId');
export const fetchOffers = createAction<Offers>('fetchOffers');
