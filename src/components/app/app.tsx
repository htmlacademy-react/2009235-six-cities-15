import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import ScrollToTop from '../../utils/scroll-to-top/scroll-to-top';
import MarginIfScroll from '../../utils/margin-if-scroll/margin-if-scroll';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop/>
        <MarginIfScroll/>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout/>}>
            <Route
              index
              element={<MainScreen/>}
            />

            <Route path={AppRoute.Offer} element={<OfferScreen/>} />
            <Route path={AppRoute.Login} element={<LoginScreen/>} />

            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute>
                  <FavoritesScreen/>
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFoundScreen/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
