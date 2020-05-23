import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IPersonObject } from '../iperson-object';

@Component({
  selector: 'app-my-ng-navigation',
  templateUrl: './my-ng-navigation.component.html',
  styleUrls: ['./my-ng-navigation.component.scss']
})
export class MyNgNavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.myobj = {name: 'My name is Name', type: 'person' };
  }

  title = 'webpage';
  showOrNot: boolean = true;
  myobj: IPersonObject;


  showComponent() {
    this.showOrNot = !this.showOrNot;
  }

  onNotify(msg: string): void {
    console.log('App component was notified: ' + msg);
  }

}
