import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationTabComponent } from './information-tab.component';

describe('InformationTabComponent', () => {
  let component: InformationTabComponent;
  let fixture: ComponentFixture<InformationTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
