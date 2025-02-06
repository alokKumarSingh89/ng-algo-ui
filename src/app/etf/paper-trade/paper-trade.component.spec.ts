import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperTradeComponent } from './paper-trade.component';

describe('PaperTradeComponent', () => {
  let component: PaperTradeComponent;
  let fixture: ComponentFixture<PaperTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
