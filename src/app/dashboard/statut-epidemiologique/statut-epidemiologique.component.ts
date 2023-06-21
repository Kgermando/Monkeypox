import { Component, ViewChild } from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexGrid,
    ApexResponsive,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    colors: any;
    legend: ApexLegend;
    yaxis: ApexYAxis;
    fill: ApexFill;
};


@Component({
  selector: 'app-statut-epidemiologique',
  templateUrl: './statut-epidemiologique.component.html',
  styleUrls: ['./statut-epidemiologique.component.scss']
})
export class StatutEpidemiologiqueComponent {
  @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Cas non actif",
                    data: [44, 55, 41, 67, 22, 43]
                },
                {
                    name: "Cas suspect",
                    data: [13, 23, 20, 8, 13, 27]
                },
                {
                    name: "Cas probable",
                    data: [11, 17, 15, 15, 21, 14]
                },
                {
                    name: "Cas confirmé",
                    data: [21, 7, 25, 13, 22, 8]
                },
                {
                    name: "Décès",
                    data: [7, 11, 17, 22, 44, 32]
                }
            ],
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: "bottom",
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            // colors: ["#757fef", "#2db6f5", "#ee368c"],
            xaxis: {
                type: "category",
                categories: [
                    "01/2023",
                    "02/2023",
                    "03/2023",
                    "04/2023",
                    "05/2023",
                    "06/2023"
                ],
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                }
            },
            legend: {
                position: "bottom",
                // offsetY: 40,
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98'
                }
            },
            fill: {
                opacity: 1
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                axisBorder: {
                    show: false
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

}
