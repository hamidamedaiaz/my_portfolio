import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone : true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class sidebarComponent {

 isOpen = true;
 
 toggleSidebar(){
  this.isOpen = !this.isOpen;
 }

}
