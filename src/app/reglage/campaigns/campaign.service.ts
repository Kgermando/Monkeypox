import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CampaignModel } from '../models/campaign-model';
import { RestService } from 'src/app/shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignService extends RestService {
  endpoint: string = `${environment.apiURL}/campaigns`;
  // constructor(private httpClient: HttpClient) { }

  // all(): Observable<CampaignModel[]> { 
  //   return this.httpClient.get<CampaignModel[]>(`${environment.apiURL}/campaigns`);
  // }

  // create(data: any): Observable<Object> {
  //   return this.httpClient.post(`${environment.apiURL}/campaigns`, data)
  // }

  // get(id: number): Observable<CampaignModel> {
  //   return this.httpClient.get<CampaignModel>(`${environment.apiURL}/campaigns/${id}`);
  // }

  // update(id: number, data: any): Observable<Object> {
  //   return this.httpClient.put(`${environment.apiURL}/campaigns/${id}`, data);
  // }

  // delete(id: number): Observable<Object> {
  //   return this.httpClient.delete(`${environment.apiURL}/campaigns/${id}`);
  // }
}
