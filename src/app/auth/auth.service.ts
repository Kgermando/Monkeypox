import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.apiURL}/login`, data, {
        withCredentials: true
    });
  }


  register(data: any): Observable<any> {
    return this.http.post(`${environment.apiURL}/register`, data); 
  }


  user(): Observable<any> {
    return this.http.get(`${environment.apiURL}/user`, {
        withCredentials: true
    }); 
  }
}
