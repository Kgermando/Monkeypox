import { Component } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-patient-stats',
  templateUrl: './patient-stats.component.html',
  styleUrls: ['./patient-stats.component.scss']
})
export class PatientStatsComponent {

  constructor(
    public themeService: CustomizerSettingsService
) {}

toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
}
}
