import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }
  ngOnInit() {
    this.items = [
      {
        label: 'Products',
        icon: 'pi pi-table',
        routerLink:"/",
      },
        {
        label: 'Category',
        icon: 'pi pi-tag',
        routerLink:'/category',
      },
      {
        label: 'Attributes',
        icon: 'pi pi-ticket',
        routerLink:'/attribute',
      }
    ];
  }
}
