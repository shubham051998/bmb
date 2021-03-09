import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddalertComponent } from './addalert.component';

describe('AddalertComponent', () => {
  let component: AddalertComponent;
  let fixture: ComponentFixture<AddalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
