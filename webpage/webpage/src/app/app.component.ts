import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'webpage';
  showOrNot: boolean = true;

  constructor() {

  }

  showComponent(){
    this.showOrNot = !this.showOrNot;
  }

}
