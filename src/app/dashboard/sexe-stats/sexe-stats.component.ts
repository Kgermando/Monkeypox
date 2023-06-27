import { Component, ViewChild } from "@angular/core"; 
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart
} from "ng-apexcharts";
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { DashboardService } from "../dashboard.service";
import { NbrePatientSexeModel } from "src/app/shared/models/dashboard-model";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-sexe-stats',
  templateUrl: './sexe-stats.component.html',
  styleUrls: ['./sexe-stats.component.scss']
})
export class SexeStatsComponent { 

   nbrePatientSexeList: NbrePatientSexeModel[] = [];
   nbrePatientSexeFilter: NbrePatientSexeModel[] = [];
   nbrePatientSexeFilterH: NbrePatientSexeModel[] = [];

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor(
      public themeService: CustomizerSettingsService,
      private dashboardService: DashboardService  
  ) {

    this.dashboardService.nbrPatientSexe().subscribe({
        next: res => {
            this.nbrePatientSexeList = res;
            this.nbrePatientSexeFilter = this.nbrePatientSexeList.filter(value => value.sexe == 'Femme');
            this.nbrePatientSexeFilterH = this.nbrePatientSexeList.filter(value => value.sexe == 'Homme');
            this.chartOptions = {
                series: this.nbrePatientSexeFilter.map((item: any) => parseFloat(item.pourcentage)),
                chart: {
                    height: 230,
                    type: "radialBar"
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: "50%"
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: 5,
                                fontSize: "15px",
                                fontWeight: "700",
                            }
                        }
                    }
                },
                colors: ["#00B69B"],
                labels: ["Homme & Femme"]
            };
        },
        error: err => {
            console.log(err);
        }
    })



      
  }

  toggleTheme() {
      this.themeService.toggleTheme();
  }

  toggleRTLEnabledTheme() {
      this.themeService.toggleRTLEnabledTheme();
  }
}
