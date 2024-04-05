import { useLocation } from 'react-router-dom';
import Logo from './logo/logo';
import UserNavigation from './user-navigation/user-navigation';
import { AppRoute } from '../../const';


function Header(): JSX.Element {
  const {pathname} = useLocation();

  let isMainPage = false;
  let isLoginPage = false;

  switch (pathname) {
    case AppRoute.Main:
      isMainPage = true;
      break;
    case AppRoute.Login:
      isLoginPage = true;
      break;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo isMainPage={isMainPage}/>
          {
            !isLoginPage && <UserNavigation/>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
