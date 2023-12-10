import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserStatus } from 'src/app/store/action/user-login.actions';
import { ApplicationState } from 'src/app/store/state/application.state';
import { apiDetails } from 'src/environment/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private state:Store<ApplicationState>){}
  ngOnInit(): void {
    this.state.dispatch(new UserStatus({isUserLoggedIn:false}))
    console.log("token ::>> "+ apiDetails.JWT_TOKEN);
    
    
  }

  login(){
    console.log("clicked,,");
    
  }

}
