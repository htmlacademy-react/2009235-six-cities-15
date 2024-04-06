import axios, {AxiosError, AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {getToken} from './token';
import browserHistory from '../browser-history';
import { APIErrors, AppRoute } from '../const';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (err : AxiosError) => {
      switch (true) {
        case(err.response?.status === 500):
          browserHistory.push(AppRoute.Error.replace(':code', APIErrors.Server500));
          break;
        case(err.code === 'ERR_NETWORK'):
          browserHistory.push(AppRoute.Error.replace(':code', APIErrors.Network));
          break;
      }
      throw err;
    },
  );

  return api;
};
