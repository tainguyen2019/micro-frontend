import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-app',
  templateUrl: './react-app.component.html',
  styleUrls: ['./react-app.component.scss'],
})
export class ReactAppComponent implements OnInit {
  constructor() {
  }

  async ngOnInit() {
    const isLocal: boolean = window.location.href.includes('localhost:4200');
    const localFile: string = 'http://localhost:3000/remoteEntry.js';
    const prodFile: string = 'https://tainguyen2019.github.io/micro-frontend/react-app/remoteEntry.js';

    await loadRemoteModule({
      type: 'module',
      remoteEntry: isLocal ? localFile : prodFile,
      exposedModule: './web-component'
    });
  }

}
