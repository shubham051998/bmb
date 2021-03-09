import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewflatComponent } from './viewflat.component';

describe('ViewflatComponent', () => {
  let component: ViewflatComponent;
  let fixture: ComponentFixture<ViewflatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewflatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewflatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
