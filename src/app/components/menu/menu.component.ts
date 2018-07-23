import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
      this.items = [
          {label: 'Crear',
          routerLink:['/crear']},
          {label: 'Listar',
          routerLink:['/listar']}
      ];
      this.activeItem = this.items[0];
  }

}
