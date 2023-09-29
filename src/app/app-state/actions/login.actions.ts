import { createAction, props } from '@ngrx/store';
import { User } from '../entity/user.entity';

export const UserLogin = '[Login Page] Login';
export const UserLoginSucess = '[Login Page] Login Success';
export const UserLoginFailure = '[Login Page] Login Failure';

export const login = createAction(
  UserLogin,
  props<{user: User}>()
);

export const loginSuccess = createAction(
  UserLoginSucess,
  props<any>()
)

export const loginFailure = createAction(
  UserLoginFailure,
  props<{message: string}>()
)
