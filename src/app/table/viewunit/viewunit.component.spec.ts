import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewunitComponent } from './viewunit.component';

describe('ViewunitComponent', () => {
  let component: ViewunitComponent;
  let fixture: ComponentFixture<ViewunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
