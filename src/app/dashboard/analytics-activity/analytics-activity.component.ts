import { Component, AfterViewInit } from '@angular/core'; 
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { EpidemieService } from 'src/app/epidemies/epidemie.service';
import { EpidemieModel } from 'src/app/epidemies/models/epidemie-model';
import { MetaModel } from 'src/app/shared/models/meta-model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-analytics-activity',
    templateUrl: './analytics-activity.component.html',
    styleUrls: ['./analytics-activity.component.scss']
})
export class AnalyticsActivityComponent implements AfterViewInit {
    ELEMENT_DATA: EpidemieModel[] = [];
  
    metaData: any = [];
    pageMeta: MetaModel;  

    constructor(
        public themeService: CustomizerSettingsService,
        private epidemieService: EpidemieService
    ) {}
 
    ngAfterViewInit() {
        this.epidemieService.all().subscribe(res => {
        this.metaData = res;
    
        this.ELEMENT_DATA = this.metaData['data'];
        this.pageMeta = this.metaData['meta'];  
        })
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}