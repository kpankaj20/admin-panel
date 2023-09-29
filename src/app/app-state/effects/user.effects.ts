import { Injectable } from '@angular/core';
import { Actions, createEffect} from '@ngrx/effects';

@Injectable()
export class UserEffects {

  constructor(
    private action: Actions
  ) {}

  userLogin = createEffect(() =>{
    return this.action
  })
  
  userSignup = createEffect(() =>
  {
    return this.action
  })

}
