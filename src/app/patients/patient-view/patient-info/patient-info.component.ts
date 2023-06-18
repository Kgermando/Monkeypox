import { Component, Input } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { PatientModel } from '../../models/patient-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientService } from '../../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent {
  @Input() patient: PatientModel;

  constructor(
    public themeService: CustomizerSettingsService,
    private patientService: PatientService,
    private _snackBar: MatSnackBar,
    private router: Router, 
) {} 

  toggleTheme() {
      this.themeService.toggleTheme();
  }

  delete(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet element ?')) {
      this.patientService.delete(id).subscribe(() => { 
        this.router.navigate(['/layouts/patients/patient-list']);
        this._snackBar.open("Cet élement a été supprimé!", "ok");
      });
    }
  }
}
