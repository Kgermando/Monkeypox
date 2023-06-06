import { Component, ViewChild } from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexResponsive,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ChartComponent,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    title: ApexTitleSubtitle;
    legend: ApexLegend;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: any;
};

@Component({
    selector: 'app-revenue-report',
    templateUrl: './revenue-report.component.html',
    styleUrls: ['./revenue-report.component.scss']
})
export class RevenueReportComponent {

    @ViewChild("chart") chart: ChartComponent | undefined;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Cas non actif",
                    data: [80, 50, 110, 80, 10, 40, 95, 90, 30, 100, 120, 60]
                },
                {
                    name: "Cas suspect",
                    data: [20, 110, 90, 30, 100, 120, 60, 80, 50, 110, 80, 10]
                },
                {
                    name: "Cas probable",
                    data: [35, 100, 90, 30, 50, 150, 60, 80, 50, 85, 30, 41]
                },
                {
                    name: "Cas confirmé",
                    data: [15, 160, 90, 30, 75, 80, 30, 50, 60, 55, 12, 40]
                }
            ],
            chart: {
                height: 520,
                type: "radar",
                toolbar: {
                    show: false,
                }
            },
            xaxis: {
                categories: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"]
            },
            yaxis: {
                show: false
            },
            colors: [
                "#01D758", "#165BAA", "#FF7F00", "#FF0000"
            ],
            legend: {
                offsetY: 0,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            }
        };
    }

}