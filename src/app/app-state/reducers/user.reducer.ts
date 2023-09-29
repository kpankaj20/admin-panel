import { Action } from '@ngrx/store';
import { User } from '../entity/user.entity';
import * as storage from '../state/storage';

export interface State {
  user: User;
  result: any;
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: State = {
  user: storage.getItem('user').user,
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};


export function reducer(state: State | undefined, action: Action): any {
  return loginReducer(state, action);
}

export const getLoggedInUser = (state: State) => {
  return {
    user: state.user,
    isLoadingSuccess: state.isLoadingSuccess
  }
};

export const userLogin = (state: State) => {
  return {
    user: state.user,
    result: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};

export const userSignup = (state: State) => {
  return {
    user: state.user,
    result: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
};


function loginReducer(state: State | undefined, action: Action): any {
 return userLogin
}

