import { Component, Input } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { UserModel } from 'src/app/users/models/user-models';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {
  @Input() currentUser: UserModel;

  constructor(
    public themeService: CustomizerSettingsService
) {}

  toggleTheme() {
      this.themeService.toggleTheme();
  }
}
