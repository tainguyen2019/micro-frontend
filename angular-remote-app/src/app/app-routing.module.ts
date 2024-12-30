import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'angular-app/home',
    component: HomeComponent
  },
  {
    path: 'angular-app/about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'angular-app/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
