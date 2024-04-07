import { FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { UserAuthData } from '../../types/auth';
import { useAppDispatch } from '../../hooks/redux';
import { fetchLoginUserAction } from '../../store/api-actions';
import { useAuth } from '../../hooks/use-auth';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import { toast } from 'react-toastify';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const {isAuth} = useAuth();

  const handleLoginFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const userAuthData = Object.fromEntries(formData) as UserAuthData;
    const {password} = userAuthData;
    const isValidPassword = RegExp(/\p{L}/,'u').test(password) && /[0-9]/i.test(password);

    if (isValidPassword) {
      dispatch(fetchLoginUserAction(userAuthData));
    } else {
      toast.error('Password no have letter or number!');
    }
  };

  if (isAuth) {
    return <Navigate to={AppRoute.Main}/>;
  }

  return (
    <>
      <Helmet>
        <title>6 cities: authorization</title>
      </Helmet>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleLoginFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default LoginScreen;
