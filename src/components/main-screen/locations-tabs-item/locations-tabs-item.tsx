import { Link } from 'react-router-dom';
import { AppRoute, CityName } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { setActiveCityAction } from '../../../store/action';

type LocationTabProps = {
  cityName: CityName;
}

function LocationTab({cityName}: LocationTabProps): JSX.Element {
  const activeCityName = useAppSelector((state) => state.activeCityName);
  const isActiveCity = activeCityName === cityName;

  const dispatch = useAppDispatch();
  const handleTabClick = () => dispatch(setActiveCityAction(cityName));

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

export default LocationTab;
