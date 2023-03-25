import { Component, HostListener, OnInit } from '@angular/core';
import { ApplicationState } from './store/state/application.state';
import { Store } from '@ngrx/store';
import { DataService } from './common/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'movie-review-app';
  isUserLoggedIn!:boolean;
  
  constructor(private store:Store<ApplicationState>, private dataService:DataService){}
  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.isUserLoggedIn=state.userLoggedStatus.isUserLoggedIn;
    })
  }
  @HostListener('window:scroll', ['$event']) 
    onScrollEvent(event:any) {
      this.dataService.menuOpenClose.next(false)
  }
}
