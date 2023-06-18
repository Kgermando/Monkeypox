import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { PatientService } from '../patient.service';
import { PatientModel } from '../models/patient-model';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.scss']
})
export class PatientViewComponent implements OnInit {

  isLoading = false;

  patient: PatientModel;

  constructor(
    public themeService: CustomizerSettingsService,
    private route: ActivatedRoute,
    private patientService: PatientService) {}


    ngOnInit(): void {
      this.isLoading = true;
      let id = this.route.snapshot.paramMap.get('id');
      this.patientService.get(Number(id)).subscribe(res => {
        this.patient = res;
        this.isLoading = false;
  
        console.log(this.patient);
        console.log(id);
      });
    }
  
    toggleTheme() {
      this.themeService.toggleTheme();
    }
  
}
