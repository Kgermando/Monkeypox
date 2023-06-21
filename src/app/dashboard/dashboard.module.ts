import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
 
import { WelcomeDashboardComponent } from './welcome-dashboard/welcome-dashboard.component';
import { TrancheAgeComponent } from './tranche-age/tranche-age.component';
import { PatientStatsComponent } from './patient-stats/patient-stats.component';
import { StatutStatsComponent } from './statut-stats/statut-stats.component';
import { StatutEpidemiologiqueComponent } from './statut-epidemiologique/statut-epidemiologique.component';
import { EvolutionCasStatsComponent } from './evolution-cas-stats/evolution-cas-stats.component';
import { ProvinceStatsComponent } from './province-stats/province-stats.component'; 
import { EnregistrementsStatsComponent } from './enregistrements-stats/enregistrements-stats.component';
import { SexeStatsComponent } from './sexe-stats/sexe-stats.component';
import { EnContactStatsComponent } from './en-contact-stats/en-contact-stats.component';
import { TauxHospitalisationStatsComponent } from './taux-hospitalisation-stats/taux-hospitalisation-stats.component';
import { TypeContactStatsComponent } from './type-contact-stats/type-contact-stats.component';
import { FievreStatsComponent } from './fievre-stats/fievre-stats.component';
import { EruptionCutaneeComponent } from './eruption-cutanee/eruption-cutanee.component';

 

@NgModule({
  declarations: [
    DashboardComponent, 
    WelcomeDashboardComponent,
    TrancheAgeComponent,
    PatientStatsComponent,
    StatutStatsComponent,
    StatutEpidemiologiqueComponent,
    EvolutionCasStatsComponent,
    ProvinceStatsComponent, 
    EnregistrementsStatsComponent, 
    SexeStatsComponent, 
    EnContactStatsComponent, 
    TauxHospitalisationStatsComponent, 
    TypeContactStatsComponent, 
    FievreStatsComponent, EruptionCutaneeComponent, 
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    SharedModule
  ],
  providers: [
    DatePipe
  ]
})
export class DashboardModule { }
