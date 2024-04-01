import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/auth';
import { Nullable } from '../../types/common';
import { fetchLoginUserAction, fetchUserAction } from '../api-actions';

type AuthState = {
  authorizationStatus: AuthorizationStatus;
  userData: Nullable<UserData>;
};

const initialState:AuthState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const authData = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    setAuthorizationStatusAction: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLoginUserAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchLoginUserAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchUserAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  },
});

export const authDataActions = authData.actions;
