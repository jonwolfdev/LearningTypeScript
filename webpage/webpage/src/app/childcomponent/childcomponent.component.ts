import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.scss'],
  providers: [ApiService]
})
export class ChildcomponentComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('Destroyed');
  }

  constructor(private serv: ApiService) { }

  ngOnInit(): void {
  }

  showResponse(): void {
    console.log(this.serv.anotherFunc());
    this.serv.get().subscribe((data: any) => {
      console.log(data);
    });
  }
}
