import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalErrorComponent } from './shared/components/internal-error/internal-error.component';
import { authGuard } from './guard/auth.guard';
import { LayoutsComponent } from './layouts/layouts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { LockScreenComponent } from './auth/lock-screen/lock-screen.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientAddComponent } from './patients/patient-add/patient-add.component';
import { PatientEditComponent } from './patients/patient-edit/patient-edit.component';
import { PatientViewComponent } from './patients/patient-view/patient-view.component';
import { EpidemieListComponent } from './epidemies/epidemie-list/epidemie-list.component';
import { EpidemieAddComponent } from './epidemies/epidemie-add/epidemie-add.component';
import { EpidemieViewComponent } from './epidemies/epidemie-view/epidemie-view.component';
import { EpidemieEditComponent } from './epidemies/epidemie-edit/epidemie-edit.component';
import { CampaignViewComponent } from './reglage/campaigns/campaign-view/campaign-view.component';
import { CampaignListComponent } from './reglage/campaigns/campaign-list/campaign-list.component';
import { CampaignEditComponent } from './reglage/campaigns/campaign-edit/campaign-edit.component';
import { ZoneSanteEditComponent } from './reglage/zone-santes/zone-sante-edit/zone-sante-edit.component';
import { ZoneSanteViewComponent } from './reglage/zone-santes/zone-sante-view/zone-sante-view.component';
import { ZoneSanteListComponent } from './reglage/zone-santes/zone-sante-list/zone-sante-list.component';
import { ZoneSanteAddComponent } from './reglage/zone-santes/zone-sante-add/zone-sante-add.component';
import { StructureViewComponent } from './reglage/structures/structure-view/structure-view.component';
import { StructureEditComponent } from './reglage/structures/structure-edit/structure-edit.component';
import { StructureAddComponent } from './reglage/structures/structure-add/structure-add.component';
import { StructureListComponent } from './reglage/structures/structure-list/structure-list.component';
import { CampaignAddComponent } from './reglage/campaigns/campaign-add/campaign-add.component';
import { ProfileComponent } from './users/profile/profile.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserViewComponent } from './users/user-view/user-view.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';




const routes: Routes = [
  {
    path: 'authentication', component: AuthComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'lock-screen', component: LockScreenComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
    ]
  },

  { 
    path: 'layouts', component: LayoutsComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      
      { path: 'patients/patient-list', component: PatientListComponent },
      { path: 'patients/patient-add', component: PatientAddComponent },
      { path: 'patients/:id/patient-edit', component: PatientEditComponent },
      { path: 'patients/:id/patient-view', component: PatientViewComponent },

      { path: 'epidemies/epidemie-list', component: EpidemieListComponent },
      { path: 'epidemies/epidemie-add', component: EpidemieAddComponent },
      { path: 'epidemies/:id/epidemie-edit', component: EpidemieEditComponent },
      { path: 'epidemies/:id/epidemie-view', component: EpidemieViewComponent },

      { path: 'reglages/campaign-list', component: CampaignListComponent }, 
      { path: 'reglages/campaign-add', component: CampaignAddComponent },
      { path: 'reglages/:id/campaign-edit', component: CampaignEditComponent },
      { path: 'reglages/:id/campaign-view', component: CampaignViewComponent }, 
      { path: 'reglages/structure-list', component: StructureListComponent },
      { path: 'reglages/structure-add', component: StructureAddComponent },
      { path: 'reglages/:id/structure-edit', component: StructureEditComponent },
      { path: 'reglages/:id/structure-view', component: StructureViewComponent }, 
      { path: 'reglages/zone-sante-list', component: ZoneSanteListComponent },
      { path: 'reglages/zone-sante-add', component: ZoneSanteAddComponent },
      { path: 'reglages/:id/zone-sante-edit', component: ZoneSanteEditComponent },
      { path: 'reglages/:id/zone-sante-view', component: ZoneSanteViewComponent },

      { path: 'users/profile', component: ProfileComponent, },
      { path: 'users/user-list', component: UserListComponent },
      { path: 'users/user-add', component: UserAddComponent },
      { path: 'users/:id/view', component: UserViewComponent },
      { path: 'users/:id/edit', component: UserEditComponent },
       
      {path: 'error-500', component: InternalErrorComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    ],
    canActivate: [authGuard]
  }, 

  { path: '', redirectTo: 'authentication', pathMatch: 'full'},
  { path: '**', redirectTo: 'authentication', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
