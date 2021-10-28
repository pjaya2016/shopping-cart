import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealAndPromotionsComponent } from './deal-and-promotions.component';

describe('DealAndPromotionsComponent', () => {
  let component: DealAndPromotionsComponent;
  let fixture: ComponentFixture<DealAndPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealAndPromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealAndPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
