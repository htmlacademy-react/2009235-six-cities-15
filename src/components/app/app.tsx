import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import ScrollToTop from '../../utils/scroll-to-top/scroll-to-top';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import './styles.css';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop/>
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
            <Route path={AppRoute.Error} element={<ErrorScreen/>}/>
            <Route path="*" element={<ErrorScreen/>}/>
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
