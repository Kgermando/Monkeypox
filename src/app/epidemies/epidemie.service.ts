import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from '../shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class EpidemieService extends RestService {
  endpoint: string = `${environment.apiURL}/epidemies`;

  // constructor(private httpClient: HttpClient) { }

  // all(): Observable<EpidemieModel[]> {
  //   return this.httpClient.get<EpidemieModel[]>(`${environment.apiURL}/epidemies`);
  // }

  // create(data: any): Observable<Object> {
  //   return this.httpClient.post(`${environment.apiURL}/epidemies`, data)
  // }

  // get(id: number): Observable<EpidemieModel> {
  //   return this.httpClient.get<EpidemieModel>(`${environment.apiURL}/epidemies/${id}`);
  // }

  // update(id: number, data: EpidemieModel): Observable<Object> {
  //   return this.httpClient.put(`${environment.apiURL}/epidemies/${id}`, data);
  // } 

  // delete(id: number): Observable<Object> {
  //   return this.httpClient.delete(`${environment.apiURL}/epidemies/${id}`);
  // }
}
