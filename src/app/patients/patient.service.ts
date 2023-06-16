import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { PatientModel } from './models/patient-model';
import { RestService } from '../shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends RestService {
  endpoint: string = `${environment.apiURL}/patients`;
  // constructor(private httpClient: HttpClient) { }

  // all(): Observable<PatientModel[]> {
  //   return this.httpClient.get<PatientModel[]>(`${environment.apiURL}/patients`);
  // }

  // create(data: any): Observable<Object> {
  //   return this.httpClient.post(`${environment.apiURL}/patients`, data)
  // }

  // get(id: number): Observable<PatientModel> {
  //   return this.httpClient.get<PatientModel>(`${environment.apiURL}/patients/${id}`);
  // }

  // update(id: number, data: PatientModel): Observable<Object> {
  //   return this.httpClient.put(`${environment.apiURL}/patients/${id}`, data);
  // } 

  // delete(id: number): Observable<Object> {
  //   return this.httpClient.delete(`${environment.apiURL}/patients/${id}`);
  // }
}
