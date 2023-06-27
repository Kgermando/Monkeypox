import { Component, ViewChild } from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexGrid,
    ApexXAxis,
    ApexFill,
    ApexTooltip
} from "ng-apexcharts";
import { DecesProvinceModel } from "src/app/shared/models/dashboard-model";
import { DashboardService } from "../dashboard.service";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    colors: any;
};

@Component({
  selector: 'app-province-stats',
  templateUrl: './province-stats.component.html',
  styleUrls: ['./province-stats.component.scss']
})
export class ProvinceStatsComponent {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  decesProvinceList: DecesProvinceModel[] = [];

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.decesProvince().subscribe({
        next: res => {
            this.decesProvinceList = res;  
            this.chartOptions = {
                series: [
                    {
                        name: "Total cas confirmé:",
                        data: this.decesProvinceList.map((item: any) => parseFloat(item.count)),
                    }
                ],
                chart: {
                    type: "bar",
                    height: 480,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: [
                    "#757FEF"
                ],
                stroke: {
                    width: 0,
                    show: true,
                    colors: ["transparent"]
                },
                xaxis: {
                    categories: this.decesProvinceList.map((item: any) => item.province),
                    // categories: [
                    //     "Bas-Uele",	
                    //     "Équateur",	
                    //     "Haut-Katanga",	
                    //     "Haut-Lomami",	
                    //     "Haut-Uele",
                    //     "Ituri",
                    //     "Bunia",
                    //     "Kasaï",
                    //     "Tshikapa",	
                    //     "Kasaï central"
                    // ],
                    labels: {
                        show: true,
                        style: {
                            colors: "#a9a9c8",
                            fontSize: "14px"
                        },
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: "#a9a9c8",
                            fontSize: "14px"
                        }
                    },
                    axisBorder: {
                        show: false
                    }
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function(val) {
                            return val + " patients";
                        }
                    }
                },
                legend: {
                    offsetY: 5,
                    fontSize: "14px",
                    position: "bottom",
                    horizontalAlign: "center",
                    labels: {
                        colors: '#5B5B98'
                    }
                },
                grid: {
                    show: true,
                    borderColor: "#EDEFF5",
                    strokeDashArray: 5
                }
            };
        },
        error: err => {
            console.log(err);
        }
    });

      
  }
}
