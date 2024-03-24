import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import { useAuth } from '../../hooks/use-auth';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const {isAuth} = useAuth();

  return (
    isAuth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
