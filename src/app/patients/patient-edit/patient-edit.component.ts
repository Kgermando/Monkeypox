import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { UserModel } from 'src/app/users/models/user-models';
import { PatientService } from '../patient.service';
import { PatientModel } from '../models/patient-model';

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

  currentUser: UserModel;

  fourchetteAgeList: any = [
    "Nourissons",
    "Enfant",
    "Adolescent(e)",
    "Adulte"
  ]

  patient: PatientModel;

  constructor(
      public themeService: CustomizerSettingsService,
      private _formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private patientService: PatientService,
  ) { }


  ngOnInit(): void {
    this.authService.user().subscribe(
      res => {
          this.currentUser = res; 
      }
    )

    let id = this.route.snapshot.paramMap.get('id');
    this.patientService.getDataById(Number(id)).subscribe(res => {
      this.patient = res;
      this.isLoading = false;

      console.log(this.patient);
      console.log(id);
    });

    this.formGroup = this._formBuilder.group({
      photo: ['-'],
      nom: ['', Validators.required],
      postnom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],
      age_an: ['', Validators.required],
      age_mois: ['', Validators.required],
      fourchette_age: ['', Validators.required],
      lieu_residence: ['', Validators.required],
      aire_sante: ['', Validators.required],
      profession: ['', Validators.required],
      email: [''],
      telephone: ['', Validators.required],
    });
  }

  onSubmit() {
    try {
      console.log(this.formGroup);
      console.log(this.currentUser.matricule);
      this.isLoading = true;
      var body = {
        photo: this.formGroup.value.photo,
        nom: this.formGroup.value.nom,
        postnom: this.formGroup.value.postnom,
        prenom: this.formGroup.value.prenom,
        sexe: this.formGroup.value.sexe,
        age_an: this.formGroup.value.age_an,
        age_mois: this.formGroup.value.age_mois,
        fourchette_age: this.formGroup.value.fourchette_age,
        lieu_residence: this.formGroup.value.lieu_residence,
        aire_sante: this.formGroup.value.aire_sante,
        profession: this.formGroup.value.profession,
        email: this.formGroup.value.email,
        telephone: this.formGroup.value.telephone,
        signature: this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.patientService.createData(body).subscribe(() => {
          this.isLoading = false;
          this.formGroup.reset();
          this.router.navigate(['/patients/patient-list']);
      });
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
  }


}
