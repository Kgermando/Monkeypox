import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../models/user-models';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts"; 

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  isLoading = false;

  @ViewChild("chart")
  chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

  user: UserModel;

  constructor(
    public themeService: CustomizerSettingsService,
    private route: ActivatedRoute,
    private router: Router, 
    private usersService: UsersService) {
      this.chartOptions = {
        series: [70],
        chart: {
            height: 110,
            width: 110,
            offsetX: 2.5,
            type: "radialBar",
            sparkline: {
                enabled: true,
            },
        },
        colors: ["#00B69B"],
        plotOptions: {
            radialBar: {
                startAngle: -120,
                endAngle: 120,
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 3,
                        fontSize: "14px",
                        fontWeight: "700",
                    }
                }
            }
        }
    };
    }

  ngOnInit(): void {
    this.isLoading = true;
    let id = this.route.snapshot.paramMap.get('id');
    this.usersService.getDataById(Number(id)).subscribe(res => {
      this.user = res;
      this.isLoading = false;

      console.log(this.user);
      console.log(id);
    });
  }

 



  toggleTheme() {
    this.themeService.toggleTheme();
  }

  
}
