import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DashboadService } from './dashboad.service';

@Component({
  selector: 'app-dashboad',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.scss',
})
export class DashboadComponent {
  private readonly dashBoardService: DashboadService = inject(DashboadService);
  restartSocket() {
    this.dashBoardService.restartWebSocket().subscribe((data) => {
      console.log(data);
    });
  }
  saveCSV() {
    this.dashBoardService.saveCSV().subscribe((data) => {
      console.log(data);
    });
  }
}
