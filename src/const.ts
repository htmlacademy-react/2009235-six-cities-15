export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const Rates: Record<number,string> = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

export const MIN_COMMENT_LENGTH: number = 50;
export const MAX_COMMENT_LENGTH: number = 300;
