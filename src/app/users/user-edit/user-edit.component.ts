import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../models/user-models';
import { StructureModel } from 'src/app/reglage/models/structure-model';
import { Countries } from 'src/app/shared/models/country.model';
import { CustomizerSettingsService } from 'src/app/common/customizer-settings/customizer-settings.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { StructureService } from 'src/app/reglage/structures/structure.service';
import { countries } from 'src/app/shared/utils/countries';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  hide = true;

  isLoading: boolean = false;
  errorMessage: string =' ';

  countries: Countries[] = countries;

  metaStructure: any = [];
  structureList: StructureModel[] = [];


  formGroup!: FormGroup;

  currentUser: UserModel;

  user: UserModel;

  constructor(
      public themeService: CustomizerSettingsService,
      private _formBuilder: FormBuilder, 
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthService,
      private usersService: UsersService,
      private structureService: StructureService,
  ) { }


  ngOnInit(): void {
    this.authService.user().subscribe(
      res => {
          this.currentUser = res; 
      }
    )

    let id = this.route.snapshot.paramMap.get('id');
    this.usersService.getDataById(Number(id)).subscribe(res => {
      this.user = res;
    });

    this.structureService.getList().subscribe(res => {
      this.metaStructure = res;
      this.structureList = this.metaStructure['data'];
    })

    this.formGroup = this._formBuilder.group({
      structure: ['', Validators.required],
      // photo: ['-'],
      nom: ['', Validators.required],
      postnom: ['', Validators.required],
      prenom: ['', Validators.required],
      sexe: ['', Validators.required],
      nationalite: ['', Validators.required],
      etat_civile: ['', Validators.required],
      adresse: ['', Validators.required],
      titre: ['', Validators.required],
      province: ['', Validators.required],
      zone_sante: ['', Validators.required],
      email: [''],
      telephone: ['', Validators.required],
      matricule: ['', Validators.required],
    });
    
  }

onSubmit() {
  try {
    console.log(this.formGroup); 
    console.log(this.currentUser.matricule); 
    this.isLoading = true;
    var body = {
      structure: this.formGroup.value.structure,
      photo: '-',
      nom: this.formGroup.value.nom,
      postnom: this.formGroup.value.postnom,
      prenom: this.formGroup.value.prenom,
      sexe: this.formGroup.value.sexe,
      nationalite: this.formGroup.value.nationalite,
      etat_civile: this.formGroup.value.etat_civile,
      adresse: this.formGroup.value.adresse,
      titre: this.formGroup.value.titre,
      pays: 'RDC',
      province: this.formGroup.value.province,
      zone_sante: this.formGroup.value.zone_sante,
      email: this.formGroup.value.email,
      telephone: this.formGroup.value.telephone,
      matricule: this.formGroup.value.matricule,
      signature: this.currentUser.matricule,
      created: new Date(),
      update_created: new Date()
    };
    console.log(body);
    this.usersService.createData(body).subscribe(() => {
        this.isLoading = false;
        this.router.navigate(['/users/user-list']);
    });
  } catch (error) {
    this.isLoading = false;
    console.log(error);
  }
}

}
