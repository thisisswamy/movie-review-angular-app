import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isMenuOpen!:boolean;
  isMenuItemsOpen!:boolean

  constructor(private dataService:DataService){}

  ngOnInit(): void {
    this.dataService.menuOpenClose.subscribe(data=>{
      this.isMenuOpen=data;
    })
  }
  menuEvent(){
    this.isMenuOpen = this.isMenuOpen ? false :true
  }

}
