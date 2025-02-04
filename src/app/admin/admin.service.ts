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
}
