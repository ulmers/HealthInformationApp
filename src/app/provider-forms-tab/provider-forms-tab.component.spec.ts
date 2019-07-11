import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderFormsTabComponent } from './provider-forms-tab.component';

describe('ProviderFormsTabComponent', () => {
  let component: ProviderFormsTabComponent;
  let fixture: ComponentFixture<ProviderFormsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderFormsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderFormsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
