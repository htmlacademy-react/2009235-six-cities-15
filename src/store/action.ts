import {createAction} from '@reduxjs/toolkit';
import { CityName } from '../types/offers';

export const setActiveCityAction = createAction<CityName>('setCity');
export const setHoverOfferIdAction = createAction<string | null>('setHoverOfferId');
