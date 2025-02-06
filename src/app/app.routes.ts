import { Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { ToolConfigComponent } from './admin/tool-config/tool-config.component';
import { EtfComponent } from './etf/etf.component';

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
    path: '',
    component: DashboadComponent,
  },
];
