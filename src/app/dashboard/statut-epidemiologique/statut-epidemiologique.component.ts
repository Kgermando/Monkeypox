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
import { DashboardService } from "../dashboard.service";
import { StatutEpidemiologiqueModel } from "src/app/shared/models/dashboard-model";

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

    statutEpidemiologiqueList: StatutEpidemiologiqueModel[] = [];
    statutEpidemiologiqueFilterNonActif: StatutEpidemiologiqueModel[] = [];
    statutEpidemiologiqueFilterSuspect: StatutEpidemiologiqueModel[] = [];
    statutEpidemiologiqueFilterProbable: StatutEpidemiologiqueModel[] = [];
    statutEpidemiologiqueFilterConfirme: StatutEpidemiologiqueModel[] = [];
    statutEpidemiologiqueFilterDeces: StatutEpidemiologiqueModel[] = [];

    constructor(private dashboardService: DashboardService) {
        this.dashboardService.statutEpidemiologique().subscribe(
            res => {
                this.statutEpidemiologiqueList = res;
                this.statutEpidemiologiqueFilterNonActif = this.statutEpidemiologiqueList.filter(value => value.statut == 'Cas non actif');
                this.statutEpidemiologiqueFilterSuspect = this.statutEpidemiologiqueList.filter(value => value.statut == 'Cas suspect');
                this.statutEpidemiologiqueFilterProbable = this.statutEpidemiologiqueList.filter(value => value.statut == 'Cas probable');
                this.statutEpidemiologiqueFilterConfirme = this.statutEpidemiologiqueList.filter(value => value.statut == 'Cas confirmé');
                this.statutEpidemiologiqueFilterDeces = this.statutEpidemiologiqueList.filter(value => value.statut == 'Décès');
                this.chartOptions = {
                    series: [
                        {
                            name: "Cas non actif",
                            data: this.statutEpidemiologiqueFilterNonActif.map((item: any) => item.count),
                        },
                        {
                            name: "Cas suspect",
                            data: this.statutEpidemiologiqueFilterSuspect.map((item: any) => item.count),
                        },
                        {
                            name: "Cas probable",
                            data: this.statutEpidemiologiqueFilterProbable.map((item: any) => item.count),
                        },
                        {
                            name: "Cas confirmé",
                            data: this.statutEpidemiologiqueFilterConfirme.map((item: any) => item.count),
                        },
                        {
                            name: "Décès",
                            data: this.statutEpidemiologiqueFilterDeces.map((item: any) => item.count),
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
                        categories: this.statutEpidemiologiqueList.map((item: any) => `${item.month}/2023`),
                        // [
                        //     "01/2023",
                        //     "02/2023",
                        //     "03/2023",
                        //     "04/2023",
                        //     "05/2023",
                        //     "06/2023"
                        // ],
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
        );
        
    }

}
