import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Header from '../header/header';

const getLayoutState = (pathname: AppRoute) => {
  const isMainPage = pathname === AppRoute.Main;
  const isLoginPage = pathname === AppRoute.Login;
  let rootClassName = '';

  switch (true) {
    case(isMainPage):
      rootClassName = ' page--gray page--main';
      break;
    case(isLoginPage):
      rootClassName = ' page--gray page--login';
      break;
  }

  return {isMainPage, isLoginPage, rootClassName};
};

type LayoutProps = {
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}:LayoutProps): JSX.Element {
  const {pathname} = useLocation();
  const {isMainPage, isLoginPage, rootClassName} = getLayoutState(pathname as AppRoute);

  return (
    <div className={`page${rootClassName}`}>
      <Header isMainPage={isMainPage} isLoginPage={isLoginPage} authorizationStatus={authorizationStatus}/>
      <Outlet/>
    </div>
  );
}

export default Layout;
