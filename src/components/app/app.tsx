import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  placeCardsCount: number;
}

function App({placeCardsCount}:AppScreenProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen placeCardsCount={placeCardsCount} />}
          />

          <Route path={AppRoute.Offer} element={<OfferScreen/>} />
          <Route path={AppRoute.Login} element={<LoginScreen/>} />

          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <FavoritesScreen/>
              </PrivateRoute>
            }
          />

          <Route path="*" element={<PageNotFoundScreen/>}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
