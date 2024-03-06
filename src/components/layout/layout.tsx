import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Header from '../header/header';

const getLayoutState = (pathname: AppRoute) => {
  let isMainPage = false;
  let isLoginPage = false;
  let rootClassName = '';

  switch (pathname) {
    case AppRoute.Main:
      isMainPage = true;
      rootClassName = ' page--gray page--main';
      break;
    case AppRoute.Login:
      isLoginPage = true;
      rootClassName = ' page--gray page--login';
      break;
  }
  /*page__main page__main--favorites page__main--favorites-empty
  добавить клаасс стр. с отсутсвием избранных предложений
  */

  return {isMainPage, isLoginPage, rootClassName};
};

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}:LayoutProps): JSX.Element {
  const {pathname} = useLocation();
  const {isMainPage, isLoginPage, rootClassName} = getLayoutState(pathname as AppRoute);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <div className={`page${rootClassName}`}>
      <Header
        isMainPage={isMainPage}
        isLoginPage={isLoginPage}
        isAuth={isAuth}
      />

      <Outlet/>
    </div>
  );
}

export default Layout;
