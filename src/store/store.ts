import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducers } from './redusers';
import { redirect } from './middlewares/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
