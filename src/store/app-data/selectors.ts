import { State } from '../../types/state';

type AppDataState = Pick<State, 'appData'>

export const getActiveCityName = (state:AppDataState) => state.appData.activeCityName;
export const getHoverOfferId = (state:AppDataState) => state.appData.hoverOfferId;
export const getActiveSortOption = (state:AppDataState) => state.appData.activeSortOption;
