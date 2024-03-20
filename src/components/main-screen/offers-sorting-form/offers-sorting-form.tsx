import classNames from 'classnames';
import { SortOptions } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useEffect, useRef, useState } from 'react';
import { setSortOptionAction } from '../../../store/action';

function OffersSortingForm(): JSX.Element {
  const sortOptionsRef = useRef<HTMLFormElement>(null);
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
    if (sortOptionsRef.current?.contains(evt.target as Node) === false) {
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

  return (
    <form className="places__sorting" action="#" method="get" ref={sortOptionsRef}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortOptionsToggleClick}>
        {activeSortOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={classNames('places__options places__options--custom', {'places__options--opened':isOptionsOpened})}>
        {
          Object.values(SortOptions).map((sortOption) => {
            const isActiveSortOption = sortOption === activeSortOption;

            return (
              <li
                className={classNames('places__option', {'places__option--active': isActiveSortOption})}
                tabIndex={0}
                key={sortOption}
                onClick={() => handleOptionClick(sortOption)}
              >{sortOption}
              </li>
            );
          })
        }
      </ul>
    </form>
  );
}

export default OffersSortingForm;
