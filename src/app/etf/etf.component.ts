import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EtfService } from './etf.service';
import { DecimalPipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { PaperTradeComponent } from './paper-trade/paper-trade.component';

@Component({
  selector: 'app-etf',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    DecimalPipe,
    MatTabsModule,
    PaperTradeComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './etf.component.html',
  styleUrl: './etf.component.scss',
})
export class EtfComponent implements OnInit {
  etf = '';
  total_etf: any = null;
  best_for_today: any = null;

  private readonly etfService = inject(EtfService);
  ngOnInit(): void {
    this.etfService.load().subscribe((data: any) => {
      console.log(data);
      this.total_etf = data['data'];
      this.best_for_today = data['small'];
    });
  }
  addScript() {
    this.etfService.addEtf({ name: this.etf }).subscribe((data) => {
      console.log(data);
      this.etf = '';
    });
  }
  buyEtf(data: any) {
    this.etfService.buyEtf({ name: data.script }).subscribe((data) => {
      console.log(data);
    });
  }
}
