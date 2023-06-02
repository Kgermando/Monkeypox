import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';


const routes: Routes = [
  {
    path: 'authentication', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'dashboard', loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'users', loadChildren: () => import('../app/users/users.module').then(m => m.UsersModule),
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
