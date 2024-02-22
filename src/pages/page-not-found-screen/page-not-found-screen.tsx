import HeaderLogo from '../../components/header-logo/header-logo';

function PageNotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <section className="container">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">404</b>
              <p className="cities__status-description">Not Found</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PageNotFoundScreen;
