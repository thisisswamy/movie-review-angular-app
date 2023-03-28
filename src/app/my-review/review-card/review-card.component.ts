import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent implements OnInit{

  isDeleteClicked!:boolean;
  
  @Input()
  movieDetails:any
  ngOnInit(): void {
   
  }
  delete(event:any){
    this.isDeleteClicked = this.isDeleteClicked ? false : true;
    this.disableMainScroll()
  }
  deleteEvent(event:any){
    this.isDeleteClicked = this.isDeleteClicked ? false : true;
    this.enableMainScroll()
  }
  disableMainScroll(){
    const body:any = document.querySelector("body");
    body.style.overflow = 'hidden'
  }
  enableMainScroll(){
    const body:any = document.querySelector("body");
    body.style.overflow = 'auto'
  }
}
