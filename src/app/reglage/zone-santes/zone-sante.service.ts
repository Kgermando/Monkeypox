import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ZoneSanteModel } from '../models/zone-sante-model';

@Injectable({
  providedIn: 'root'
})
export class ZoneSanteService {
  constructor(private httpClient: HttpClient) { }

  getList(): Observable<ZoneSanteModel[]> { // it returns a Employee object -> an array is needed
    return this.httpClient.get<ZoneSanteModel[]>(`${environment.apiURL}/zone-santes`);  // backticks!, this is a GET request (REST), it interprets the body as a JSON object
  }

  createData(data: any): Observable<Object> {
    return this.httpClient.post(`${environment.apiURL}/zone-santes`, data)
  }

  getDataById(id: number): Observable<ZoneSanteModel> {
    return this.httpClient.get<ZoneSanteModel>(`${environment.apiURL}/zone-santes/${id}`);
  }

  updateData(id: number, data: any): Observable<Object> {
    return this.httpClient.put(`${environment.apiURL}/zone-santes/${id}`, data);
  }

  deleteData(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiURL}/zone-santes/${id}`);
  }
}
