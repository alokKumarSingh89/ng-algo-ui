import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IDropDown } from './admin.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly http: HttpClient = inject(HttpClient);
  private host = 'http://localhost:8000/option';
  constructor() {}

  saveScriptConfig(scriptConfig: IDropDown) {
    return this.http.post(this.host, scriptConfig);
  }

  createScriptConfig(scriptConfig: any) {
    return this.http.post(this.host + '/script_config', scriptConfig);
  }
  getScriptConfig(broker: string) {
    return this.http.get(this.host + '/script_config?broker=' + broker);
  }
  loadBroker() {
    return this.http.get(this.host + '/broker_list');
  }
  get_generated_option() {
    return this.http.get(this.host);
  }
  delete_option(option: string, broker: string) {
    return this.http.delete(`${this.host}/${option}?broker=${broker}`);
  }
  convertDate(date: string) {
    const current_date = new Date(date);
    const expiry =
      current_date.getFullYear() +
      '-' +
      (current_date.getMonth() + 1) +
      '-' +
      current_date.getDate();
    return expiry;
  }
}
