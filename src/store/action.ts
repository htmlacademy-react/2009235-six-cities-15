import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, SortOptions } from '../const';
import { Nullable } from '../types/common';

export const setActiveCityAction = createAction<CityName>('setActiveCity');
export const setHoverOfferIdAction = createAction<Nullable<string>>('setHoverOfferId');
export const setSortOptionAction = createAction<SortOptions>('setSortOption');
export const setAuthorizationStatusAction = createAction<AuthorizationStatus>('setAuthorizationStatus');
