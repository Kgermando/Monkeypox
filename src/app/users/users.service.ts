import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './models/user-models';
import { environment } from 'src/environments/environment';
import { RestService } from '../shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends RestService { 

  endpoint: string = `${environment.apiURL}/users`;

  // constructor(private httpClient: HttpClient) { }

  // all(): Observable<UserModel[]> {  
  //   return this.httpClient.get<UserModel[]>(`${environment.apiURL}/users`);  // backticks!, this is a GET request (REST), it interprets the body as a JSON object
  // }

  // create(data: any): Observable<Object> {
  //   return this.httpClient.post(`${environment.apiURL}/users`, data)
  // }

  // get(id: number): Observable<UserModel> {
  //   return this.httpClient.get<UserModel>(`${environment.apiURL}/users/${id}`);
  // }
 

  // delete(id: number): Observable<Object> {
  //   return this.httpClient.delete(`${environment.apiURL}/users/${id}`);
  // }
}
