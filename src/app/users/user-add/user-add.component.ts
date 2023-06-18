import { Component, OnInit } from '@angular/core';
import { CustomizerSettingsService } from "src/app/common/customizer-settings/customizer-settings.service";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Countries } from 'src/app/shared/models/country.model';
import { countries } from 'src/app/shared/utils/countries';
import { UsersService } from '../users.service';
import { UserModel } from '../models/user-models';
import { AuthService } from 'src/app/auth/auth.service';
import { StructureModel } from 'src/app/reglage/models/structure-model';
import { StructureService } from 'src/app/reglage/structures/structure.service';
import { provinces } from 'src/app/shared/utils/province';
import { ZoneSanteModel } from 'src/app/reglage/models/zone-sante-model';
import { ZoneSanteService } from 'src/app/reglage/zone-santes/zone-sante.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { formatDate } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';

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

  structureList: StructureModel[] = [];

  zoneSanteList: ZoneSanteModel[] = [];

  provinceList: String[] = provinces;

  userList: UserModel[] = [];
  userID: number[] = []; // List ID

  sexes: Sexe[] = [
    { value: 'Femme', viewValue: 'Femme' },
    { value: 'Homme', viewValue: 'Homme' },
  ];

  public nationaliteList: string[] = [];
  public placeholder: string = 'Enter the Country Name';
  public keyword = 'name';
  public historyHeading: string = 'Recently selected';

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

  constructor(
    public themeService: CustomizerSettingsService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private localStore: LocalService,
    private usersService: UsersService,
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

    this.usersService.all().subscribe(res => {
      this.userList = res;
      this.userID = this.userList.map(e => e.id);
      this.nationaliteList = this.userList.map(user => user.nationalite);

      console.log(this.nationaliteList);
    });




    this.formGroup = this._formBuilder.group({
      structure: ['', Validators.required],
      // photo: [''],
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
    });
  }

  onSubmit() {
    try {
      console.log(this.formGroup);
      console.log(this.currentUser.matricule);
      this.isLoading = true;
      var structure = this.currentUser.structure.slice(0, 3);
      var year = formatDate(new Date(), 'yy', 'en');
      var numID = 0;
      if (this.userID.length !== 0) {
        numID = Math.max(...this.userID);
      }
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
        matricule: `${structure}-${year}-${numID + 1}`,
        signature: this.currentUser.matricule,
        created: new Date(),
        update_created: new Date()
      };
      console.log(body);
      this.usersService.create(body).subscribe({
        next: () => {
          this.isLoading = false;
          this.formGroup.reset();
          this.router.navigate(['/layouts/users/user-list']);
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        }
      });
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
  }





}
