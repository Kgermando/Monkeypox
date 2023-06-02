import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Countries } from 'src/app/shared/models/country.model';
import { countries } from 'src/app/shared/utils/countries';
import { UsersService } from '../users.service';
import { UserModel } from '../models/user-models';

interface Sexe {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  hide = true;

    isLoading: boolean = false;
        countries: Countries[] = countries;

    sexes: Sexe[] = [
        { value: 'Femme', viewValue: 'Femme' },
        { value: 'Homme', viewValue: 'Homme' },
    ];


    employee: UserModel = new UserModel();

    constructor(
        public themeService: CustomizerSettingsService,
        private _formBuilder: FormBuilder, 
        private router: Router,
        private usersService: UsersService
    ) { }


    ngOnInit(): void {
         
    }

 

  
}
