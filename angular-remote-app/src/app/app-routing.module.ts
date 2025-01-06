import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const BASE_URL = 'angular-app';
const computeRoute = (path: string) => environment.production ? path : `${BASE_URL}/${path}`

const routes: Routes = [
  {
    path: computeRoute('home'),
    component: HomeComponent
  },
  {
    path: computeRoute('about'),
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: computeRoute('home'),

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
