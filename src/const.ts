export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Error = '/error/:code',
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

export enum SortOptions {
  POPULAR = 'Popular',
  PRICE_LOW_TO_HIGH = 'Price: low to high',
  PRICE_HIGH_TO_LOW = 'Price: high to low',
  TOP_RATED_FIRST = 'Top rated first'
}

export enum APIRoute {
  Offers = '/offers',
  FavoritesOffers = '/favorite',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum APIErrors {
  Server404 = '404',
  Server500 = '500',
  Network = 'ERR_NETWORK',
}
