import { SortOptions } from '../../const';
import { Offers } from '../../types/offers';

type SortMethods = Record<SortOptions,(offers: Offers) => Offers>
const sortMethods: SortMethods = {
  [SortOptions.POPULAR] : (offers) => offers,
  [SortOptions.PRICE_HIGH_TO_LOW] : (offers) => offers.toSorted((a, b) => b.price - a.price),
  [SortOptions.PRICE_LOW_TO_HIGH] : (offers) => offers.toSorted((a, b) => a.price - b.price),
  [SortOptions.TOP_RATED_FIRST] : (offers) => offers.toSorted((a, b) => b.rating - a.rating),
};

type SortByOption = (sortOption: SortOptions, offers:Offers) => Offers;
export const sortByOption:SortByOption = (sortOption, offers) => sortMethods[sortOption](offers);
