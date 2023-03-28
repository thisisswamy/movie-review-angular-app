import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-landing',
  templateUrl: './review-landing.component.html',
  styleUrls: ['./review-landing.component.scss']
})
export class ReviewLandingComponent implements OnInit {

 
  public  moviesList=[
      {name:'RRR',lang:'Telugu',rating:'4.5/5'},
      {name:'KGF',lang:'Kannada',rating:'5/5'},
      {name:'Kantara',lang:'Kannada',rating:'5/5'},
      {name:'Dasara',lang:'Telugu',rating:'4/5'},
      {name:'Rangastalam',lang:'Telugu',rating:'3/5'}
    ]
 

  constructor(){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
