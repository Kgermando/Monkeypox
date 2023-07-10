import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { QuillModule } from 'ngx-quill';
import { HeaderComponent } from './common/header/header.component';
import { CustomizerSettingsComponent } from './common/customizer-settings/customizer-settings.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
 
import { DatePipe } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LayoutsComponent } from './layouts/layouts.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeDashboardComponent } from './dashboard/welcome-dashboard/welcome-dashboard.component';
import { TrancheAgeComponent } from './dashboard/tranche-age/tranche-age.component';
import { PatientStatsComponent } from './dashboard/patient-stats/patient-stats.component';
import { StatutStatsComponent } from './dashboard/statut-stats/statut-stats.component';
import { StatutEpidemiologiqueComponent } from './dashboard/statut-epidemiologique/statut-epidemiologique.component';
import { EvolutionCasStatsComponent } from './dashboard/evolution-cas-stats/evolution-cas-stats.component';
import { ProvinceStatsComponent } from './dashboard/province-stats/province-stats.component'; 
import { EnregistrementsStatsComponent } from './dashboard/enregistrements-stats/enregistrements-stats.component';
import { SexeStatsComponent } from './dashboard/sexe-stats/sexe-stats.component';
import { EnContactStatsComponent } from './dashboard/en-contact-stats/en-contact-stats.component';
import { TauxHospitalisationStatsComponent } from './dashboard/taux-hospitalisation-stats/taux-hospitalisation-stats.component';
import { TypeContactStatsComponent } from './dashboard/type-contact-stats/type-contact-stats.component';
import { FievreStatsComponent } from './dashboard/fievre-stats/fievre-stats.component';
import { EruptionCutaneeComponent } from './dashboard/eruption-cutanee/eruption-cutanee.component';
import { LockScreenComponent } from './auth/lock-screen/lock-screen.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientAddComponent } from './patients/patient-add/patient-add.component';
import { PatientViewComponent } from './patients/patient-view/patient-view.component';
import { PatientInfoComponent } from './patients/patient-view/patient-info/patient-info.component';
import { PatientFicheComponent } from './patients/patient-view/patient-fiche/patient-fiche.component';
import { PatientEditComponent } from './patients/patient-edit/patient-edit.component';
import { EpidemieListComponent } from './epidemies/epidemie-list/epidemie-list.component';
import { EpidemieViewComponent } from './epidemies/epidemie-view/epidemie-view.component';
import { EpidemieEditComponent } from './epidemies/epidemie-edit/epidemie-edit.component';
import { EpidemieAddComponent } from './epidemies/epidemie-add/epidemie-add.component';
import { StructureViewComponent } from './reglage/structures/structure-view/structure-view.component';
import { ZoneSanteViewComponent } from './reglage/zone-santes/zone-sante-view/zone-sante-view.component';
import { StructureListComponent } from './reglage/structures/structure-list/structure-list.component';
import { StructureAddComponent } from './reglage/structures/structure-add/structure-add.component';
import { ZoneSanteListComponent } from './reglage/zone-santes/zone-sante-list/zone-sante-list.component';
import { ZoneSanteAddComponent } from './reglage/zone-santes/zone-sante-add/zone-sante-add.component';
import { ZoneSanteEditComponent } from './reglage/zone-santes/zone-sante-edit/zone-sante-edit.component';
import { CampaignListComponent } from './reglage/campaigns/campaign-list/campaign-list.component';
import { CampaignEditComponent } from './reglage/campaigns/campaign-edit/campaign-edit.component';
import { CampaignViewComponent } from './reglage/campaigns/campaign-view/campaign-view.component';
import { CampaignAddComponent } from './reglage/campaigns/campaign-add/campaign-add.component';
import { StructureEditComponent } from './reglage/structures/structure-edit/structure-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserViewComponent } from './users/user-view/user-view.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserInfoComponent } from './users/user-view/user-info/user-info.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ProfileActivityComponent } from './users/profile/profile-activity/profile-activity.component';
import { ProfileInfoComponent } from './users/profile/profile-info/profile-info.component';
import { ProfileComponent } from './users/profile/profile.component';
import { UserActivityComponent } from './users/user-view/user-activity/user-activity.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomizerSettingsComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    LayoutsComponent, 

    // Dashboard
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
    FievreStatsComponent, 
    EruptionCutaneeComponent, 

    // Auth
    AuthComponent,
    LockScreenComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,

    // Patient
    PatientListComponent,
    PatientAddComponent,
    PatientEditComponent,
    PatientViewComponent,
    PatientInfoComponent,
    PatientFicheComponent,

    // Epidemie
    EpidemieListComponent,
    EpidemieAddComponent,
    EpidemieViewComponent,
    EpidemieEditComponent,

    // Reglages
    StructureListComponent,
    StructureAddComponent,
    StructureEditComponent,
    ZoneSanteListComponent,
    ZoneSanteAddComponent,
    ZoneSanteEditComponent,
    CampaignListComponent,
    CampaignAddComponent,
    CampaignEditComponent,
    CampaignViewComponent,
    ZoneSanteViewComponent,
    StructureViewComponent,

    // Users
    UserListComponent,
    UserViewComponent,
    UserEditComponent,
    UserAddComponent,
    UserActivityComponent,
    UserInfoComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ProfileActivityComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,  
    

    NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
    }),
    QuillModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    DatePipe,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
