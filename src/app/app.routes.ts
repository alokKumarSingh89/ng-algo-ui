import { Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { ToolConfigComponent } from './admin/tool-config/tool-config.component';
import { EtfComponent } from './etf/etf.component';
import { MacStockDailyComponent } from './mac-stock-daily/mac-stock-daily.component';

export const routes: Routes = [
  {
    path: 'tool-config',
    component: ToolConfigComponent,
  },
  {
    path: 'etf',
    component: EtfComponent,
  },
  {
    path: 'macd-stock-buy',
    component: MacStockDailyComponent,
  },
  {
    path: '',
    component: DashboadComponent,
  },
];
