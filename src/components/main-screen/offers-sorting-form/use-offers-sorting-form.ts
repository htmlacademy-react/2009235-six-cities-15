import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useState } from 'react';
import { SortOptions } from '../../../const';
import { getActiveSortOption } from '../../../store/app-data/selectors';
import { appDataActions } from '../../../store/app-data/slise';

export function useOffersSortingForm(ref:React.RefObject<HTMLFormElement>){
  const activeSortOption = useAppSelector(getActiveSortOption);
  const [isOptionsOpened, setOptionsOpened] = useState(false);
  const handleSortOptionsToggleClick = () => setOptionsOpened(!isOptionsOpened);

  const dispatch = useAppDispatch();
  const handleOptionClick = (sortOption: SortOptions) => {
    dispatch(appDataActions.setSortOptionAction(sortOption));
    setOptionsOpened(false);
  };


  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      setOptionsOpened(false);
    }
  };

  const handleOutsideClick = (evt: MouseEvent) => {
    if (ref.current?.contains(evt.target as Node) === false) {
      setOptionsOpened(false);
    }
  };

  return {activeSortOption, isOptionsOpened, handleOptionClick, handleSortOptionsToggleClick, handleKeyDown, handleOutsideClick};
}
