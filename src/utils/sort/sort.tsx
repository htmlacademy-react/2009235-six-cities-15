import { SortOptions } from '../../const';
import { Offers } from '../../types/offers';

const sortByOptions: Record<SortOptions, (offers: Offers) => Offers> = {
  [SortOptions.POPULAR] : (offers) => [...offers],
  [SortOptions.PRICE_HIGH_TO_LOW] : (offers) => offers.toSorted((a, b) => b.price - a.price),
  [SortOptions.PRICE_LOW_TO_HIGH] : (offers) => offers.toSorted((a, b) => a.price - b.price),
  [SortOptions.TOP_RATED_FIRST] : (offers) => offers.toSorted((a, b) => b.rating - a.rating),
};

type sortByOptionFn = (sortOption: SortOptions, offers:Offers) => Offers;
export const sortByOption:sortByOptionFn = (sortOption, offers) => sortByOptions[sortOption](offers);
