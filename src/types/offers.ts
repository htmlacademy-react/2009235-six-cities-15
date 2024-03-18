import { citiesNames } from '../const';

export type CityName = typeof citiesNames[number];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: CityName;
  location: Location;
}

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type OfferCard = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};

export type OfferDetail = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};

//для GET /six-cities/offers/{offerId} убрать "previewImage" !!!
//через Omit (когда бутет запрашиваться информация по конкретному предложению с сервера)

export type Offer = OfferCard & OfferDetail;
export type Offers = Offer[];
