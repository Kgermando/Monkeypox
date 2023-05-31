import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { AuthRoutingModule } from './auth-routing.module';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component'; 
import { ActivityTimelineComponent } from './profile/activity-timeline/activity-timeline.component';
import { OverviewComponent } from './profile/overview/overview.component';
import { PersonalInfoComponent } from './profile/personal-info/personal-info.component';
import { StatsComponent } from './profile/stats/stats.component';
import { TasksComponent } from './profile/tasks/tasks.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    LockScreenComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent, 
    ActivityTimelineComponent,
    OverviewComponent,
    PersonalInfoComponent,
    StatsComponent,
    TasksComponent
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    SharedModule,  
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
