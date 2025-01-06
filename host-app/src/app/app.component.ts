import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isSelectedRemoteApp(app: string) {
    return window.location.href.includes(`${location.host}/micro-frontend/host-app/${app}`)
  }
}
