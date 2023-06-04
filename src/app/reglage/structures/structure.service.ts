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

  getList(): Observable<any[]> { 
    return this.httpClient.get<StructureModel[]>(`${environment.apiURL}/structures`);
  }

  // getList(page: number): Observable<StructureModel[]> { 
  //   return this.httpClient.get<StructureModel[]>(`${environment.apiURL}/structures?page=${page}`);
  // }

  createData(data: any): Observable<Object> {
    return this.httpClient.post(`${environment.apiURL}/structures`, data)
  }

  getDataById(id: number): Observable<StructureModel> {
    return this.httpClient.get<StructureModel>(`${environment.apiURL}/structures/${id}`);
  }

  updateData(id: number, data: any): Observable<Object> {
    return this.httpClient.put(`${environment.apiURL}/structures/${id}`, data);
  }

  deleteData(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiURL}/structures/${id}`);
  }
}
