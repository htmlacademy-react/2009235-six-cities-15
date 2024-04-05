import { combineReducers } from '@reduxjs/toolkit';
import { appData } from './app-data/slise';
import { authData } from './auth-data/slise';
import { offersData } from './offers-data/slice';

export const rootReducers = combineReducers({
  appData: appData.reducer,
  authData: authData.reducer,
  offersData: offersData.reducer,
});
