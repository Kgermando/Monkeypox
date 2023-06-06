import { Component, ViewChild } from "@angular/core"; 
import { 
    ApexChart,
    ChartComponent,
    ApexDataLabels, 
    ApexLegend,
    ApexTooltip,
    ApexNonAxisChartSeries,
    ApexStroke, 
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    stroke: ApexStroke;
    chart: ApexChart;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    labels: any;
    legend: ApexLegend;
    colors: any;
};

@Component({
    selector: 'app-analytics-status',
    templateUrl: './analytics-status.component.html',
    styleUrls: ['./analytics-status.component.scss']
})
export class AnalyticsStatusComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor() {
        this.chartOptions = {
            series: [59.5, 25, 15.5, 35.5],
            chart: {
                height: 315,
                type: "pie"
            },
            stroke: {
                width: 0,
                show: true
            },
            colors: ["#757fef", "#ee368c", "#2db6f5", "#FF7F00"],
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '14px',
                },
                dropShadow: {
                    enabled: false
                }
            },
            tooltip: {
                style: {
                    fontSize: '14px',
                },
                y: {
                    formatter: function(val:any) {
                        return val + "%";
                    }
                }
            },
            legend: {
                offsetY: 5,
                position: "bottom",
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98',
                },
            },
            labels: [
                "Nourisson",
                "Enfant",
                "Adolescent(e)",
                "Adulte"
            ]
        };
    }
}