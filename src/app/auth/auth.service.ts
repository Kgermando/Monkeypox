import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../users/models/user-models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.apiURL}/auth/login`, data, {
        withCredentials: true
    });
  }


  register(data: any): Observable<any> {
    return this.http.post(`${environment.apiURL}/auth/register`, data);
  }


  user(id: number): Observable<any> {
    return this.http.get(`${environment.apiURL}/auth/${id}`, {
        withCredentials: true
    });
  }

  isLoggIn() {
    this.router.navigate(['authentication/login'])
  }

  logout(): Observable<any> {
    return this.http.get(`${environment.apiURL}/auth/logout`, {
        withCredentials: true
    });
  }

  updatePassword(id: number, data: UserModel): Observable<Object> {
    return this.http.put(`${environment.apiURL}/users/password/${id}`, data);
  }

  updateInfo(data: any): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.apiURL}/users/info`, data);
  }
 
}
