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
import { LocalService } from 'src/app/shared/services/local.service';
import { provinces } from 'src/app/shared/utils/province';
import { ZoneSanteService } from 'src/app/reglage/zone-santes/zone-sante.service';
import { ZoneSanteModel } from 'src/app/reglage/models/zone-sante-model';

interface Sexe {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  hide = true;

  isLoading: boolean = false;
  errorMessage: string =' ';
 
  provinceList: String[] = provinces;
 
  structureList: StructureModel[] = [];
  zoneSanteList: ZoneSanteModel[] = [];

  sexes: Sexe[] = [
    { value: 'Femme', viewValue: 'Femme' },
    { value: 'Homme', viewValue: 'Homme' },
];


  formGroup!: FormGroup;

  currentUser: UserModel;

  user: UserModel;

  id: number;

  constructor(
      public themeService: CustomizerSettingsService,
      private _formBuilder: FormBuilder, 
      private route: ActivatedRoute,
      private router: Router, 
      private usersService: UsersService,
      private authService: AuthService,
      private localStore: LocalService,
      private structureService: StructureService,
      private zoneSanteService: ZoneSanteService,
  ) { }


  ngOnInit(): void {
    var userId: any = this.localStore.getData('auth')
    this.authService.user(parseInt(userId)).subscribe(
      res => {
          this.currentUser = res; 
      }
    );
    this.structureService.all().subscribe(res => {
      this.structureList = res; 
    });
    this.zoneSanteService.all().subscribe(res => {
      this.zoneSanteList = res; 
    });

    this.formGroup = this._formBuilder.group({
      structure: [''],
      // photo: [''],
      nom: [''],
      postnom: [''],
      prenom: [''],
      sexe: [''],
      nationalite: [''],
      etat_civile: [''],
      adresse: [''],
      titre: [''],
      province: [''],
      zone_sante: [''],
      email: [''],
      telephone: [''],
    });
 
     
  

    this.id = this.route.snapshot.params['id'];
    this.usersService.get(this.id).subscribe(user => {
        this.formGroup.patchValue({ // load data to form
          structure: user.structure,
          photo: user.photo,
          nom: user.nom,
          postnom: user.postnom,
          prenom: user.prenom,
          sexe: user.sexe,
          nationalite: user.nationalite,
          etat_civile: user.etat_civile,
          adresse: user.adresse,
          titre: user.titre,
          pays: user.pays,
          province: user.province,
          zone_sante: user.zone_sante,
          email: user.email,
          telephone: user.telephone,
          matricule: user.matricule,
          signature: this.currentUser.matricule,
          created: user.created,
          update_created: new Date()
        });
      }
    ); 
  }

 

  onSubmit() {
    try {
      this.isLoading = true;
      this.usersService.update(this.id, this.formGroup.getRawValue())
      .subscribe({
        next: () => {
          this.router.navigate(['/layouts/users/user-list']);
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
