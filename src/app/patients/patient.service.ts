import { Injectable } from '@angular/core'; 
import { environment } from 'src/environments/environment';  
import { RestService } from '../shared/services/rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends RestService {
  endpoint: string = `${environment.apiURL}/patients`;

  patientCount(): Observable<any> {
    return this.http.get(`${this.endpoint}/patient-count`);
  }
 
}
