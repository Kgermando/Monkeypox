import { Component, ViewChild } from "@angular/core"; 
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart
} from "ng-apexcharts";
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { EruptionCutaneeModel } from "src/app/shared/models/dashboard-model";
import { DashboardService } from "../dashboard.service";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
};


@Component({
  selector: 'app-eruption-cutanee',
  templateUrl: './eruption-cutanee.component.html',
  styleUrls: ['./eruption-cutanee.component.scss']
})
export class EruptionCutaneeComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
    public chartOptions: Partial<ChartOptions>;

    eruptionCutaneeList: EruptionCutaneeModel[] = [];
    eruptionCutaneeeFilterOUI: EruptionCutaneeModel[] = [];
    eruptionCutaneeFilterNON: EruptionCutaneeModel[] = [];
  

    constructor(
        public themeService: CustomizerSettingsService,
        private dashboardService: DashboardService
    ) {

        this.dashboardService.eruptionCutanee().subscribe({
            next: res => {
                this.eruptionCutaneeList = res;
                this.eruptionCutaneeeFilterOUI = this.eruptionCutaneeList.filter(value => value.eruption_cutanee == 'Oui');
                this.eruptionCutaneeFilterNON = this.eruptionCutaneeList.filter(value => value.eruption_cutanee == 'Non');  
                this.chartOptions = {
                    series: this.eruptionCutaneeFilterNON.map((item: any) => parseFloat(item.pourcentage)),
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
                    colors: ["#F9B71F"],
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
