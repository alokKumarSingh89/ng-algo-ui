import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

interface URL {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-algo-ui';
  protected readonly fillerNav: URL[] = [
    { name: 'Home', url: '' },
    { name: 'Tool Config', url: '/tool-config' },
    { name: 'ETF', url: '/etf' },
    { name: 'MACD STOCK Buy ', url: '/macd-stock-buy' },
  ];
  constructor() {
    console.log(this.fillerNav);
  }
}
