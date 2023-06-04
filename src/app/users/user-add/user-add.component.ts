import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Countries } from 'src/app/shared/models/country.model';
import { countries } from 'src/app/shared/utils/countries';
import { UsersService } from '../users.service';
import { UserModel } from '../models/user-models';
import { AuthService } from 'src/app/auth/auth.service';
import { StructureModel } from 'src/app/reglage/models/structure-model';
import { StructureService } from 'src/app/reglage/structures/structure.service';

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
    errorMessage: string =' ';

    countries: Countries[] = countries;

    metaStructure: any = [];
    structureList: StructureModel[] = [];

    sexes: Sexe[] = [
        { value: 'Femme', viewValue: 'Femme' },
        { value: 'Homme', viewValue: 'Homme' },
    ];
  
    formGroup!: FormGroup;

    currentUser: UserModel;

    constructor(
        public themeService: CustomizerSettingsService,
        private _formBuilder: FormBuilder, 
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
          this.formGroup.reset();
          this.router.navigate(['/users/user-list']);
      });
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
  }

 

  
}
