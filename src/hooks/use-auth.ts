import { AuthorizationStatus } from '../const';
import { getAuthorizationStatus } from '../store/auth-data/selectors';
import { useAppSelector } from './redux';

type Auth = {
  isAuth: boolean;
}

export function useAuth(): Auth {
  const authStatus = useAppSelector(getAuthorizationStatus);
  return {
    isAuth: authStatus === AuthorizationStatus.Auth,
  };
}
