import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, ActivationStart, NavigationEnd, NavigationStart, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter, map, pairwise } from 'rxjs';
import { DataConstants } from '../../services/Error-handler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isMenuOpen!:boolean;
  isMenuItemsOpen!:boolean
  reloadRoutes =DataConstants.reloadRoutes

  constructor(private dataService:DataService, private router:Router,private activeRoute:ActivatedRoute, private http:HttpClient){


    // this.router.events
    // .pipe(
    //   filter(((routerInfo: any) => routerInfo instanceof ActivationStart)),
    //   map((x:any)=> x as ActivationStart),
    //   pairwise()
    // )
    // .subscribe(([currentRoute,previousRoute])=>{
    //     // this.router.events.pipe(filter(route => route instanceof NavigationEnd)).subscribe((endRoute:any) => {
    //     this.router.events.pipe(filter(route => route instanceof NavigationStart)).subscribe((endRoute:any) => {
          
    //       // if(this.reloadRoutes.includes(endRoute)){
    //         // this.router.navigate(['/${currentRoute.snapshot.pathFromRoot[1].url[0].path}'])
            
    //         console.log("route included :: "+ this.reloadRoutes.includes(endRoute.url));
            

    //       // }
          
    //     })

    // })

    // this.router.events.pipe(filter(routerInfo => routerInfo instanceof NavigationStart)).subscribe((activeRoute:any)=>{
    //   console.log(activeRoute.url);
      
    // })
    
  }

  ngOnInit(): void {
    this.dataService.menuOpenClose.subscribe(data=>{
      this.isMenuOpen=data;
    })
  }
  menuEvent(){
    this.isMenuOpen = this.isMenuOpen ? false :true
  }

}
