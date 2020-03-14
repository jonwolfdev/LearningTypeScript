import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { Imymodel } from '../imymodel';
import { EventEmitter } from '@angular/core';
import { IPersonObject } from '../iperson-object';
import { MyLogger } from '../my-logger';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss'],
  providers: [ApiService]
})
export class ChildcomponentComponent implements OnInit, OnDestroy {

  sub: Subscription;
  public model: Imymodel;

  myOtherPreson: IPersonObject;
  myOtherPresonFromAsync: IPersonObject;

  @Input() myinputObj: IPersonObject;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private serv: ApiService) { }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    console.log('Destroyed');
    this.myOtherPreson = {
      name: '_unset_'
    };
    this.myOtherPresonFromAsync = {
      name: '_unset2_'
    };
  }

  async ngOnInit(): Promise<any> {
    //
    this.model = {
      name: '',
      num: 0
    };

    this.serv.getValues().subscribe((data: IPersonObject[]) => {
      if (data && data.length > 0) {
        this.myOtherPreson = data[0];
      }
    });
    this.myOtherPresonFromAsync = await this.serv.getValuesAsync();
  }

  showResponse(): void {
    this.sub = this.serv.get().subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
    });
  }

  @MyLogger('Hello! ngOnInit')
  changeObjectPerson(): void {
    if (this.myinputObj) {
      this.myinputObj.name = 'This was changed';
      this.notify.emit('was changed');
    }
  }
}
