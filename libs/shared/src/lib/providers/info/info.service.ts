import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoResponse } from '../../models/info.response';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(private httpClient: HttpClient) {}

  getInfo(): Observable<InfoResponse> {
    return this.httpClient.get<InfoResponse>('/api/infoText');
  }
}
