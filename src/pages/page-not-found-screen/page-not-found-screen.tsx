import { Helmet } from 'react-helmet-async';

function PageNotFoundScreen(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities: 404</title>
      </Helmet>
      <main className="page__main">
        <h1 className="visually-hidden">Page not found</h1>
        <section className="container">
          <div className="cities__status-wrapper tabs__content" style={{ paddingBottom: 100}}>
            <b className="cities__status" style={{fontSize: 60}}>404</b>
            <p className="cities__status-description">Not Found</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default PageNotFoundScreen;
