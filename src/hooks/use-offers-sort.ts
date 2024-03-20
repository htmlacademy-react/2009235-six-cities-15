import { Offers } from '../types/offers';
import { sortByOption } from '../utils/sort/sort';
import { useAppSelector } from './redux';

export function useOffersSort(offers: Offers): Offers {
  const activeSortOption = useAppSelector((state) => state.activeSortOption);
  return sortByOption(activeSortOption, offers);
}
