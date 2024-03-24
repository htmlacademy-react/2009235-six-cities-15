import { AuthorizationStatus } from '../const';
import { useAppSelector } from './redux';

type Auth = {
  isAuth: boolean;
}

export function useAuth(): Auth {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  return {
    isAuth: authStatus === AuthorizationStatus.Auth,
  };
}
