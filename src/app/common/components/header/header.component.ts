import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen!:boolean;
  isMenuItemsOpen!:boolean

  menuEvent(){
    this.isMenuOpen = this.isMenuOpen ? false :true
  }

}
