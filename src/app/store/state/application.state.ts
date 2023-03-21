import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { UserLoginState, initialUserLoginState } from './user-login.state';


export interface ApplicationState {
  userLoggedStatus:UserLoginState

}

export const initialAppState:ApplicationState={
  userLoggedStatus: initialUserLoginState
};

export function getInitialState():ApplicationState{
  return initialAppState;
}


