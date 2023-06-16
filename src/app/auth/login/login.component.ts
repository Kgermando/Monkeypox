import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { AuthService } from '../auth.service';
import { Validators } from 'ngx-editor';
import { LocalService } from 'src/app/shared/services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  isLoading = false;

  isLoggIn = false;

  form : FormGroup | any

  constructor(
      public themeService: CustomizerSettingsService,
      private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private localStore: LocalService
  ) {}


  ngOnInit(): void {
      this.form = this.formBuilder.group({
        matricule: ['', Validators.required],
        password: ['', Validators.required]
      });
  }


  onSubmit(): void {
    this.isLoading = true;
    this.authService.login(this.form.getRawValue()).subscribe({
        next: (res) => {
          // console.log(res);
          this.localStore.saveData('auth', JSON.stringify(res));
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
        },
        error: (e) => {
          this.isLoading = false;
          // console.error(e);
          this.isLoggIn = true; 
          this.router.navigate(['/authentification/login']);
        },
        complete: () => {
          this.isLoading = false;
        }
      }
    )

  } 

  dismissAlert() {
    this.isLoggIn = false;
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
