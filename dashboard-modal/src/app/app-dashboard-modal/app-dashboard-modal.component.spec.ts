import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDashboardModalComponent } from './app-dashboard-modal.component';

describe('AppDashboardModalComponent', () => {
  let component: AppDashboardModalComponent;
  let fixture: ComponentFixture<AppDashboardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDashboardModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDashboardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
