import { Component, ViewChild } from "@angular/core"; 
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart
} from "ng-apexcharts";
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";

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

  constructor(
      public themeService: CustomizerSettingsService
  ) {
      this.chartOptions = {
          series: [32],
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
          labels: ["Under 30 & Over 30"]
      };
  }

  toggleTheme() {
      this.themeService.toggleTheme();
  }

  toggleRTLEnabledTheme() {
      this.themeService.toggleRTLEnabledTheme();
  }

}
