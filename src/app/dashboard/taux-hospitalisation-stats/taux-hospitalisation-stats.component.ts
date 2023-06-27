import { Component, ViewChild } from "@angular/core"; 
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart
} from "ng-apexcharts";
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { EteHospitaliseModel } from "src/app/shared/models/dashboard-model";
import { DashboardService } from "../dashboard.service";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-taux-hospitalisation-stats',
  templateUrl: './taux-hospitalisation-stats.component.html',
  styleUrls: ['./taux-hospitalisation-stats.component.scss']
})
export class TauxHospitalisationStatsComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  eteHospitaliseList: EteHospitaliseModel[] = [];
  eteHospitaliseFilterOUI: EteHospitaliseModel[] = [];
  eteHospitaliseFilterNON: EteHospitaliseModel[] = [];


  constructor(
    public themeService: CustomizerSettingsService,
    private dashboardService: DashboardService 
  ) {

    this.dashboardService.eteHospitalise().subscribe({
        next: res => {
            this.eteHospitaliseList = res;
            this.eteHospitaliseFilterOUI = this.eteHospitaliseList.filter(value => value.a_ete_hospitalise == 'Oui');
            this.eteHospitaliseFilterNON = this.eteHospitaliseList.filter(value => value.a_ete_hospitalise == 'Non');  
            this.chartOptions = {
                series: this.eteHospitaliseFilterNON.map((item: any) => parseFloat(item.pourcentage)),
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
                colors: ["#F765A3", "#F765A3", "#F765A3", "#F765A3"],
                labels: ["NON & OUI"]
            };
        }, 
        error: err => {
            console.log(err);
        }
    });
      
  }

  toggleTheme() {
      this.themeService.toggleTheme();
  }

  toggleRTLEnabledTheme() {
      this.themeService.toggleRTLEnabledTheme();
  }

}
