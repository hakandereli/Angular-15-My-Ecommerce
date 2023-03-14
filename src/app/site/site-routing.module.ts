import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SiteComponent} from "./site.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CommunicationPageComponent} from "./pages/communication-page/communication-page.component";
import {MissionPageComponent} from "./pages/about-page/mission-page/mission-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {VisionPageComponent} from "./pages/about-page/vision-page/vision-page.component";


// {path: 'home-page', component: AnasayfaComponent},
// {path: 'hakkimizda', component: HakkimizdaComponent
//
// },
// {path: 'communication-page', component: IletisimComponent},
// { path: '', redirectTo: '/login' , pathMatch: 'full' },
const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
        children: [
          {
            path: 'mission',
            component: MissionPageComponent,
          },
          {
            path: 'vision',
            component: VisionPageComponent,
          },
        ]
      },
      {
        path: 'communication',
        component: CommunicationPageComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {
}
