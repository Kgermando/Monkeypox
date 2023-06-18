import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { UserModel } from 'src/app/users/models/user-models';

import { PatientService } from '../patient.service';
import { ZoneSanteModel } from 'src/app/reglage/models/zone-sante-model';
import { ZoneSanteService } from 'src/app/reglage/zone-santes/zone-sante.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.scss']
})

export class PatientAddComponent implements OnInit {
  hide = true;

  isLoading: boolean = false;
  errorMessage: string =' '; 

  formGroup!: FormGroup;

  currentUser: UserModel = {
    id: 0,
    structure: '-',
    photo: '-',
    nom: '-',
    postnom: '-',
    prenom: '-',
    sexe: '-',
    nationalite: '-',
    etat_civile: '-',
    adresse: '-',
    titre: '-',
    pays: '-',
    province: '-',
    zone_sante: '-',
    email: '-',
    telephone: '-',
    matricule: '-',
    role: 'User',
    password: '-',
    signature: '-',
    created: new Date,
    update_created: new Date
};


  fourchetteAgeList: any = [
    "0 - 11 MOIS",
    "12 - 59 MOIS",
    "5 - 15 ANS",
    "Plus de 15 ANS"
  ]

  public isNourrison = false;

  constructor(
      public themeService: CustomizerSettingsService,
      private _formBuilder: FormBuilder, 
      private router: Router,
      private authService: AuthService,
      private localStore: LocalService,
      private patientService: PatientService, 
  ) { }


  ngOnInit(): void {
    var userId: any = this.localStore.getData('auth')
    this.authService.user(parseInt(userId)).subscribe(
      res => {
          this.currentUser = res; 
      }
    ); 

    this.formGroup = this._formBuilder.group({
      photo: ['-'],
      fullname: ['', Validators.required], 
      sexe: ['', Validators.required],
      age_an: ['0', Validators.required],
      age_mois: ['0', Validators.required],
      fourchette_age: ['', Validators.required],
      lieu_residence: ['', Validators.required], 
      profession: ['', Validators.required],
      email: ['conctat@opca-rdc.org'],
      telephone: ['', Validators.required],
    });
    
  }

  public toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
      this.isNourrison = event.checked;
  }

  onSubmit() {
    try {
      console.log(this.formGroup);
      console.log(this.currentUser.matricule);
      this.isLoading = true;
      var body = {
        photo: this.formGroup.value.photo,
        fullname: this.formGroup.value.fullname, 
        sexe: this.formGroup.value.sexe,
        age_an: this.formGroup.value.age_an,
        age_mois: this.formGroup.value.age_mois,
        fourchette_age: this.formGroup.value.fourchette_age,
        lieu_residence: this.formGroup.value.lieu_residence,
        aire_sante: this.currentUser.zone_sante,
        profession: this.formGroup.value.profession,
        email: this.formGroup.value.email,
        telephone: this.formGroup.value.telephone,
        province: this.currentUser.province,
        signature: this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.patientService.create(body).subscribe(() => {
          this.isLoading = false;
          this.formGroup.reset();
          this.router.navigate(['/layouts/patients/patient-list']);
      });
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
  }



}
