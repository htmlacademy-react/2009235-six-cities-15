import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/redux';
import { offersDataActions } from '../../store/offers-data/slice';
import { useParams } from 'react-router-dom';


function ErrorScreen(): JSX.Element {
  const {code} = useParams();
  const errorCode = code ?? '404';

  let errorTitle;
  let errorDescription;

  switch (errorCode) {
    case '404':
      errorTitle = 'Page not found';
      errorDescription = 'Oops...';
      break;
    case '500':
      errorTitle = 'Internal Server Error';
      errorDescription = 'Sorry, something went wrong.';
      break;
    case 'ERR_NETWORK':
      errorTitle = 'Network is unreachable';
      errorDescription = 'Please, check the connection';
      break;
  }

  const dispatch = useAppDispatch();
  useEffect(() =>
    () => {
      dispatch(offersDataActions.resetPageStatus());
      dispatch(offersDataActions.resetOfferPageStatus());
    }
  , []);

  return (
    <>
      <Helmet>
        <title>6 cities: error</title>
      </Helmet>
      <main className="page__main">
        <h1 className="visually-hidden">{errorTitle}</h1>
        <section className="container">
          <div className="cities__status-wrapper tabs__content" style={{ paddingBottom: 100}}>
            <b className="cities__status" style={{fontSize: 60}}>{errorCode}</b>
            <p className="cities__status-description">{errorDescription}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default ErrorScreen;
