import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { UserModel } from 'src/app/users/models/user-models';
import { PatientService } from '../patient.service';
import { PatientModel } from '../models/patient-model';
import { ZoneSanteService } from 'src/app/reglage/zone-santes/zone-sante.service';
import { ZoneSanteModel } from 'src/app/reglage/models/zone-sante-model';
import { LocalService } from 'src/app/shared/services/local.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.scss']
})
export class PatientEditComponent {
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

  patient: PatientModel;

  id: number;

  public isNourrison = false;

  constructor(
      public themeService: CustomizerSettingsService,
      private _formBuilder: FormBuilder,
      private route: ActivatedRoute,
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

    let id = this.route.snapshot.paramMap.get('id');
    this.patientService.get(Number(id)).subscribe(res => {
      this.patient = res;
      this.isLoading = false;

      console.log(this.patient);
      console.log(id);
    });  

    this.formGroup = this._formBuilder.group({
      fullname: [''],
      sexe: [''],
      age_an: [''],
      age_mois: [''],
      fourchette_age: [''],
      lieu_residence: [''], 
      profession: [''],
      email: ['conctat@opca-rdc.org'],
      telephone: [''],
    });

    this.id = this.route.snapshot.params['id'];
    this.patientService.get(this.id).subscribe(res => {
        this.formGroup.patchValue({ // load data to form
          fullname: res.fullname, 
          sexe: res.sexe,
          age_an: res.age_an,
          age_mois: res.age_mois,
          fourchette_age: res.fourchette_age,
          lieu_residence: res.lieu_residence,
          profession: res.profession,
          email: res.email,
          telephone: res.telephone,
          signature: this.currentUser.matricule,
          created: res.created,
          update_created: new Date()
        });
      }
    );
  }

  public toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.isNourrison = event.checked;
  }

  onSubmit() {
    try {
      this.isLoading = true;
      this.patientService.update(this.id, this.formGroup.getRawValue())
      .subscribe({
        next: () => {
          this.router.navigate(['/layouts/patients/patient-list']);
          this.isLoading = false;
        },
        error: err => {
          console.log(err);
          this.isLoading = false;
        }
      });

      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
  }


}
