import { Component, ViewChild } from "@angular/core"; 
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart
} from "ng-apexcharts";
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { FievreModel } from "src/app/shared/models/dashboard-model";
import { DashboardService } from "../dashboard.service";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-fievre-stats',
  templateUrl: './fievre-stats.component.html',
  styleUrls: ['./fievre-stats.component.scss']
})
export class FievreStatsComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
    public chartOptions: Partial<ChartOptions>;

    fievreList: FievreModel[] = [];
    fievreFilterOUI: FievreModel[] = [];
    fievreFilterNON: FievreModel[] = [];
  

    constructor(
        public themeService: CustomizerSettingsService,
        private dashboardService: DashboardService
    ) {
        this.dashboardService.fievre().subscribe({
            next: res => {
                this.fievreList = res;
                this.fievreFilterOUI = this.fievreList.filter(value => value.fievre == 'Oui');
                this.fievreFilterNON = this.fievreList.filter(value => value.fievre == 'Non');  
                this.chartOptions = {
                    series: this.fievreFilterNON.map((item: any) => parseFloat(item.pourcentage)),
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
                    colors: ["#FF8A54"],
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
