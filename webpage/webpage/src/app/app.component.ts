import { Component, OnDestroy } from '@angular/core';
import { IPersonObject } from './iperson-object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'webpage';
  showOrNot: boolean = true;
  myobj: IPersonObject;

  constructor() {
    this.myobj = {name: 'My name is Name', type: 'person' };
  }

  showComponent() {
    this.showOrNot = !this.showOrNot;
  }

  onNotify(msg: string): void {
    console.log('App component was notified: ' + msg);
  }
}
