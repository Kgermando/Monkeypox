import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-enregistrements-stats',
  templateUrl: './enregistrements-stats.component.html',
  styleUrls: ['./enregistrements-stats.component.scss']
})
export class EnregistrementsStatsComponent implements OnInit {

  fichesCount: number = 0;
  patientsCount: number = 0;
  usersCount: number = 0; 

  constructor(
      public themeService: CustomizerSettingsService,
      private dashboardService: DashboardService
  ) {}


  ngOnInit(): void {
    this.dashboardService.statsRecordFiche().subscribe(res => {
      this.fichesCount = res[0]['count'];
    });
    this.dashboardService.patientCount().subscribe(res => {
      this.patientsCount = res[0]['count'];
    }); 
    this.dashboardService.statsRecordUser().subscribe(res => {
      this.usersCount = res[0]['count'];

      console.log(this.usersCount);
    });
  }




  toggleTheme() {
      this.themeService.toggleTheme();
  }
}
