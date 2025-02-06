import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HOST } from '../constant';

@Injectable({
  providedIn: 'root',
})
export class EtfService {
  private readonly httpClient: HttpClient = inject(HttpClient);
  constructor() {}

  addEtf(etf: { name: string }) {
    return this.httpClient.post(HOST + '/etf', etf);
  }
  load() {
    return this.httpClient.get(HOST + '/etf');
  }
  loadPaperTrade() {
    return this.httpClient.get(HOST + '/etf/paper');
  }
  buyEtf(data: any) {
    return this.httpClient.post(HOST + '/etf/paper', data);
  }
}
