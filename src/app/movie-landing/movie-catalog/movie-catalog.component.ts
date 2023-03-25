import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
    this.imgName=this.imgList[this.index];
    this.imgURL = this.baseURL+this.imgName
  }

  prevImage(event: any){
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
  nextImage(event: any) {
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
