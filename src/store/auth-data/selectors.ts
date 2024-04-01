import { State } from '../../types/state';

type AuthDataState = Pick<State, 'authData'>

export const getAuthorizationStatus = (state:AuthDataState) => state.authData.authorizationStatus;
export const getUserData = (state:AuthDataState) => state.authData.userData;
