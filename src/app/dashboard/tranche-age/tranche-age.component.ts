import { Component, OnInit, ViewChild } from "@angular/core"; 
import { 
    ApexChart,
    ChartComponent,
    ApexDataLabels, 
    ApexLegend,
    ApexTooltip,
    ApexNonAxisChartSeries,
    ApexStroke, 
} from "ng-apexcharts";
import { DashboardService } from "../dashboard.service";
import { TrancheAgePieModel } from "src/app/shared/models/dashboard-model";

export type ChartOptions = {
    series: ApexNonAxisChartSeries | any;
    stroke: ApexStroke | any;
    chart: ApexChart | any;
    tooltip: ApexTooltip | any;
    dataLabels: ApexDataLabels | any;
    labels: any;
    legend: ApexLegend | any;
    colors: any;
};


@Component({
  selector: 'app-tranche-age',
  templateUrl: './tranche-age.component.html',
  styleUrls: ['./tranche-age.component.scss']
})
export class TrancheAgeComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  trancheAgeList: TrancheAgePieModel[] = [];

  constructor(private dashboardService: DashboardService) {
    
      this.dashboardService.trancheAge().subscribe({
        next: res => {
          this.trancheAgeList = res; 
          this.chartOptions = {
            // series: [59.5, 25, 15.5, 35.5],
            series: this.trancheAgeList.map((item: any) => parseFloat(item.count)),
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
              labels: this.trancheAgeList.map((item: any) => item.fourchette_age),
            //   labels: [
            //       "0 - 11 MOIS",
            //       "12 - 59 MOIS",
            //       "5 - 15 ANS",
            //       "Plus de 15 ANS"
            //   ]
          }; 
        },
        error: (err) => {
          console.log(err);
        }
    });
      
  } 
  
}
