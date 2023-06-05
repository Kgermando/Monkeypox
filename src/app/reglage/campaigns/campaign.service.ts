import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CampaignModel } from '../models/campaign-model';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  constructor(private httpClient: HttpClient) { }

  getList(): Observable<CampaignModel[]> { 
    return this.httpClient.get<CampaignModel[]>(`${environment.apiURL}/campaigns`);
  }

  createData(data: any): Observable<Object> {
    return this.httpClient.post(`${environment.apiURL}/campaigns`, data)
  }

  getDataById(id: number): Observable<CampaignModel> {
    return this.httpClient.get<CampaignModel>(`${environment.apiURL}/campaigns/${id}`);
  }

  updateData(id: number, data: any): Observable<Object> {
    return this.httpClient.put(`${environment.apiURL}/campaigns/${id}`, data);
  }

  deleteData(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiURL}/campaigns/${id}`);
  }
}
