import { createReducer, on } from '@ngrx/store';
import { initialUserAuthStatusState,UserAuthStatusState } from '../state/UserAuthStatus.state';
import { userAuthentication } from '../actions/user-authentication.actions';

export const initialState:UserAuthStatusState=initialUserAuthStatusState
export const userAuthenticationReducer = createReducer(
  initialState,
  on(userAuthentication,(state,user)=>{
    return {
      isUserLoggedIn : user.isUserLoggedIn,
      userRole:user.userRole,
      lastLoggedIn:user.lastLoggedIn
    }
    
  })
);

