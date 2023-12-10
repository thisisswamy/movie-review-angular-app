import { UserAuthStatusState, initialUserAuthStatusState } from "./UserAuthStatus.state";

export interface LatestAppState{
    userAuthStatus:UserAuthStatusState,

}

export const initialLatestAppState :LatestAppState={
    userAuthStatus: initialUserAuthStatusState
}


export function getInitialState():LatestAppState{
    return initialLatestAppState;
  }