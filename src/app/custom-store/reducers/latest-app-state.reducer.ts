import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { LatestAppState } from '../state/LatestestApp.state';
import { userAuthenticationReducer } from './user-authentication.reducer';


export const latesAppReducers:ActionReducerMap<LatestAppState,any> ={
  userAuthStatus: userAuthenticationReducer
}

