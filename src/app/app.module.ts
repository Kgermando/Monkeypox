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

import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DatePipe } from '@angular/common';
import { ReglageModule } from './reglage/reglage.module';
import { PatientsModule } from './patients/patients.module';
import { EpidemiesModule } from './epidemies/epidemies.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UsersModule } from './users/users.module';
import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomizerSettingsComponent,
    FooterComponent,
    SidebarComponent,
    NotFoundComponent,
    LayoutsComponent, 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
    AuthModule,
    UsersModule,
    DashboardModule,
    ReglageModule,
    PatientsModule,
    EpidemiesModule,
    

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
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
