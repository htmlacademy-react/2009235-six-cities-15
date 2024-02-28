import { AuthorizationStatus } from '../../const';
import HeaderLogo from './header-logo/header-logo';

type HeaderProps = {
  isMainPage?: boolean;
  isLoginPage?: boolean;
  authorizationStatus: AuthorizationStatus;
}

function Header({isMainPage = false, isLoginPage = false, authorizationStatus}:HeaderProps): JSX.Element {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo isMainPage={isMainPage}/>
          {
            !isLoginPage && (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {
                    authorizationStatus === AuthorizationStatus.Auth ? (
                      <>
                        <li className="header__nav-item user">
                          <a className="header__nav-link header__nav-link--profile" href="#">
                            <div className="header__avatar-wrapper user__avatar-wrapper">
                            </div>
                            <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                            <span className="header__favorite-count">3</span>
                          </a>
                        </li>
                        <li className="header__nav-item">
                          <a className="header__nav-link" href="#">
                            <span className="header__signout">Sign out</span>
                          </a>
                        </li>
                      </>
                    ) : (
                      <li className="header__nav-item user">
                        <a className="header__nav-link header__nav-link--profile" href="#">
                          <div className="header__avatar-wrapper user__avatar-wrapper">
                          </div>
                          <span className="header__login">Sign in</span>
                        </a>
                      </li>
                    )
                  }
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
