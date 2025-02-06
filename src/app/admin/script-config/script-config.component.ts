import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-script-config',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  templateUrl: './script-config.component.html',
  styleUrl: './script-config.component.scss',
})
export class ScriptConfigComponent implements OnInit {
  // Alwasy need to add
  broker_list: string[] = [];
  /** all config based on broker
   * 1: Add script
   * 2: Add exhange
   * 5: add expire flag
   * 5: add strick difference
   * 6: add lots size
   * 7: add express based on monthly and weeky
   * 8: add key
   * 9: add month
   */
  scriptConfig!: FormGroup;
  adminService = inject(AdminService);
  private _snackBar = inject(MatSnackBar);
  controlsArray = [
    {
      name: 'name',
      placeholder: 'Enter Script Name',
      type: 'input',
      label: 'Script Name',
    },
    {
      name: 'diff',
      placeholder: 'Enter Strick Difference',
      type: 'number',
      label: 'Strick Difference',
    },
    {
      name: 'lots',
      placeholder: 'Enter Lots Size',
      type: 'number',
      label: 'Lots Size',
    },
    {
      name: 'key',
      placeholder: 'Enter Key Name',
      type: 'input',
      label: 'Script Key',
    },
  ];
  createForm() {
    this.scriptConfig = this.formBuilder.group({
      broker_name: ['', Validators.required],
      m_exp: ['', Validators.required],
      w_exp: ['', Validators.required],
      w_m: ['', Validators.required],
      m_m: ['', Validators.required],
      rows: this.formBuilder.array([]),
    });
  }
  constructor(private readonly formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
    this.adminService.loadBroker().subscribe((data) => {
      this.broker_list = Object.values(data);
    });
  }
  get rows(): FormArray {
    return this.scriptConfig.get('rows') as FormArray;
  }
  get rowsControls(): AbstractControl[] {
    return this.rows.controls;
  }
  getFormGroupAtIndex(index: number) {
    return this.rowsControls[index] as FormGroup;
  }
  addRow() {
    let row = this.formBuilder.group({
      name: ['', Validators.required],
      expiry: ['', Validators.required],
      diff: [50, Validators.required],
      lots: [70, Validators.required],
      key: ['', Validators.required],
    });
    this.rows.push(row);
  }
  updateRow(data: any) {
    let row = this.formBuilder.group({
      name: [data.name, Validators.required],
      diff: [data.diff, Validators.required],
      lots: [data.lots, Validators.required],
      key: [data.key, Validators.required],
    });
    this.rows.push(row);
  }
  deleteRow(index: number): void {
    this.rows.removeAt(index);
  }
  loadBrokerData(broker: string): void {
    if (broker) {
      this.openSnackBar('Loading Config');
      this.adminService.getScriptConfig(broker).subscribe((data: any) => {
        if (data && Object.keys(data).length > 0) {
          console.log(data);
          this.createForm();
          this.scriptConfig.patchValue({
            broker_name: broker,
            m_exp: data['M_exp'],
            w_exp: data['W_exp'],
            w_m: data['W_month'],
            m_m: data['M_month'],
          });

          Object.keys(data).forEach((key) => {
            if (!['M_exp', 'W_exp', 'W_month', 'M_month'].includes(key)) {
              this.updateRow(data[key]);
            }
          });
          this.openSnackBar('Data Loaded');
        } else {
          this.createForm();
          this.scriptConfig.patchValue({
            broker_name: broker,
          });
          this.addRow();
          this.openSnackBar('Data Loaded');
        }
      });
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X');
  }
  submit() {
    if (this.scriptConfig.valid) {
      const formValue = this.scriptConfig.value;
      this.adminService
        .createScriptConfig(this.scriptConfig.value)
        .subscribe((data) => {});
    }
  }
}
