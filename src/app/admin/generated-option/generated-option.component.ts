import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-generated-option',
  imports: [MatTableModule],
  templateUrl: './generated-option.component.html',
  styleUrl: './generated-option.component.scss',
})
export class GeneratedOptionComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = [];

  adminService = inject(AdminService);

  constructor() {}
  ngOnInit(): void {
    // this.adminService.get_generated_option().subscribe((data: any) => {
    //   // const tmp = data.map((element: any) => {
    //   //   const d = Object.keys(element).map((key) => {
    //   //     return { [key]: Object.values(element[key]) };
    //   //   });
    //   //   console.log(d);
    //   //   return d;
    //   // });
    //   console.log(data);
    // });
  }
}
