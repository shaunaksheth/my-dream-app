import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpservicecallComponent } from './httpservicecall.component';

describe('HttpservicecallComponent', () => {
  let component: HttpservicecallComponent;
  let fixture: ComponentFixture<HttpservicecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpservicecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpservicecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
