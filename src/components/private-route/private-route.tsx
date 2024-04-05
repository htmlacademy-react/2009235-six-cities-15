import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import { useAuth } from '../../hooks/use-auth';
import Spinner from '../common/spinner/spinner';


type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const {isAuth, isAuthorized} = useAuth();

  if (isAuthorized) {
    return <Spinner/>;
  }

  return (
    isAuth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
