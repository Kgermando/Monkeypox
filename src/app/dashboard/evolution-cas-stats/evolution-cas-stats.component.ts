import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexTooltip,
    ApexGrid,
    ApexXAxis,
    ApexLegend,
    ApexDataLabels,
    ApexTitleSubtitle,
    ApexYAxis
} from "ng-apexcharts";
import { DashboardService } from "../dashboard.service";
import { EvolutionCasModel } from "src/app/shared/models/dashboard-model";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    markers: any; //ApexMarkers;
    stroke: any; //ApexStroke;
    yaxis: ApexYAxis | ApexYAxis[];
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    title: ApexTitleSubtitle;
    legend: ApexLegend;
    fill: ApexFill;
    tooltip: ApexTooltip;
};


@Component({
  selector: 'app-evolution-cas-stats',
  templateUrl: './evolution-cas-stats.component.html',
  styleUrls: ['./evolution-cas-stats.component.scss']
})
export class EvolutionCasStatsComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  evolutionCasList: EvolutionCasModel[] = [];
  statutEpidemiologiqueFilterSuspect: EvolutionCasModel[] = [];
  statutEpidemiologiqueFilterNonActif: EvolutionCasModel[] = [];
  statutEpidemiologiqueFilterConfirme: EvolutionCasModel[] = [];


  constructor(private dashboardService: DashboardService) {
    this.dashboardService.evolutionCas().subscribe(
        res => {
            this.evolutionCasList = res;
                this.statutEpidemiologiqueFilterNonActif = this.evolutionCasList.filter(value => value.statut == 'Cas non actif');
                this.statutEpidemiologiqueFilterSuspect = this.evolutionCasList.filter(value => value.statut == 'Cas suspect'); 
                this.statutEpidemiologiqueFilterConfirme = this.evolutionCasList.filter(value => value.statut == 'Cas confirmé'); 
        
                this.chartOptions = {
                    series: [
                        {
                            name: "Cas suspect",
                            type: "column",
                            data: this.statutEpidemiologiqueFilterSuspect.map((item: EvolutionCasModel) => item.count),
                        },
                        {
                            name: "Cas non actif",
                            type: "column",
                            data: this.statutEpidemiologiqueFilterNonActif.map((item: EvolutionCasModel) => item.count),
                        },
                        {
                            name: "Cas confirmé",
                            type: "line",
                            data: this.statutEpidemiologiqueFilterConfirme.map((item: EvolutionCasModel) => item.count),
                        }
                    ],
                    chart: {
                        height: 350,
                        type: "line",
                        stacked: false
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        width: [1, 1, 4]
                    },
                    title: {
                        text: "",
                        align: "left",
                        offsetX: 110
                    },
                    xaxis: {
                        categories: this.evolutionCasList.map((item: EvolutionCasModel) => parseFloat(item.year)),
                        // [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                        labels: {
                            style: {
                                colors: "#a9a9c8",
                                fontSize: "14px"
                            }
                        }
                    },
                    yaxis: [
                        {
                            axisTicks: {
                                show: true
                            },
                            axisBorder: {
                                show: true,
                                color: "#008FFB"
                            },
                            labels: {
                                style: {
                                    colors: "#a9a9c8",
                                    fontSize: "14px"
                                }
                            },
                            title: {
                                text: "Cas suspect",
                                style: {
                                    color: "#008FFB"
                                }
                            },
                            tooltip: {
                                enabled: true
                            }
                        },
                        {
                            seriesName: "Cas non actif",
                            opposite: true,
                            axisTicks: {
                                show: true
                            },
                            axisBorder: {
                                show: true,
                                color: "#00E396"
                            },
                            labels: {
                                style: {
                                    colors: "#a9a9c8",
                                    fontSize: "14px"
                                }
                            },
                            title: {
                                text: "Cas non actif",
                                style: {
                                    color: "#00E396"
                                }
                            }
                        },
                        {
                          seriesName: "Cas confirmé",
                          opposite: true,
                          axisTicks: {
                              show: true
                          },
                          axisBorder: {
                              show: true,
                              color: "#FEB019"
                          },
                          labels: {
                              style: {
                                  colors: "#FEB019"
                              }
                          },
                          title: {
                              text: "Cas confirmé",
                              style: {
                                  color: "#FEB019"
                              }
                          }
                        }
                    ],
                    tooltip: {
                        fixed: {
                            enabled: true,
                            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
                            offsetY: 30,
                            offsetX: 60
                        }
                    },
                    grid: {
                        show: true,
                        strokeDashArray: 5,
                        borderColor: "#EDEFF5"
                    },
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 40,
                        fontSize: "14px",
                        labels: {
                            colors: '#5B5B98'
                        }
                    }
                };
        }
    )
      
  }
}
