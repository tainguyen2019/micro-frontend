import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home/angular-home',
    component: HomeComponent
  },
  {
    path: 'home/about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home/angular-home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
