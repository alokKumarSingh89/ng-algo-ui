import { Routes } from '@angular/router';
import { ScriptConfigComponent } from './script-config/script-config.component';
import { DashboadComponent } from './dashboad/dashboad.component';

export const routes: Routes = [
  {
    path: 'script-config',
    component: ScriptConfigComponent,
  },
  {
    path: '',
    component: DashboadComponent,
  },
];
