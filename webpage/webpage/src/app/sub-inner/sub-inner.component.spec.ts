import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubInnerComponent } from './sub-inner.component';

describe('SubInnerComponent', () => {
  let component: SubInnerComponent;
  let fixture: ComponentFixture<SubInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
