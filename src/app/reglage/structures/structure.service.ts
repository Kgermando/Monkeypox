import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StructureModel } from '../models/structure-model';
import { RestService } from 'src/app/shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class StructureService extends RestService {
  endpoint: string = `${environment.apiURL}/structures`;
  // constructor(private httpClient: HttpClient) { }

  // all(): Observable<any[]> { 
  //   return this.httpClient.get<StructureModel[]>(`${environment.apiURL}/structures`);
  // }

  // // all(page: number): Observable<StructureModel[]> { 
  // //   return this.httpClient.get<StructureModel[]>(`${environment.apiURL}/structures?page=${page}`);
  // // }

  // create(data: any): Observable<Object> {
  //   return this.httpClient.post(`${environment.apiURL}/structures`, data)
  // }

  // get(id: number): Observable<StructureModel> {
  //   return this.httpClient.get<StructureModel>(`${environment.apiURL}/structures/${id}`);
  // }

  // update(id: number, data: any): Observable<Object> {
  //   return this.httpClient.put(`${environment.apiURL}/structures/${id}`, data);
  // }

  // delete(id: number): Observable<Object> {
  //   return this.httpClient.delete(`${environment.apiURL}/structures/${id}`);
  // }
}
