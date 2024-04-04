import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReduser } from './redusers';
import { redirect } from './middlewares/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});
