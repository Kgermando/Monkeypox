import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalErrorComponent } from './shared/components/internal-error/internal-error.component';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: 'authentication', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'dashboard', loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [authGuard]
  },

  {
    path: 'users', loadChildren: () => import('../app/users/users.module').then(m => m.UsersModule),
    canActivate: [authGuard]
  },

  {
    path: 'reglages', loadChildren: () => import('../app/reglage/reglage.module').then(m => m.ReglageModule),
    canActivate: [authGuard]
  },

  {
    path: 'patients', loadChildren: () => import('../app/patients/patients.module').then(m => m.PatientsModule),
    canActivate: [authGuard]
  },

  {
    path: 'epidemies', loadChildren: () => import('../app/epidemies/epidemies.module').then(m => m.EpidemiesModule),
    canActivate: [authGuard]
  },



  {path: 'error-500', component: InternalErrorComponent },
  { path: '', redirectTo: 'authentication', pathMatch: 'full'},
  { path: '**', redirectTo: 'authentication', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
