import { Component, ViewChild } from "@angular/core"; 
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart
} from "ng-apexcharts";
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { EteContactPatientModel } from "src/app/shared/models/dashboard-model";
import { DashboardService } from "../dashboard.service";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-en-contact-stats',
  templateUrl: './en-contact-stats.component.html',
  styleUrls: ['./en-contact-stats.component.scss']
})
export class EnContactStatsComponent {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  eteContactPatientList: EteContactPatientModel[] = [];
  eteContactPatientFilterOUI: EteContactPatientModel[] = [];
  eteContactPatientFilterNON: EteContactPatientModel[] = [];


  constructor(
      public themeService: CustomizerSettingsService,
      private dashboardService: DashboardService 
  ) {

    this.dashboardService.eteContactPatient().subscribe({
        next: res => {
            this.eteContactPatientList = res;
            this.eteContactPatientFilterOUI = this.eteContactPatientList.filter(value => value.a_ete_contact_patient == 'Oui');
            this.eteContactPatientFilterNON = this.eteContactPatientList.filter(value => value.a_ete_contact_patient == 'Non');  
        
            this.chartOptions = {
                series: this.eteContactPatientFilterOUI.map((item: any) => parseFloat(item.pourcentage)),
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
                colors: ["#757FEF"],
                labels: ["OUI vs NON"]
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
