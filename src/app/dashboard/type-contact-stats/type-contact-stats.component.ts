import { Component, ViewChild } from "@angular/core"; 
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart
} from "ng-apexcharts";
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { TypeContactModel } from "src/app/shared/models/dashboard-model";
import { DashboardService } from "../dashboard.service";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-type-contact-stats',
  templateUrl: './type-contact-stats.component.html',
  styleUrls: ['./type-contact-stats.component.scss']
})
export class TypeContactStatsComponent {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  typeContactList: TypeContactModel[] = [];
  typeContactFilterTouche: TypeContactModel[] = [];
  typeContactFilterVoyage: TypeContactModel[] = [];


  constructor(
      public themeService: CustomizerSettingsService,
      private dashboardService: DashboardService
  ) {

    this.dashboardService.typeContact().subscribe({
        next: res => {
            this.typeContactList = res;
            this.typeContactFilterTouche = this.typeContactList.filter(value => value.type_contact == 'A touché animal domestique');
            this.typeContactFilterVoyage = this.typeContactList.filter(value => value.type_contact == 'A voyagé en dehors de chez lui');  
            this.chartOptions = {
                series: this.typeContactFilterTouche.map((item: any) => parseFloat(item.pourcentage)),
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
                colors: ["#2DB6F5"],
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
