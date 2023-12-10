import { createAction, props } from '@ngrx/store';
import { UserAuthStatusState } from '../state/UserAuthStatus.state';


export const userAuthentication = createAction(
  '[USER_AUTH] User Authentication',
  props<UserAuthStatusState>()
);
