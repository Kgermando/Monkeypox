import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent,
    canActivate: [authGuard]
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent,
    canActivate: [authGuard]
  },
  {
    path: 'reset-password', component: ResetPasswordComponent,
    canActivate: [authGuard]
  },
  {
    path: 'lock-screen', component: LockScreenComponent,
    canActivate: [authGuard]
  },

  {
    path: 'profile', component: ProfileComponent,
    canActivate: [authGuard]
  },

  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
