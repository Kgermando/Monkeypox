import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EpidemieModel } from './models/epidemie-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpidemieService {
  constructor(private httpClient: HttpClient) { }

  getList(): Observable<EpidemieModel[]> {
    return this.httpClient.get<EpidemieModel[]>(`${environment.apiURL}/epidemies`);
  }

  createData(data: any): Observable<Object> {
    return this.httpClient.post(`${environment.apiURL}/epidemies`, data)
  }

  getDataById(id: number): Observable<EpidemieModel> {
    return this.httpClient.get<EpidemieModel>(`${environment.apiURL}/epidemies/${id}`);
  }

  updateData(id: number, data: EpidemieModel): Observable<Object> {
    return this.httpClient.put(`${environment.apiURL}/epidemies/${id}`, data);
  } 

  deleteData(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiURL}/epidemies/${id}`);
  }
}
