import { Link } from 'react-router-dom';
import Logo from './logo/logo';
import { AppRoute } from '../../const';

type HeaderProps = {
  isMainPage: boolean;
  isLoginPage: boolean;
  isAuth: boolean;
}

function Header({isMainPage, isLoginPage, isAuth}:HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo isMainPage={isMainPage}/>
          {
            !isLoginPage && (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {isAuth && (
                    <>
                      <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">3</span>
                        </Link>
                      </li>
                      <li className="header__nav-item">
                        <a className="header__nav-link" href="#">
                          <span className="header__signout">Sign out</span>
                        </a>
                      </li>
                    </>
                  )}

                  {!isAuth && (
                    <Link className="header__nav-item user" to={AppRoute.Login}>
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </a>
                    </Link>
                  )}
                </ul>
              </nav>
            )
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
