import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/redux';
import { getIsFavoritesOffersEmpty } from '../../store/offers-data/selectors';


export function useLayout(){
  const {pathname} = useLocation();
  const isFavoritesOffersEmpty = useAppSelector(getIsFavoritesOffersEmpty);

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
      if (isFavoritesOffersEmpty) {
        rootClassName = ' page--favorites-empty';
      }
      break;
  }

  return {isMainPage, isLoginPage, rootClassName};
}
