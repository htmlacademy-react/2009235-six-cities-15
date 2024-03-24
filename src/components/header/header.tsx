import Logo from './logo/logo';
import UserNavigation from './user-navigation/user-navigation';

type HeaderProps = {
  isMainPage: boolean;
  isLoginPage: boolean;
}

function Header({isMainPage, isLoginPage}:HeaderProps): JSX.Element {
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
