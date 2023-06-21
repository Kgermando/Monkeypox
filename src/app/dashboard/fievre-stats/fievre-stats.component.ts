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
  selector: 'app-fievre-stats',
  templateUrl: './fievre-stats.component.html',
  styleUrls: ['./fievre-stats.component.scss']
})
export class FievreStatsComponent {
  @ViewChild("chart") chart: ChartComponent | undefined;
    public chartOptions: Partial<ChartOptions>;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [40],
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
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }
}
