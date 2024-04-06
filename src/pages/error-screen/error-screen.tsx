import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/redux';
import { offersDataActions } from '../../store/offers-data/slice';
import { useParams } from 'react-router-dom';
import { APIErrors } from '../../const';
<<<<<<< HEAD
import Header from '../../components/header/header';
import './styles.css';

type ErrorScreenProps = {
  variant?: 'message' | 'screen';
};
=======
import './styles.css';
>>>>>>> module8-task1-1

function ErrorScreen({variant = 'screen'}: ErrorScreenProps): JSX.Element {
  const {code} = useParams();
  const errorCode = code as APIErrors ?? APIErrors.Server404;

  let errorTitle;
  let errorDescription;

  switch (errorCode) {
    case APIErrors.Server404:
      errorTitle = 'Page not found';
<<<<<<< HEAD
      errorDescription = 'Page not found';
=======
      errorDescription = 'Oops... Not found';
>>>>>>> module8-task1-1
      break;
    case APIErrors.Server500:
      errorTitle = 'Internal Server Error';
      errorDescription = 'Sorry, something went wrong.';
      break;
    case APIErrors.Network:
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
    <div className='page page--error'>
      <Helmet>
        <title>6 cities: error</title>
      </Helmet>
<<<<<<< HEAD
      {
        variant === 'screen' && <Header/>
      }
      <main className="page__main">
=======
      <main className="page page--error">
>>>>>>> module8-task1-1
        <h1 className="visually-hidden">{errorTitle}</h1>
        <section className="container">
          <div className="cities__status-wrapper tabs__content" style={{ paddingBottom: 100}}>
            <b className="cities__status" style={{fontSize: 60}}>{errorCode}</b>
            <p className="cities__status-description">{errorDescription}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ErrorScreen;
