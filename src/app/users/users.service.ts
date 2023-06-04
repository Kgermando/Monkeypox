import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './models/user-models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService { 

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<UserModel[]> { // it returns a Employee object -> an array is needed
    return this.httpClient.get<UserModel[]>(`${environment.apiURL}/users`);  // backticks!, this is a GET request (REST), it interprets the body as a JSON object
  }

  createData(data: any): Observable<Object> {
    return this.httpClient.post(`${environment.apiURL}/users`, data)
  }

  getDataById(id: number): Observable<UserModel> {
    return this.httpClient.get<UserModel>(`${environment.apiURL}/users/${id}`);
  }

  updateData(id: number, data: UserModel): Observable<Object> {
    return this.httpClient.put(`${environment.apiURL}/users/${id}`, data);
  }

  deleteData(id: number): Observable<Object> {
    return this.httpClient.delete(`${environment.apiURL}/users/${id}`);
  }
}
