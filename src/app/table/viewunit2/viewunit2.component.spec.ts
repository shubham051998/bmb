import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewunit2Component } from './viewunit2.component';

describe('Viewunit2Component', () => {
  let component: Viewunit2Component;
  let fixture: ComponentFixture<Viewunit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Viewunit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Viewunit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
