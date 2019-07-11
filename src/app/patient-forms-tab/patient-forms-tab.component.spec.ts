import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormsTabComponent } from './patient-forms-tab.component';

describe('PatientFormsTabComponent', () => {
  let component: PatientFormsTabComponent;
  let fixture: ComponentFixture<PatientFormsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFormsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFormsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
