import { Component } from '@angular/core';

@Component({
  selector: 'app-account-landing',
  templateUrl: './account-landing.component.html',
  styleUrls: ['./account-landing.component.scss']
})
export class AccountLandingComponent {

  changePhoto(){
    console.log("change photo clicked..");
    
  }
} 
