import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  endpoint: string = `${environment.apiURL}/dashboard`;

  constructor(protected http: HttpClient) { }

  patientCount(): Observable<any> {
    return this.http.get(`${this.endpoint}/patient-count`);
  }

  suspectCount(): Observable<any> {
    return this.http.get(`${this.endpoint}/suspect-count`);
  }

  suspectCountPourcent(): Observable<any> {
    return this.http.get(`${this.endpoint}/suspect-count-pourcent`);
  }

  decesCount(): Observable<any> {
    return this.http.get(`${this.endpoint}/deces-count`);
  }

  decesCountPourcent(): Observable<any> {
    return this.http.get(`${this.endpoint}/deces-count-pourcent`);
  }

  trancheAge(): Observable<any> {
    return this.http.get(`${this.endpoint}/tranche-age`);
  }

  statsRecordFiche(): Observable<any> {
    return this.http.get(`${this.endpoint}/stats-record-fiche`);
  }

  statsRecordUser(): Observable<any> {
    return this.http.get(`${this.endpoint}/stats-record-user`);
  }

  nbrPatientSexe(): Observable<any> {
    return this.http.get(`${this.endpoint}/nbre-patient-sexe`);
  }

  eteContactPatient(): Observable<any> {
    return this.http.get(`${this.endpoint}/a-ete-contact-patient`);
  }

  eteHospitalise(): Observable<any> {
    return this.http.get(`${this.endpoint}/a-ete-hospitalise`);
  }

  typeContact(): Observable<any> {
    return this.http.get(`${this.endpoint}/type-contact`);
  }

  fievre(): Observable<any> {
    return this.http.get(`${this.endpoint}/fievre`);
  }

  eruptionCutanee(): Observable<any> {
    return this.http.get(`${this.endpoint}/eruption-cutanee`);
  }

  decesProvince(): Observable<any> {
    return this.http.get(`${this.endpoint}/deces-province`);
  }

  // get(id: number): Observable<any> {
  //   return this.http.get(`${this.endpoint}/${id}`);
  // }
}
