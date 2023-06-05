import { Component, Input } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { PatientModel } from '../../models/patient-model';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss']
})
export class PatientInfoComponent {
  @Input() patient: PatientModel;

  constructor(
    public themeService: CustomizerSettingsService
) {}

  toggleTheme() {
      this.themeService.toggleTheme();
  }
}
