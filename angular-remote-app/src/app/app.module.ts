import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector, private _router: Router) {
    const appElement = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('angular-app-element', appElement);
    this._router.initialNavigation();

  }

  ngDoBootstrap() { } // We handle bootstrapping manually.
}
