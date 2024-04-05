import classNames from 'classnames';
import { SortOptions } from '../../../const';
import { memo, useRef } from 'react';
import { useOffersSortingForm } from './use-offers-sorting-form';


function OffersSortingForm(): JSX.Element {
  const sortOptionsRef = useRef<HTMLFormElement>(null);
  const {activeSortOption, isOptionsOpened, handleOptionClick, handleSortOptionsToggleClick} = useOffersSortingForm(sortOptionsRef);

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

export default memo(OffersSortingForm);
