import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StructureModel } from '../models/structure-model';

@Injectable({
  providedIn: 'root'
})
export class StructureService {
  constructor(private httpClient: HttpClient) { }

  getList(): Observable<StructureModel[]> { // it returns a Employee object -> an array is needed
    return this.httpClient.get<StructureModel[]>(`${environment.apiURL}/structures`);  // backticks!, this is a GET request (REST), it interprets the body as a JSON object
  }

  createData(data: StructureModel): Observable<Object> {
    return this.httpClient.post(`${environment.apiURL}/structures`, data)
  }

  getDataById(id: number): Observable<StructureModel> {
    return this.httpClient.get<StructureModel>(`${environment.apiURL}/structures/${id}`);
  }

  updateData(id: number, data: StructureModel): Observable<Object> {
    return this.httpClient.put(`${environment.apiURL}/structures/${id}`, data);
  }

  deleteData(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiURL}/structures/${id}`);
  }
}
