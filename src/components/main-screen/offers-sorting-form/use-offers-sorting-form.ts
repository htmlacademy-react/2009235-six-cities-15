import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useEffect, useState } from 'react';
import { setSortOptionAction } from '../../../store/action';
import { SortOptions } from '../../../const';

export function useOffersSortingForm(ref:React.RefObject<HTMLFormElement>){
  const activeSortOption = useAppSelector((state) => state.activeSortOption);
  const [isOptionsOpened, setOptionsOpened] = useState(false);
  const handleSortOptionsToggleClick = () => setOptionsOpened(!isOptionsOpened);

  const dispatch = useAppDispatch();
  const handleOptionClick = (sortOption: SortOptions) => {
    dispatch(setSortOptionAction(sortOption));
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

  useEffect(() => {
    if (isOptionsOpened) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleOutsideClick);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('click', handleOutsideClick);
      };
    }
  }, [isOptionsOpened]);

  return {activeSortOption, isOptionsOpened, handleOptionClick, handleSortOptionsToggleClick};
}
