import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewalertComponent } from './viewalert.component';

describe('ViewalertComponent', () => {
  let component: ViewalertComponent;
  let fixture: ComponentFixture<ViewalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
