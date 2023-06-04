import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Countries } from 'src/app/shared/models/country.model';
import { countries } from 'src/app/shared/utils/countries';
import { UsersService } from '../users.service';
import { UserModel } from '../models/user-models';
import { AuthService } from 'src/app/auth/auth.service';

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

    user: UserModel;
  
    formGroup!: FormGroup;

    currentUser: UserModel;

    constructor(
        public themeService: CustomizerSettingsService,
        private _formBuilder: FormBuilder, 
        private router: Router,
        private authService: AuthService,
        private usersService: UsersService
    ) { }


    ngOnInit(): void {
      this.authService.user().subscribe(
        res => {
            this.currentUser = res; 
        }
      )
      this.formGroup = this._formBuilder.group({
        structure: ['', Validators.required],
        photo: [''],
        nom: ['', Validators.required],
        postnom: ['', Validators.required],
        prenom: ['', Validators.required],
        sexe: ['', Validators.required],
        nationalite: ['', Validators.required],
        etat_civile: ['', Validators.required],
        adresse: ['', Validators.required],
        titre: ['', Validators.required],
        pays: ['', Validators.required],
        province: ['', Validators.required],
        zone_sante: ['', Validators.required],
        email: ['', Validators.required],
        telephone: ['', Validators.required],
        matricule: ['', Validators.required],
        password: ['', Validators.required],
      });
      
    }

  // to navigate to the corresponding path / to employee list page
  goToList() {
    this.router.navigate(['/users/user-list'])
  }

  onSubmit() {
    try {
      console.log(this.formGroup); 
      console.log(this.currentUser.matricule); 
      this.isLoading = true;
      var body = {
        structure: this.formGroup.value.structure,
        photo: this.formGroup.value.photo,
        nom: this.formGroup.value.nom,
        postnom: this.formGroup.value.postnom,
        prenom: this.formGroup.value.prenom,
        sexe: this.formGroup.value.sexe,
        nationalite: this.formGroup.value.nationalite,
        etat_civile: this.formGroup.value.etat_civile,
        adresse: this.formGroup.value.adresse,
        titre: this.formGroup.value.titre,
        pays: this.formGroup.value.pays,
        province: this.formGroup.value.province,
        zone_sante: this.formGroup.value.zone_sante,
        email: this.formGroup.value.email,
        telephone: this.formGroup.value.telephone,
        matricule: this.formGroup.value.matricule,
        password: this.formGroup.value.password,
        signature: this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.usersService.createData(body).subscribe(() => {
          this.isLoading = false;
      }); 
    } catch (error) {
      console.log(error);
    }
  }

 

  
}
