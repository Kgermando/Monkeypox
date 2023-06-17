import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from './common/header/toggle.service';
import { CustomizerSettingsService } from './common/customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monkeypox'; 

  
}
