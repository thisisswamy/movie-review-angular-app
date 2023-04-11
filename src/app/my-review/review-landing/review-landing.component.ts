import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationHandlerService } from 'src/app/common/services/application-handler.service';
import { apiDetails } from 'src/environment/environment';

@Component({
  selector: 'app-review-landing',
  templateUrl: './review-landing.component.html',
  styleUrls: ['./review-landing.component.scss']
})
export class ReviewLandingComponent implements OnInit {

  public user:any;
  public  moviesList:any=[]
  isDataLoading!:boolean;
 

  constructor(private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    this.user=ApplicationHandlerService.get("userDetails")
    this.getAllUserReviews(this.user)
    
  }
  getAllUserReviews(user:any){
    let endpoint:string=apiDetails.reviewMSHost() + apiDetails.review_ms_service_apis.getReviewsByUserName
    const body ={
      "userName":String(user.userName),
    }
    const header=new HttpHeaders({
      "Authorization" : apiDetails.JWT_TOKEN,
      'Content-Type': 'application/json'
    })

    return new Promise((resolve,reject)=>{
      this.http.post(endpoint,body,{headers:header}).subscribe((res:any)=>{
        this.moviesList=res;
        this.isDataLoading=true;
        if(res.length>6)
        this.moviesList =this.moviesList.slice(-(this.moviesList.length-1/2) ,-1)
     
        console.log(res);
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
