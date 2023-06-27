import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { DashboardService } from '../dashboard.service';
import { PatientCountPourcentModel } from 'src/app/shared/models/dashboard-model';



@Component({
  selector: 'app-patient-stats',
  templateUrl: './patient-stats.component.html',
  styleUrls: ['./patient-stats.component.scss']
})
export class PatientStatsComponent implements OnInit {
 

  patientCount: number = 0;
  suspectCount: number = 0;
  decesCount: number = 0;

  suspectCountList: PatientCountPourcentModel[] = [];
  decesCountList: PatientCountPourcentModel[] = []; 



  constructor(
    public themeService: CustomizerSettingsService,
    private dashboardService: DashboardService
) {}

  ngOnInit(): void {
    this.dashboardService.patientCount().subscribe(res => {
      this.patientCount = res[0]['count'];
    });
    this.dashboardService.suspectCount().subscribe(res => {
      this.suspectCount = res[0]['count'];
    });
    this.dashboardService.decesCount().subscribe(res => {
      this.decesCount = res[0]['count'];
    });
    this.dashboardService.suspectCountPourcent().subscribe(res => {
      this.suspectCountList = res;


    }); 
    this.dashboardService.decesCountPourcent().subscribe(res => {
      this.decesCountList = res;

    });
  }
 
  toggleRTLEnabledTheme() {
      this.themeService.toggleRTLEnabledTheme();
  }
}
