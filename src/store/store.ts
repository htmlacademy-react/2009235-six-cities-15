import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { reducers } from './redusers';

export const api = createAPI();

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
