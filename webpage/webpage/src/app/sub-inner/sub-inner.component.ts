import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-inner',
  templateUrl: './sub-inner.component.html',
  styleUrls: ['./sub-inner.component.scss']
})
export class SubInnerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  id = '';

  ngOnInit(): void {
    console.log('SubInnerComponent: ngOnInit called');
    this.id = this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
