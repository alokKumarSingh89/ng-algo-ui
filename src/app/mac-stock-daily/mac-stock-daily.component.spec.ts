import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacStockDailyComponent } from './mac-stock-daily.component';

describe('MacStockDailyComponent', () => {
  let component: MacStockDailyComponent;
  let fixture: ComponentFixture<MacStockDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacStockDailyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacStockDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
