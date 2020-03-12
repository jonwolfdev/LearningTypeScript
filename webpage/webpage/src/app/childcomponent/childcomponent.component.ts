import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { Imymodel } from '../imymodel';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss'],
  providers: [ApiService]
})
export class ChildcomponentComponent implements OnInit, OnDestroy {

  sub: Subscription;
  public model: Imymodel;

  constructor(private serv: ApiService) { }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    console.log('Destroyed');
  }

  ngOnInit(): void {
    //
    this.model = {
      name: '',
      num: 0
    };
  }

  showResponse(): void {
    this.sub = this.serv.get().subscribe((data: any) => {
      console.log(data);
    }, (error: any) => {
      console.log(error);
    });
  }
}
