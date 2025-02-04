import { Routes } from '@angular/router';
import { DashboadComponent } from './dashboad/dashboad.component';
import { ToolConfigComponent } from './admin/tool-config/tool-config.component';

export const routes: Routes = [
  {
    path: 'tool-config',
    component: ToolConfigComponent,
  },
  {
    path: '',
    component: DashboadComponent,
  },
];
