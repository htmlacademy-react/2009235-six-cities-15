import { Link } from 'react-router-dom';
import { AppRoute, CityName } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getActiveCityName } from '../../../store/app-data/selectors';
import { appDataActions } from '../../../store/app-data/slise';
import { memo } from 'react';

type LocationTabProps = {
  cityName: CityName;
}

const LocationTab = memo(
  ({cityName}: LocationTabProps): JSX.Element => {
    const activeCityName = useAppSelector(getActiveCityName);
    const isActiveCity = activeCityName === cityName;

    const dispatch = useAppDispatch();
    const handleTabClick = () => dispatch(appDataActions.setActiveCityNameAction(cityName));

    return (
      <li className="locations__item" onClick={handleTabClick}>
        <Link
          className={`locations__item-link tabs__item ${isActiveCity && 'tabs__item--active'}`}
          to={AppRoute.Main}
        >
          <span>{cityName}</span>
        </Link>
      </li>
    );
  }
);

LocationTab.displayName = 'LocationTab';

export default LocationTab;
