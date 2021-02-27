import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserComponent2 } from './viewuser2.component';

describe('Viewuser2Component', () => {
  let component: ViewuserComponent2;
  let fixture: ComponentFixture<ViewuserComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserComponent2]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
