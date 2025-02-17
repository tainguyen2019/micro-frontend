import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: window.location.href.includes('host-app') ? '/micro-frontend/host-app/angular-app/' : '/micro-frontend/angular-app/' }
  ],
})
export class AppModule {
  constructor(private injector: Injector, private _router: Router) {
    const appElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('angular-app-element', appElement);
    this._router.initialNavigation();

  }

  ngDoBootstrap() { } // We handle bootstrapping manually.
}
