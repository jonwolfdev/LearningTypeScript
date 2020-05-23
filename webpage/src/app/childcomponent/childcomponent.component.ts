import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { Imymodel } from '../imymodel';
import { EventEmitter } from '@angular/core';
import { IPersonObject } from '../iperson-object';
import { MyLogger } from '../my-logger';
import { PartialProperties } from '../partial-properties';

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

  list: IPersonObject[] = [];

  constructor(private serv: ApiService) { }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    console.log('Destroyed');
    this.myOtherPreson = {
      name: '_unset_',
      type: 'person'
    };
    this.myOtherPresonFromAsync = {
      name: '_unset2_',
      type: 'person'
    };
  }

  async ngOnInit(): Promise<any> {
    //
    this.model = {
      name: '',
      num: 0,
      type: 'model'
    };

    this.serv.getValues().subscribe((data: IPersonObject[]) => {
      if (data && data.length > 0) {
        this.myOtherPreson = data[0];
      }
    });
    this.myOtherPresonFromAsync = await this.serv.getValuesAsync();

    console.log(new PartialProperties().setProperties(this.myOtherPreson, {name: 'New name!@!'}));
    console.log(new PartialProperties().toString());
    new PartialProperties().hitTest(['string one', 12.34, {name: 'asd', num: 12, type: 'model'}, 'on']);

    setTimeout(() => {
      this.serv.getValues().subscribe((data: IPersonObject[]) => {
        this.list = data;
      });
    }, 1000);

    setTimeout(() => {
      this.list.push({name: 'From code a new one!', type: 'person'});
    }, 2500);
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
