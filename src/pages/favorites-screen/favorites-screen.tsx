import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import FavoriteOfferCardList from '../../components/favorites-screen/favorite-offer-card-list/favorite-offer-card-list';
import { Offers } from '../../types/offers';

type FavoriteScreenProps = {
  offers: Offers;
}

function FavoritesScreen({offers}:FavoriteScreenProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteOfferCardList offers={offers}/>
          </section>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default FavoritesScreen;
