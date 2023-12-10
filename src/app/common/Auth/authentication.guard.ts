import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApplicationState } from '../../store/state/application.state';
import { Store } from '@ngrx/store';
import { LatestAppState } from 'src/app/custom-store/state/LatestestApp.state';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  isUserLoggedIn!:boolean;

  constructor(private store:Store<ApplicationState>,private router:Router,
    private _store:Store<LatestAppState>){}
  async canActivate(): Promise<any> {
    this._store.subscribe(state=>{
      // this.isUserLoggedIn=state.userLoggedStatus.isUserLoggedIn;
      this.isUserLoggedIn = state.userAuthStatus.isUserLoggedIn;
    })
    if(!this.isUserLoggedIn){
      this.router.navigate(['/'])
    }
   return this.isUserLoggedIn;
  
  }
  
}
