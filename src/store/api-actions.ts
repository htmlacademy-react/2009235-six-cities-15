import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance, isAxiosError } from 'axios';
import { Offers } from '../types/offers';
import { APIRoute } from '../const';
import { UserAuthData, UserData } from '../types/auth';
import { saveToken } from '../services/token';
import { toast } from 'react-toastify';

//createAsyncThunk<UserData - get, UserAuthData - post

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchOffersAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const fetchLoginUserAction = createAsyncThunk<UserData, UserAuthData, {
  extra: AxiosInstance;
}>(
  'data/fetchLoginUserAction',
  async (userAuthData, {extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, userAuthData);
      saveToken(data.token);
      return data;
    } catch (err) {
      if (isAxiosError(err)) {
        //Не смогла типизировать
        //err.response?.data.details.map((detail) => detail?.messages.map((message) => toast.error(`${err.response.status}: ${message}`)));
        toast.error(`${err.response?.status}: Invalid username or password`);
      }
      throw err;
    }
  },
);

export const fetchUserAction = createAsyncThunk<UserData, undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchUserAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);
