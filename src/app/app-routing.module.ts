import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalErrorComponent } from './shared/components/internal-error/internal-error.component';
import { authGuard } from './guard/auth.guard';
import { LayoutsComponent } from './layouts/layouts.component';


const routes: Routes = [
  {
    path: 'authentication', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule),
  },

  { 
    path: 'layouts', component: LayoutsComponent, children: [
      {
        path: 'dashboard', loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
    
      {
        path: 'users', loadChildren: () => import('../app/users/users.module').then(m => m.UsersModule),
      },
    
      {
        path: 'reglages', loadChildren: () => import('../app/reglage/reglage.module').then(m => m.ReglageModule),
      },
    
      {
        path: 'patients', loadChildren: () => import('../app/patients/patients.module').then(m => m.PatientsModule),
      },
    
      {
        path: 'epidemies', loadChildren: () => import('../app/epidemies/epidemies.module').then(m => m.EpidemiesModule),
      },

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
