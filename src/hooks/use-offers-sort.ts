import { getActiveSortOption } from '../store/app-data/selectors';
import { Offers } from '../types/offers';
import { sortByOption } from '../utils/sort/sort';
import { useAppSelector } from './redux';

export function useOffersSort(offers: Offers): Offers {
  const activeSortOption = useAppSelector(getActiveSortOption);
  return sortByOption(activeSortOption, offers);
}
