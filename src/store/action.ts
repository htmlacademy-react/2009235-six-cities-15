import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, SortOptions } from '../const';

export const setActiveCityAction = createAction<CityName>('setActiveCity');
export const setHoverOfferIdAction = createAction<string | null>('setHoverOfferId');
export const setSortOptionAction = createAction<SortOptions>('setSortOption');
export const setAuthorizationStatusAction = createAction<AuthorizationStatus>('setAuthorizationStatus');
