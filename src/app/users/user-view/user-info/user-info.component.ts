import { Component, Input } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { UserModel } from '../../models/user-models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  @Input() user: UserModel;

  constructor(
    public themeService: CustomizerSettingsService,
    private usersService: UsersService,
    private router: Router,
    private _snackBar: MatSnackBar
) {}

  toggleTheme() {
      this.themeService.toggleTheme();
  }

  delete(id: number): void {
    if (confirm('Voulez-vous vraiment supprimer cet element ?')) {
      this.usersService.delete(id).subscribe(() => {
        // this.users = this.users.filter(user => user.id !== id);
        this.router.navigate(['/layouts/users/user-list']);
        this._snackBar.open("Cet élement a été supprimé!", "ok");
      });
    }
  }
}
