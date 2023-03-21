import { Component, OnInit } from '@angular/core';
import { ApplicationState } from './store/state/application.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'movie-review-app';
  isUserLoggedIn!:boolean;
  
  constructor(private store:Store<ApplicationState>){}
  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.isUserLoggedIn=state.userLoggedStatus.isUserLoggedIn;
    })
  }
}
