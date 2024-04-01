import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName, SortOptions } from '../../const';
import { Nullable } from 'vitest';

type AppData = {
  activeCityName: CityName;
  hoverOfferId: Nullable<string>;
  activeSortOption: SortOptions;
};

const initialState:AppData = {
  activeCityName: CityName.Paris,
  hoverOfferId: null,
  activeSortOption: SortOptions.POPULAR,
};

export const appData = createSlice({
  name: 'appData',
  initialState,
  reducers: {
    setActiveCityNameAction: (state, action: PayloadAction<CityName>) => {
      state.activeCityName = action.payload;
    },
    setHoverOfferIdAction: (state, action: PayloadAction<Nullable<string>>) => {
      state.hoverOfferId = action.payload;
    },
    setSortOptionAction: (state, action: PayloadAction<SortOptions>) => {
      state.activeSortOption = action.payload;
    },
  }
});

export const appDataActions = appData.actions;
