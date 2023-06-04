import { Component, Input } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { UserModel } from '../../models/user-models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  @Input() user: UserModel;

  constructor(
    public themeService: CustomizerSettingsService
) {}

  toggleTheme() {
      this.themeService.toggleTheme();
  }
}
