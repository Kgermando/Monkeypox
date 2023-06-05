import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { PatientViewComponent } from './patient-view/patient-view.component';

const routes: Routes = [
  { path: 'patient-list', component: PatientListComponent },
  { path: 'patient-add', component: PatientAddComponent },
  { path: 'patient-edit/:id', component: PatientEditComponent },
  { path: 'patient-view/:id', component: PatientViewComponent },

  { path: '', redirectTo: 'patient-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
