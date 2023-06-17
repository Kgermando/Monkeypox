import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientViewComponent } from './patient-view/patient-view.component';
import { SharedModule } from '../shared/shared.module';
import { PatientInfoComponent } from './patient-view/patient-info/patient-info.component';
import { PatientFicheComponent } from './patient-view/patient-fiche/patient-fiche.component';


@NgModule({
  declarations: [
    PatientListComponent,
    PatientAddComponent,
    PatientEditComponent,
    PatientViewComponent,
    PatientInfoComponent,
    PatientFicheComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,

    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class PatientsModule { }
