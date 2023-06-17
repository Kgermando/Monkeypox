import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

import { AnalyticsActivityComponent } from './analytics-activity/analytics-activity.component';
import { AnalyticsAudienceOverviewComponent } from './analytics-audience-overview/analytics-audience-overview.component';
import { AnalyticsGenderComponent } from './analytics-gender/analytics-gender.component';
import { AnalyticsLanguageComponent } from './analytics-language/analytics-language.component';
import { AnalyticsStatusComponent } from './analytics-status/analytics-status.component';
import { AnalyticsStatsComponent } from './analytics-stats/analytics-stats.component';
import { AnalyticsTotalRevenueComponent } from './analytics-total-revenue/analytics-total-revenue.component';
import { BrowserUsedTrafficReportsComponent } from './browser-used-traffic-reports/browser-used-traffic-reports.component';
import { NewVsReturingComponent } from './new-vs-returing/new-vs-returing.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';
import { SalesAnalyticsComponent } from './sales-analytics/sales-analytics.component';
import { SessionsByCountriesComponent } from './sessions-by-countries/sessions-by-countries.component';
import { SessionsDeviceComponent } from './sessions-device/sessions-device.component';
import { TerminalsComponent } from './terminals/terminals.component';
import { TotalTransactionsComponent } from './total-transactions/total-transactions.component';
import { VisitorsAgeComponent } from './visitors-age/visitors-age.component';
import { WelcomeDashboardComponent } from './welcome-dashboard/welcome-dashboard.component';

 

@NgModule({
  declarations: [
    DashboardComponent,

    AnalyticsActivityComponent,
    AnalyticsAudienceOverviewComponent,
    AnalyticsGenderComponent,
    AnalyticsLanguageComponent, 
    AnalyticsStatsComponent,
    AnalyticsStatusComponent,
    AnalyticsTotalRevenueComponent,
    BrowserUsedTrafficReportsComponent,
    NewVsReturingComponent,
    RevenueReportComponent,
    SalesAnalyticsComponent,
    SessionsByCountriesComponent,
    SessionsDeviceComponent,
    TerminalsComponent,
    TotalTransactionsComponent,
    VisitorsAgeComponent,
    WelcomeDashboardComponent,
    
    
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
