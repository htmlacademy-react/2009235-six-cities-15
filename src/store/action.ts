import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { CityName, SortOptions } from '../const';

export const setActiveCityAction = createAction<CityName>('setCity');
export const setHoverOfferIdAction = createAction<string | null>('setHoverOfferId');
export const fetchOffersAction = createAction<Offers>('fetchOffersAction');
export const setSortOptionAction = createAction<SortOptions>('setSortOption');
