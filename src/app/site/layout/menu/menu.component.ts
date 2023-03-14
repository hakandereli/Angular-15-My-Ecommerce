import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'site-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Anasayfa', icon: 'pi pi-home'},
      {
        label: 'Hakkımızda', icon: 'pi pi-microsoft',
        items: [
          {label: 'Misyonumuz', icon: 'pi pi-history'},
          {label: 'Vizyonumuz', icon: 'pi pi-question'}]
      },
      {label: 'İletişim', icon: 'pi pi-info-circle'}
    ];
  }

}
