import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundPageComponent} from "./shared/pages/not-found-page/not-found-page.component";


const routes: Routes = [

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '',
    loadChildren: () => import('./site/site.module').then((m) => m.SiteModule),
  },
  {
    path: '**', // en sona yazılır sebebi üstteki routeları ezer yoksa.
    component: NotFoundPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
