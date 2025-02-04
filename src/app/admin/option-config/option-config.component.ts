import { Component, inject, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
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
import { IDropDown } from '../admin.interface';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-option-config',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './option-config.component.html',
  styleUrl: './option-config.component.scss',
})
export class OptionConfigComponent implements OnInit {
  scriptForm!: FormGroup;
  adminService: AdminService = inject(AdminService);
  controlsArray: IDropDown[] = [
    {
      name: 'broker',
      placeholder: 'Select Broker',
      type: 'select',
      label: 'Select Broker',
      key: 'brokers',
    },
    {
      name: 'name',
      placeholder: 'Enter Script Name',
      type: 'select',
      label: 'Script Name',
      key: 'scriptList',
    },

    {
      name: 'strick_count',
      placeholder: '0',
      type: 'text',
      label: 'Enter Number of Strick',
    },
    {
      name: 'expiry_type',
      placeholder: '',
      type: 'select',
      label: 'Select Expiry Type',
      key: 'expiryType',
    },
    {
      name: 'expiry',
      placeholder: 'Enter Script Name',
      type: 'select',
      label: 'Expiry',
      key: 'expiry',
    },
  ];

  configData: { [key: string]: any } = {
    brokers: [],
    scriptList: [],
    expiryType: [
      { name: 'M', id: 0 },
      { name: 'W', id: 1 },
    ],
    expiry: [],
  };

  constructor(private readonly formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.scriptForm = this.formBuilder.group({
      rows: this.formBuilder.array([]),
    });
    this.adminService.loadBroker().subscribe((data) => {
      const broker = Object.values(data).map((item, index) => ({
        name: item,
        id: index + 1,
      }));
      this.configData['brokers'] = broker;
    });
    this.addRow();
  }
  getconfig(control: IDropDown) {
    if (control.key) {
      return this.configData[control.key];
    }
    return [];
  }
  changeValueHandler(type: string, value: string) {
    if (type === 'broker') {
      this.adminService.getScriptConfig(value).subscribe((data: any) => {
        const scriptName: any = [];
        const expiryList: any = [];
        Object.keys(data).forEach((key, index) => {
          if (key != 'M' && key != 'W') {
            if (!data[key].expiry_flag) {
              expiryList.push({
                name: data[key].expiry,
                id: index + 1,
              });
            }
            scriptName.push({
              name: `${data[key].exchange}:${data[key].name}`,
              id: index + 1,
            });
          }
        });
        this.configData['scriptList'] = scriptName;
        this.configData['expiry'] = expiryList;
      });
    }
    // console.log(type, value);
  }
  get rows(): FormArray {
    return this.scriptForm.get('rows') as FormArray;
  }

  // Return List of form
  get rowsControls(): AbstractControl[] {
    return this.rows.controls;
  }

  getFormGroupAtIndex(index: number) {
    return this.rowsControls[index] as FormGroup;
  }

  addRow() {
    let row = this.formBuilder.group({
      name: ['', Validators.required],
      strick_count: [0, Validators.required],
      broker: ['', Validators.required],
      expiry_type: ['M', Validators.required],
      expiry: ['', Validators.required],
    });
    this.rows.push(row);
  }
  deleteRow(index: number): void {
    this.rows.removeAt(index);
  }
  submit() {
    if (this.rows.valid) {
      const formData = this.rows.value;

      this.adminService.saveScriptConfig(formData).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
