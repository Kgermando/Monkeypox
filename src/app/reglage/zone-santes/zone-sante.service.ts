import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ZoneSanteModel } from '../models/zone-sante-model';
import { RestService } from 'src/app/shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ZoneSanteService extends RestService {
  endpoint: string = `${environment.apiURL}/zone-santes`;

  // constructor(private httpClient: HttpClient) { }

  // all(): Observable<ZoneSanteModel[]> {
  //   return this.httpClient.get<ZoneSanteModel[]>(`${environment.apiURL}/zone-santes`);
  // }

  // create(data: any): Observable<Object> {
  //   return this.httpClient.post(`${environment.apiURL}/zone-santes`, data)
  // }

  // get(id: number): Observable<ZoneSanteModel> {
  //   return this.httpClient.get<ZoneSanteModel>(`${environment.apiURL}/zone-santes/${id}`);
  // }

  // update(id: number, data: any): Observable<Object> {
  //   return this.httpClient.put(`${environment.apiURL}/zone-santes/${id}`, data);
  // }

  // delete(id: number): Observable<Object> {
  //   return this.httpClient.delete(`${environment.apiURL}/zone-santes/${id}`);
  // }
}
