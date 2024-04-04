import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute} from '../../const';
import Header from '../header/header';
import { useAppSelector } from '../../hooks/redux';
import { getFavoritesOffers } from '../../store/offers-data/selectors';
import { Offers } from '../../types/offers';

const getLayoutState = (pathname: AppRoute, favoritesOffers: Offers) => {
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
    case AppRoute.Favorites:
      if (favoritesOffers.length === 0) {
        rootClassName = ' page--favorites-empty';
      }
      break;
  }

  return {isMainPage, isLoginPage, rootClassName};
};

function Layout(): JSX.Element {
  const {pathname} = useLocation();
  const favoritesOffers = useAppSelector(getFavoritesOffers);
  const {isMainPage, isLoginPage, rootClassName} = getLayoutState(pathname as AppRoute, favoritesOffers);

  return (
    <div className={`page${rootClassName}`}>
      <Header
        isMainPage={isMainPage}
        isLoginPage={isLoginPage}
      />

      <Outlet/>
    </div>
  );
}

export default Layout;
