import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitavalComponent } from './unitaval.component';

describe('UnitavalComponent', () => {
  let component: UnitavalComponent;
  let fixture: ComponentFixture<UnitavalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitavalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitavalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
