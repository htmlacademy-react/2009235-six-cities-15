import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { getUserData } from '../../../store/auth-data/selectors';
import { getFavoritesOffers } from '../../../store/offers-data/selectors';
import { useAppSelector } from '../../../hooks/redux';


function UserNavigationInfo(): JSX.Element {
  const userData = useAppSelector(getUserData);
  const favoritesOffers = useAppSelector(getFavoritesOffers);

  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div
          className="header__avatar-wrapper user__avatar-wrapper"
          style={{
            backgroundImage: `url(${userData?.avatarUrl})`,
            borderRadius: '50%'
          }}
        >
        </div>
        <span className="header__user-name user__name">{userData?.email}</span>
        <span className="header__favorite-count">{favoritesOffers.length}</span>
      </Link>
    </li>
  );
}

export default UserNavigationInfo;
