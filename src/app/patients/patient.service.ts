import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { HttpClient } from '@angular/common/http';
import { PatientModel } from './models/patient-model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private httpClient: HttpClient) { }

  getList(): Observable<PatientModel[]> {
    return this.httpClient.get<PatientModel[]>(`${environment.apiURL}/patients`);
  }

  createData(data: any): Observable<Object> {
    return this.httpClient.post(`${environment.apiURL}/patients`, data)
  }

  getDataById(id: number): Observable<PatientModel> {
    return this.httpClient.get<PatientModel>(`${environment.apiURL}/patients/${id}`);
  }

  updateData(id: number, data: PatientModel): Observable<Object> {
    return this.httpClient.put(`${environment.apiURL}/patients/${id}`, data);
  } 

  deleteData(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiURL}/patients/${id}`);
  }
}
