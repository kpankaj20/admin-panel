import { createAction, props } from '@ngrx/store';
import { User } from '../entity/user.entity';

export const UserSignup = '[SignUp Page] Signup';
export const UserSignupSucess = '[SignUp Page] Signup Success';
export const UserSignupFailure = '[SignUp Page] Signup Failure';

export const signup = createAction(
  UserSignup,
  props<{user: User}>()
);

export const signupSuccess = createAction(
  UserSignupSucess,
  props<any>()
)

export const signupFailure = createAction(
  UserSignupFailure,
  props<{message: string}>()
)
