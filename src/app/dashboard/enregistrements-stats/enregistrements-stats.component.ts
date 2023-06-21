import { Component } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-enregistrements-stats',
  templateUrl: './enregistrements-stats.component.html',
  styleUrls: ['./enregistrements-stats.component.scss']
})
export class EnregistrementsStatsComponent {
  constructor(
      public themeService: CustomizerSettingsService
  ) {}

  toggleTheme() {
      this.themeService.toggleTheme();
  }
}
