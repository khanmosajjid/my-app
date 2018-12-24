import {appReducer , AppState} from './app';
import {ActionReducerMap} from '@ngrx/store';





export interface RootState {
  app: AppState;

}
export const reducers: ActionReducerMap<RootState> = {
  app: appReducer,
};
export const getUser = (state: RootState) => state.app.user;
