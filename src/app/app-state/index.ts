import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import * as fromUser from './reducers/user.reducer';

export interface State {
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer
};

const reducerKeys = ['user', 'todo'];
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: reducerKeys})(reducer);
}


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];

export const getLoginState = createFeatureSelector<fromUser.State>('user');

export const getLoggedInUser = createSelector(
  getLoginState,
  fromUser.getLoggedInUser
);

export const userLogin = createSelector(
  getLoginState,
  fromUser.userLogin
);

export const userSignup = createSelector(
  getLoginState,
  fromUser.userSignup
);




