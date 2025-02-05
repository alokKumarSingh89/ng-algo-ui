import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HOST } from '../constant';
@Injectable({
  providedIn: 'root',
})
export class DashboadService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  constructor() {}

  restartWebSocket() {
    return this.httpClient.get(HOST + '/socket?mode=socket');
  }
}
