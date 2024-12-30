import {
  startsWith
} from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularAppComponent } from './angular-app/angular-app.component';
import { ReactAppComponent } from './react-app/react-app.component';

const routes: Routes = [
  {
    matcher: startsWith('angular-app'),
    component: AngularAppComponent
  },
  {
    matcher: startsWith('react-app'),
    component: ReactAppComponent
  },
  {
    path: '**',
    redirectTo: 'angular-app'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
