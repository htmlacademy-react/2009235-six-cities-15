import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';

type AppScreenProps = {
  placeCardsCount: number;
}

function App({placeCardsCount}:AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placeCardsCount={placeCardsCount} />}
        />

        <Route path={AppRoute.Offer} element={<OfferScreen/>} />
        <Route path={AppRoute.Favorites} element={<FavoritesScreen/>} />
        <Route path={AppRoute.Login} element={<LoginScreen/>} />
        <Route path="*" element={<PageNotFoundScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
