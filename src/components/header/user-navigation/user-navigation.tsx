import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAuth } from '../../../hooks/use-auth';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchLogoutUserAction } from '../../../store/api-actions';
import './styles.css';
import UserNavigationInfo from '../user-navigation-info/user-navigation-info';

function UserNavigation(): JSX.Element {
  const {isAuth} = useAuth();

  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(fetchLogoutUserAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuth && (
          <>
            <UserNavigationInfo/>
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
