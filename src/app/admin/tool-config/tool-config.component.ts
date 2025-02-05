import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { OptionConfigComponent } from '../option-config/option-config.component';
import { ScriptConfigComponent } from '../script-config/script-config.component';
import { GeneratedOptionComponent } from '../generated-option/generated-option.component';
@Component({
  selector: 'app-tool-config',
  imports: [
    MatTabsModule,
    OptionConfigComponent,
    ScriptConfigComponent,
    // GeneratedOptionComponent,
  ],
  templateUrl: './tool-config.component.html',
  styleUrl: './tool-config.component.scss',
})
export class ToolConfigComponent {}
