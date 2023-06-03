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
export class UserAddComponent implements OnInit {
  hide = true;

    isLoading: boolean = false;
        countries: Countries[] = countries;

    sexes: Sexe[] = [
        { value: 'Femme', viewValue: 'Femme' },
        { value: 'Homme', viewValue: 'Homme' },
    ];


    user: UserModel = {
      id: undefined,
      structure: undefined,
      photo: undefined,
      nom: undefined,
      postnom: undefined,
      prenom: undefined,
      sexe: undefined,
      nationalite: undefined,
      etat_civile: undefined,
      adresse: undefined,
      titre: undefined,
      pays: undefined,
      province: undefined,
      zone_sante: undefined,
      email: undefined,
      telephone: undefined,
      matricule: undefined,
      password: undefined,
      signature: undefined,
      created: undefined,
      update_created: undefined
    };

    constructor(
        public themeService: CustomizerSettingsService,
        private _formBuilder: FormBuilder, 
        private router: Router,
        private usersService: UsersService
    ) { }


    ngOnInit(): void {
         
    }


  save() {
    this.usersService.createData(this.user);
  }

  // to navigate to the corresponding path / to employee list page
  goToList() {
    this.router.navigate(['/users/user-list'])
  }

  onSubmit() { 
    this.isLoading = true;
    console.log(this.user);
    this.save();
    this.isLoading = false;
  }

 

  
}
