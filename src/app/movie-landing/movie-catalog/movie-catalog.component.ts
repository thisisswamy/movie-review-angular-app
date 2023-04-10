import { Component, OnInit } from '@angular/core';
import { ApplicationHandlerService } from 'src/app/common/services/application-handler.service';

@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.scss'],
})
export class MovieCatalogComponent implements OnInit {
  
  isFirstImg!:boolean;
  isLastImg!:boolean;
  index=0
  imgList = [
    'bb2_logo.jpg',
    'bb2_prabhas.jpg',
    'charan_angry_rr.jpeg',
    'cover-page.jpg',
    'kgf.jpg',
  ];
  baseURL: any = '../../../assets/images/';
  imgName:any;
  imgURL:any;
  userInfo:any;

  recentMovieList =[
    { name:'RRR',rating :'5',lang:'Telugu'},
    { name:'KGF',rating :'4',lang:'Kannada'},
    { name:'Kantara',rating :'9',lang:'Kannada'},
    { name:'Veera Simha',rating :'3',lang:'Telugu'}]
  ngOnInit(): void {
    this.imgName=this.imgList[this.index];
    this.imgURL = this.baseURL+this.imgName
    this.userInfo=ApplicationHandlerService.get("userDetails")
  }

  prevImage(){
    this.index -=1 
    this.imgName=this.imgList[this.index]
    if(this.imgList.indexOf(this.imgName)> -1){
      this.imgURL=this.baseURL+this.imgName
      this.isLastImg=false;
      if(this.index===0){
        this.isFirstImg=false
      }
    }else{
      return;
    }

  }
  nextImage() {
    this.isFirstImg=true;
    this.index +=1 
    this.imgName=this.imgList[this.index]
    if(this.imgList.indexOf(this.imgName)> -1){
      this.imgURL=this.baseURL+this.imgName
      if(this.index=== this.imgList.length-1){
        this.isLastImg=true
      }
      
    }else{
      return;
    }
  }
}
