import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-app',
  templateUrl: './angular-app.component.html',
  styleUrls: ['./angular-app.component.scss']
})
export class AngularAppComponent implements OnInit {
  constructor() {
  }

  async ngOnInit() {
    const isLocal: boolean = window.location.href.includes('localhost:4200');
    const localFile: string = 'http://localhost:4201/remoteEntry.js';
    const prodFile: string = 'https://tainguyen2019.github.io/micro-frontend/angular-app/remoteEntry.js';

    await loadRemoteModule({
      type: 'module',
      remoteEntry: isLocal ? localFile : prodFile,
      exposedModule: './web-component'
    });
  }

}
