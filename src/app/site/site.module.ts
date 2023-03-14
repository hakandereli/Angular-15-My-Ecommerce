import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SiteRoutingModule} from './site-routing.module';
import {MenuComponent} from "./layout/menu/menu.component";
import {SiteComponent} from "./site.component";


@NgModule({
  declarations: [
    MenuComponent,
    SiteComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule
  ]
})
export class SiteModule {
}
