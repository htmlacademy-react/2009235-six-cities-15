import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAuth } from '../../../hooks/use-auth';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getUserData } from '../../../store/auth-data/selectors';
import { getFavoritesOffers } from '../../../store/offers-data/selectors';
import { fetchLogoutUserAction } from '../../../store/api-actions';
import './styles.css';

function UserNavigation(): JSX.Element {
  const {isAuth} = useAuth();
  const userData = useAppSelector(getUserData);
  const favoritesOffers = useAppSelector(getFavoritesOffers);

  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(fetchLogoutUserAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth && (
          <>
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
            <li className="header__nav-item">
              <button className="header__nav-link" onClick={handleSignOut}>
                <span className="header__signout">Sign out</span>
              </button>
            </li>
          </>
        )}

        {!isAuth && (
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default UserNavigation;
