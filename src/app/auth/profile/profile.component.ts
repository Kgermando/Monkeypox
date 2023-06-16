import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";
import { UserModel } from 'src/app/users/models/user-models';
import { LocalService } from 'src/app/shared/services/local.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild("chart")
  chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>;


    loading = false; 

    currentUser: UserModel = {
        id: 0,
        structure: '-',
        photo: '-',
        nom: '-',
        postnom: '-',
        prenom: '-',
        sexe: '-',
        nationalite: '-',
        etat_civile: '-',
        adresse: '-',
        titre: '-',
        pays: '-',
        province: '-',
        zone_sante: '-',
        email: '-',
        telephone: '-',
        matricule: '-',
        password: '-',
        signature: '-',
        created: new Date,
        update_created: new Date
    };

    constructor(
        public themeService: CustomizerSettingsService,
        private authService: AuthService,
        private localStore: LocalService
    ) {
        this.chartOptions = {
            series: [50],
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
    var userId: any = this.localStore.getData('auth')
    this.getUser(parseInt(userId));
    console.log(userId);
  }


    getUser(userId: number): void {
        this.loading = true;
        this.authService.user(userId).subscribe(
            res => {
                console.log(res);
                this.currentUser = res;
                this.loading = false;
            }
        )

      } 

      
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}
