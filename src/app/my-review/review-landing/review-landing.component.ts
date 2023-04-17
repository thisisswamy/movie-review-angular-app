import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

import { ApplicationHandlerService } from 'src/app/common/services/application-handler.service';
import { DataService } from 'src/app/common/services/data.service';
import { apiDetails } from 'src/environment/environment';

@Component({
  selector: 'app-review-landing',
  templateUrl: './review-landing.component.html',
  styleUrls: ['./review-landing.component.scss']
})
export class ReviewLandingComponent implements OnInit {

  public user:any;
  public  moviesList:any[]=[]
  isDataLoading!:boolean;
  searchFilter=''
 

  constructor(private http:HttpClient,
    private router:Router,
    private sanitizer:DomSanitizer,
    private dataService:DataService){}
    
  ngOnInit(): void {
    this.user=ApplicationHandlerService.get("userDetails")
    this.getAllUserReviews(this.user)
    
  }
  getAllUserReviews(user:any){
    let endpoint:string=apiDetails.reviewMSHost() + apiDetails.review_ms_service_apis.getReviewsByUserName
    const body ={
      "userName":String(user.userName),
    }
    return new Promise<any>((resolve,reject)=>{
      this.http.post(endpoint,body)
      // pipe(map<any,any>((reviews:any)=>reviews.map((review:any)=> this.dataService.createImageURL(review))))
      .
      subscribe((res:any)=>{
        this.moviesList=res;
        this.isDataLoading=true;
        console.log(this.moviesList);
        
        if(res.length>6)
        this.moviesList = res.slice(-Math.floor(res.length / 2));
        resolve(true)
        
      },
      err=>{
        this.isDataLoading=true;
        console.log(err);
        
      }
      )
    })
  }

}
