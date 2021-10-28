import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickDashboardComponent } from './quick-dashboard.component';

describe('QuickDashboardComponent', () => {
  let component: QuickDashboardComponent;
  let fixture: ComponentFixture<QuickDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
