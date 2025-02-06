import { Component, inject, OnInit } from '@angular/core';
import { EtfService } from '../etf.service';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-paper-trade',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './paper-trade.component.html',
  styleUrl: './paper-trade.component.scss',
})
export class PaperTradeComponent implements OnInit {
  etfService: EtfService = inject(EtfService);
  paperTrade: any = {};

  ngOnInit(): void {
    this.etfService.loadPaperTrade().subscribe((data: any) => {
      console.log(data);
      this.paperTrade['capital'] = data['capital'];
      this.paperTrade['div'] = data['div'];
      this.paperTrade['allowed_per_lot'] = data['capital'] / data['div'];
      this.paperTrade['rows'] = [];
      Object.keys(data).forEach((key) => {
        if (
          !['capital', 'div', 'remain_amount', 'last_trade_day'].includes(key)
        ) {
          this.paperTrade['rows'].push(data[key]);
        }
      });
    });
  }
}
