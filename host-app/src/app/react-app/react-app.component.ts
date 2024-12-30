import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-react-app',
  templateUrl: './react-app.component.html',
  styleUrls: ['./react-app.component.scss']
})
export class ReactAppComponent implements OnInit {
  constructor() {
  }

  async ngOnInit() {
    await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:3000/remoteEntry.js',
      exposedModule: './web-component'
    });
  }

}
